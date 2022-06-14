import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main()
{
    await prisma.category.createMany({data:[
        {
            categoryName:"Isekai"
        },
        {
            categoryName:"Martial Arts"
        },
        {
            categoryName:"Fantasy"
        },
        {
            categoryName:"Ecchi"
        }
    ]})
}

main().catch((e) => {
    console.log(
        "While trying to seed the category an error occured followed with : " + e
    );
}).finally(()=>{
    prisma.$disconnect();
});