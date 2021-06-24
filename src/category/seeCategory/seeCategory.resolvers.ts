import client from "../../client";

export default {
  Query: {
    seeCategorie: async (_, { name, offset = 1 }) => {
      await client.category.findUnique({
        where: {
          name: name
        },
      }).shops({
        take: 5,
        skip:offset,
      });
    }
  },
};