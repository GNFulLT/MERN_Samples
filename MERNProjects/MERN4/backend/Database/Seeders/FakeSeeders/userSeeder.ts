import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main()
{
    await prisma.user.createMany({
        data:[
            {
                name:"Uğur",
                username:"wqewq",
                password:"qwewq",
                imageTypeID:1,
                email:"asdsa1@gmail.com"
            },
            {
                name:"Kaan",
                username:"kaan",
                password:"kaan",
                imageTypeID:1,
                email:"asdsa2@gmail.com"

            },
            {
                name:"Sebahat",
                username:"sebahat",
                password:"sebahat",
                imageTypeID:1,
                email:"asdsa3@gmail.com"

            },
            {
                name:"Burak",
                username:"burak",
                password:"burak",
                imageTypeID:1,
                email:"asdsa4@gmail.com"

            },
            {
                name:"Hab",
                username:"hab",
                password:"hab",
                imageTypeID:1,
                email:"asdsa5@gmail.com"

            },
        ]
    })
}


main().catch((e) => {
    console.log(
        "While trying to seed the imagetypes an error occured follow with : " + e
    );
}).finally(()=>{
    prisma.$disconnect();
});