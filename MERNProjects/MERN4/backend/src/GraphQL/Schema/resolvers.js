import users from "../FakeData/users.js"

const resolvers = {
    Image:{
        imageType()
        {
            return {name:"Base64"};
        }
    },
    User:{
        image()
        {
            return {image:"sa"};
        }
    },
    Query:{
        getUsers(_,{limit = 20}){
            if(limit > 200)
                limit = 20;
            let sliceLimit = users.length > limit ? limit : users.length;
            return users.slice(0,sliceLimit);
        }
    },
};

export default resolvers;