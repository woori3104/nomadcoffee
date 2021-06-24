import { Resolvers } from "../../types";
import client from "../../client";

const resolvers: Resolvers = {
  Query: {
    searchCoffeeShop: async (_, { keyword, offset=0 }) =>
      await client.coffeeShop.findMany({
        where: {
          name: { contains: keyword.toLowerCase() },
        },
        orderBy: {
          name: 'asc',
        },
        include: { photos: true, categories: true, user: true },
        take: 5,
        skip: offset,
      }),
  },    
};
export default resolvers;