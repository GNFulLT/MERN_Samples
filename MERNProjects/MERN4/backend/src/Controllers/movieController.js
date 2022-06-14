import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class movieController
{
    static async getMovies(limit)
    {
        try
        {
            const data = await prisma.movie.findMany({take:limit});
            return data;
        }
        catch(ex)
        {
            console.log("Error occured while trying to get movies followed by : "+ex);
        }
        finally
        {
            prisma.$disconnect();
        }
    }
    static async getCategories(limit)
    {
        try
        {
            const data = await prisma.category.findMany({take:limit});
            return data;
        }
        catch(ex)
        {
            console.log("Error occured while trying to get movies followed by : "+ex);
        }
        finally
        {
            prisma.$disconnect();
        }
    }
    static async getCategoryByID(id)
    {
        try
        {
            const data = await prisma.category.findUnique({where:{
                id
            }});
            return data;
        }
        catch(ex)
        {
            console.log("Error occured while trying to get movies followed by : "+ex);
        }
        finally
        {
            prisma.$disconnect();
        }
    }
}

export default movieController;