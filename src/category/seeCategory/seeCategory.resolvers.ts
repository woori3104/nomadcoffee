import client from "../../client";

export default {
  Query: {
    seeCategory: async (_, { name}) => {
      await client.category.findUnique({
        where: {
          name: name
        },
        include: { shops: true },
      }).shops({
        take: 5,
      });
      
    }
  },
};