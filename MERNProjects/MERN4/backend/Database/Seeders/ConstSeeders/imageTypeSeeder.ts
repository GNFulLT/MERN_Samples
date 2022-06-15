import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    await prisma.imageType.createMany({
        data:[
            {
                name:"src/"
            },
            {
                name:"Base64"
            }
        ]
    })
}

main()
  .catch((e) => {
    console.log(
      "While trying to seed the imagetypes an error occured follow with : " + e
    );
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
