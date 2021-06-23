import client from "../../client";

export default {
  Query: {
    seeCategories: async (_, { offset = 0 }) => {
      await client.category.findMany({
        orderBy: {
          name: 'asc',
        },
        take: 5,
        skip: offset,
      });
    }
      
  },
};