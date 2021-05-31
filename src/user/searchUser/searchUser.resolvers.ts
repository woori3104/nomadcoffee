import { Resolvers } from "../../types";
import client from "../../client";

const resolvers: Resolvers = {
  Query: {
    searchUser: async (_, { keyword, page = 1 }) =>
      await client.user.findMany({
        where: {
          userName: { contains: keyword.toLowerCase() },
        },
        orderBy: {
          userName: 'asc',
        },
        take: 5,
        skip: (page - 1) * 5,
      }),
  },    
};
export default resolvers;