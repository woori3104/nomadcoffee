import { Resolvers } from "../../types";
import client from "../../client";

const resolvers: Resolvers = {
  Query: {
    searchUser: async (_, { username, page = 1 }) =>
      await client.user.findMany({
        where: {
          userName: { contains: username },
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