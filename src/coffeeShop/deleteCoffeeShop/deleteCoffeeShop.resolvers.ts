import { Resolvers } from "../../types";
import { protectedResolver } from "../../user/users.utils";
import { PrismaDelete } from "@paljs/plugins"
import client from "../../client";

export default {
  Mutation: {
    deleteCoffeeShop: protectedResolver(async (_, { id }, { loggedInUser }) => {
      console.log("deleteCoffeeShop start");
      const coffeeShop = await client.coffeeShop.findUnique({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      });
      if (!coffeeShop) {
        console.log("coffeeShop not found.");
        console.log("deleteCoffeeShop End");
        return {
          ok: false,
          error: "coffeeShop not found.",
        };
      } else if (coffeeShop.userId !== loggedInUser.id) {
        console.log("Not authorized.");
        console.log("deleteCoffeeShop End");
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
        console.log("deleteCoffeeShop End");
        return {
          ok: true,
        };
      }
    }),
  },
};