import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    seeProfile: (_, { userName }, { client }) =>
      client.user.findUnique({
        where: {
          userName,
        }
      }),
  },
};
export default resolvers;