import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main()
{
    await prisma.movie.createMany({
        data:[
            {
                title:"Doki Doki",
                about:"Uzun gündelik yaşam",
                review:"Çok güzel",
                categoryID:4
            },
            {
                title:"High School DxD",
                about:"Müthiş",
                review:"Çok güzel",
                categoryID:4
            },
            {
                title:"Martial Peek",
                about:"Müthiş",
                review:"Çok güzel",
                categoryID:2
            }
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