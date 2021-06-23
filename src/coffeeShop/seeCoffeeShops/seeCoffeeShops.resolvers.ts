import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: async (_, { offset }) => {
      try {
        const coffeeShop =  await client.coffeeShop.findMany({
          take: 6,
          skip: offset,
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