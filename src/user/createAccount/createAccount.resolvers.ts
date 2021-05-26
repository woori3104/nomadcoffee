import * as bcrypt from "bcrypt";
import client from "../../client";

export default {
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
                        avatarURL,
                        githubUsername
                    },
                });
                return { ok: true };
            } catch (error) {
                console.log(error);
                return { ok: false, error: "Could not create account." };
            }
        },
    },
};