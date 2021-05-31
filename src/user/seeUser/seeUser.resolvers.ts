import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    seeUser: async (_, { userName, page = 1 }, { client }) => {
      console.log(userName);
      const ok = await client.user.findUnique({
        where: { userName },
        select: { id: true },
      });
      if (!ok) {
        return {
            ok: false,
            error: "User not found",
        };
      }
      const followers = await client.user
        .findUnique({ where: { userName }})
        .followers({
            take: 5,
            skip: (page - 1) * 5,
        });
      const totalFollowers = await client.user.count({
        where: { followings : { some: { userName } } },
      });
      const followings = await client.user
        .findUnique({ where: { userName } })
        .followings({
            take: 5,
            skip: (page - 1) * 5,
        });
      const totalFollowings = await client.user.count({
        where: { followers: { some: { userName } } },
      });
      return {
        ok: true,
        followers,
        totalFollowers,
        followings,
        totalFollowings,
        totalFollowersPages: Math.ceil(totalFollowers / 5),
        totalFollowingsPages: Math.ceil(totalFollowings / 5),
      };
    },
  },
};
export default resolvers;