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
                imageTypeID:1
            },
            {
                name:"Kaan",
                username:"kaan",
                password:"kaan",
                imageTypeID:1
            },
            {
                name:"Sebahat",
                username:"sebahat",
                password:"sebahat",
                imageTypeID:1
            },
            {
                name:"Burak",
                username:"burak",
                password:"burak",
                imageTypeID:1
            },
            {
                name:"Hab",
                username:"hab",
                password:"hab",
                imageTypeID:1
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