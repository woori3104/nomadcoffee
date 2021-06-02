import client from "../../client";

export default {
  Query: {
    seeCoffeeShop: async (_, { id }) =>
      await client.coffeeShop.findMany({
        where: {id:id}
      }),
  },
};