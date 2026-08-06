import { PrismaClient } from "@prisma/client";
import { hotels } from "./seedHotels";

const prisma = new PrismaClient();


async function main() {

  console.log("Starting hotel seed...");


  for (const hotel of hotels) {

    await prisma.hotel.upsert({

      where: {
        id: hotel.id,
      },


      update: {

        name: hotel.name,
        location: hotel.location,
        image: hotel.image,
        price: hotel.price,
        rating: hotel.rating,

      },


      create: {

        id: hotel.id,
        name: hotel.name,
        location: hotel.location,
        image: hotel.image,
        price: hotel.price,
        rating: hotel.rating,

      },

    });


    console.log(`Added: ${hotel.name}`);

  }


  console.log("✅ All hotels added successfully");

}


main()

.then(async () => {

  await prisma.$disconnect();

})


.catch(async (error) => {

  console.error(error);

  await prisma.$disconnect();

  process.exit(1);

});