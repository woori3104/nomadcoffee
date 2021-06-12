import client from "../client";
import { Resolvers, Resolver } from "./../types.d";


const isMine: Resolver = async ({ id }, _, { loggedInUser }) => {
  try {
    const user = await client.user.findFirst({
      where: { shops: { some: { id } } },
    });
    if (user) {
      return user.id === loggedInUser.id;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

const photos: Resolver = async ({ id }) =>
  await client.coffeeShop.findUnique({
    where: { id }
  });

const categories :  Resolver = async ({ id }) =>
  await client.coffeeShop.findUnique({ where: { id } });

const resolvers: Resolvers = {
  coffeeShop: {
    photos,
    categories,
    isMine,
  },
};

export default resolvers;