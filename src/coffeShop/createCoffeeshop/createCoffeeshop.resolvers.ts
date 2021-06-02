import { protectedResolver } from "../../user/users.utils";
import { uploadToS3 } from "../../shared/shared.utils";
import coffeShopTypeDefs from "../coffeShop.typeDefs";

export default {
  Mutation: {
    createCoffeeshop: protectedResolver(
      async (_, { name, latitude, longitude, photos, categories }, { loggedInUser, client }) => {
        const ok = await client.user.findUnique({
          where: {
            id: loggedInUser.id,
          },
          select: {
            userName: true,
          },
        });
        if (!ok) {
          return {
            ok: false,
            error: "User not found.",
          };
        };
        let categoryObjs = [];
        if (categories) {
          categories.forEach(category => {
            const slug = category.replace(" ", "_");
            categoryObjs.push({
              where: { name:category },
              create: { name:category, slug:slug },
            });
          })
        };

        let photoObjs = [];
        if (photos) {
          for await (let photo of photos) {
            const url = await uploadToS3(photo, loggedInUser.id, "shops");
            photoObjs.push({url:url});
          }
        }

        await client.coffeeShop.create({
          data: {
            name,
            latitude,
            longitude,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            categories: {
              connectOrCreate: categoryObjs,
            },
            photos: {
              create:photoObjs,
            },
          },
        });
        return {
          ok: true,
        };
        
      }
    ),
  },
};