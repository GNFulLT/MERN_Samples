import {ApolloServer} from "apollo-server-express";
import queries from "./Schema/queries.js";
import mutations from "./Schema/mutations.js";

const { readFileSync } = require('fs')


let typeDefs = readFileSync(require.resolve('./Schema/TypeDefs/typedefs.index.gql')).toString('utf-8');
typeDefs += readFileSync(require.resolve('./Schema/TypeDefs/user-image-imageType.gql')).toString('utf-8');
typeDefs += readFileSync(require.resolve('./Schema/TypeDefs/movie_category.gql')).toString('utf-8');

let resolvers = {...queries,...mutations};

const apolloServer  = new ApolloServer({typeDefs,resolvers});


export default apolloServer;