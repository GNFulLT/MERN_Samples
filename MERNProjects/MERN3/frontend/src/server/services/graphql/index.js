import { ApolloServer,gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers.js';
import Schema from './schema.js';

const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: resolvers
   });

const server = new ApolloServer({
    schema: executableSchema,
    context: ({ req }) => req
});

export default server;
