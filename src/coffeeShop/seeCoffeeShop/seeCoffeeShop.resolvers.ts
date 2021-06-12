import client from "../../client";

export default {
  Query: {
    seeCoffeeShop: async (_, { id }) => {
      try {
        console.log("seecoffeeshop");
        console.log(id);
        const Shop= await client.coffeeShop.findUnique({
          where: {id},
          include: { photos: true, categories: true, user: true },
        });
        return Shop;
      } catch (error) {
        console.log(error);
      }
    }
  },
};