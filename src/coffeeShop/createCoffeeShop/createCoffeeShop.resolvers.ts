import { protectedResolver } from "../../user/users.utils";
import { uploadToS3 } from "../../shared/shared.utils";

export default {
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (_, { name, latitude, longitude, photos, categories }, { loggedInUser, client }) => {
        console.log("createCoffeeshop");
        console.log(name);
        console.log(photos);
        console.log(categories);
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
            const slug = category.trim().toLowerCase().replace(/\s+/g, "-");
            categoryObjs.push({
              where: { name:category },
              create: { name:category, slug:slug },
            });
          })
        };

        let photoObjs = [];
         if (photos) {
          await Promise.all(
            photos.map(async (photo) => {
              let photoUrl = await uploadToS3(
                photo,
                loggedInUser.id,
                "shops"
              );
              photoObjs.push({
                url: photoUrl,
              });
            })
          );
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