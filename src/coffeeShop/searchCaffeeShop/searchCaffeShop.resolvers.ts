import { Resolvers } from "../../types";
import client from "../../client";

const resolvers: Resolvers = {
  Query: {
    searchCaffeShop: async (_, { keyword, offset=0 }) =>
      await client.coffeeShop.findMany({
        where: {
          name: { contains: keyword.toLowerCase() },
        },
        orderBy: {
          name: 'asc',
        },
        take: 5,
        skip: offset,
      }),
  },    
};
export default resolvers;