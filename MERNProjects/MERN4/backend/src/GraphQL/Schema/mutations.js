const mutations = {
    Mutation:{
        register(root,{username,email,password})
        {
            console.log(`Registered Successfully with username : ${username} email: ${email} password:${password}`);
            return {name:"qwewq"};
        }
    }
}

export default mutations;