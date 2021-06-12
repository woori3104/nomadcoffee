import { Resolvers } from "../../types";
import * as bcrypt from "bcrypt";
import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";

const resolvers: Resolvers = {
    Mutation: {
        createAccount: async (_, {
            userName,
            email,
            password,
            name,
            location,
            avatarURL,
            githubUsername
        }) => {
            try {
                console.log("createAccount start");
                let avatar;
                if (avatarURL) {
                    avatar = await uploadToS3(avatarURL, userName, "avatars");
                }
                //check if username or email are already on DB. 
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {
                                userName,
                            },
                            {
                                email,
                            }
                        ],
                    },
                });
                if (existingUser) {
                    throw new Error("This username/password is already taken.");
                }
                // hash password
                const uglyPassword = await bcrypt.hash(password, 10);
                await client.user.create({
                    data: {
                        userName,
                        email,
                        name,
                        location,
                        password: uglyPassword,
                        ...(avatar && { avatarURL: avatar }),
                        githubUsername
                    },
                });
                console.log("createAccount End");
                return { ok: true };
            } catch (error) {
                return { ok: false, error: "Could not create account." };
            }
        },
    },
};
export default resolvers;
