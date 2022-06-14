import {ApolloServer} from "apollo-server-express";
import resolvers from "./Schema/resolvers.js";
const { readFileSync } = require('fs')

let typeDefs = readFileSync(require.resolve('./Schema/TypeDefs/typedefs.index.gql')).toString('utf-8');
typeDefs += readFileSync(require.resolve('./Schema/TypeDefs/user-image-imageType.gql')).toString('utf-8');
typeDefs += readFileSync(require.resolve('./Schema/TypeDefs/movie_category.gql')).toString('utf-8');

const apolloServer  = new ApolloServer({typeDefs,resolvers});


export default apolloServer;