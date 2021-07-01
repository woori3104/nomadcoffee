import { Resolvers } from "../../types";
import client from "../../client";

const resolvers: Resolvers = {
  Query: {
    searchCoffeeShop: async (_, { keyword }) =>
      await client.coffeeShop.findMany({
        where: {
          name: { contains: keyword.toLowerCase() },
        },
        orderBy: {
          name: 'asc',
        },
        include: { photos: true, categories: true, user: true },
      }),
    searchCategories: async (_, { keyword }) =>
      await client.coffeeShop.findMany({
        where: {
          categories: {
            some: {
              name: {
                contains: keyword.toLowerCase(),
              },
            },
          },
        },
      }),
  },    
};
export default resolvers;

