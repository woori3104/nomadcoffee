import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: async (_, { page = 1 }) => {
      try {
        const coffeeShop =  await client.coffeeShop.findMany({
          take: 6,
          skip: (page - 1) * 6,
          include: { photos: true, categories: true, user: true },
          orderBy: {
            updatedAt: "desc",
          },
        });
        return coffeeShop;
      } catch (error) {
        console.log(error);
      }
    },
  },
};