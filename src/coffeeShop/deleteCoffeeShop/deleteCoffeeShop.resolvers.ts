import { Resolvers } from "../../types";
import { protectedResolver } from "../../user/users.utils";
import { PrismaDelete } from "@paljs/plugins"
import client from "../../client";

export default {
  Mutation: {
    deleteCoffeeShop: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const coffeeShop = await client.coffeeShop.findUnique({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      });
      if (!coffeeShop) {
        return {
          ok: false,
          error: "coffeeShop not found.",
        };
      } else if (coffeeShop.userId !== loggedInUser.id) {
        return {
          ok: false,
          error: "Not authorized.",
        };
      } else {
        const prismaDelete = new PrismaDelete(client)
        await prismaDelete.onDelete({
          model:"coffeeShop",
          where: {
            id,
          },
          deleteParent: true,
        });
        
        return {
          ok: true,
        };
      }
    }),
  },
};