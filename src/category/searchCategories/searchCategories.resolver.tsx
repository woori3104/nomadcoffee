import { Resolvers } from "../../types";
import client from "../../client";

const resolvers: Resolvers = {
  Query: {
    searchCategories: async (_, { keyword, offset=1 }) =>
      await client.category.findMany({
        where: {
            name: {
                    contains: keyword.toLowerCase(),
                  },
        },
        orderBy: {
          name: 'asc',
        },
        include: { shops: true },
        take: 5,
        skip: offset,
      }),
  },    
};
export default resolvers;