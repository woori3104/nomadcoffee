import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  User: {
    followers: async ({ id },{ page = 1 }, { client }) => 
      await client.user
        .findUnique({ where: { id }})
        .followers({
            take: 5,
            skip: (page - 1) * 5,
      }),
    followings:async ({ id },{ page = 1 }, { client }) => 
       await client.user
        .findUnique({ where: { id } })
        .followings({
            take: 5,
            skip: (page - 1) * 5,
        }),
      },
    };
export default resolvers;