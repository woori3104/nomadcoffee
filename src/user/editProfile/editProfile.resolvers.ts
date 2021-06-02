import * as bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import { Resolvers } from "../../types";
import { uploadToS3 } from "../../shared/shared.utils";

const resolverFn = async (
    _,
  { userName, email, name, location, password: newPassword, avatarURL, githubUsername },
  { loggedInUser, client }
) => {
    let avatar = null;
    if (avatarURL) {
        avatar = await uploadToS3(avatarURL, loggedInUser.userName, "avatars");
    }
    let uglyPassword = null;
    if (newPassword) {
        uglyPassword = await bcrypt.hash(newPassword, 10);
    }
    const updatedUser = await client.user.update({
        where: {
            id: loggedInUser.id,
        },
        data: {
            userName,
            name,
            location,
            email,
            githubUsername,
            ...(uglyPassword && { password: uglyPassword }),
            ...(avatar && { avatarURL: avatar }),
        },
    });
    if (updatedUser.id) {
        return {
            ok: true,
        };
    } else {
        return {
            ok: false,
            error: "Could not update profile.",
        };
    }
    };
    const resolvers: Resolvers = {
        Mutation: {
            editProfile: protectedResolver(resolverFn),
        },
    };
    export default resolvers;