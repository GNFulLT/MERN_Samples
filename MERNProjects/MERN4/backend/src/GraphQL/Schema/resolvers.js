import userController from "../../Controllers/userController.js";
import movieController from "../../Controllers/movieController.js";
const resolvers = {
    Query:{
        async getImageTypes(root,args,context)
        {
            const res = await userController.getImageTypes();
            return res;
        },
        async getImageTypeByID(root,{imageTypeID},context)
        {
            const res = await userController.getImageTypeByID(imageTypeID);
            return res;
        },
        async getMovies(root,{limit=20},context)
        {
            const res = await movieController.getMovies(limit);
            return res;
        },
        async getCategories(root,{limit=20},context)
        {
            const res = await movieController.getCategories(limit);
            return res;
        },
        async getCategoryByID(root,{categoryID},context)
        {
            const res = await movieController.getCategoryByID(categoryID);
            return res;
        }
    },
};

export default resolvers;