import { gql } from "apollo-server-express";

const typeDefinitions = `#graphql

 type User{
id:Int
avatar: String
 }

 type Post {
 id: Int
 text: String
 user: User
 }

 type RootQuery {
    posts: [Post]
    }  

input PostInput {
     text: String!
    }
input UserInput {
 username: String!
 avatar: String!
}

type RootMutation {
 addPost (post: PostInput!,user: UserInput!): Post
}
 schema {
        query: RootQuery
        mutation: RootMutation
    }
`;

export default [typeDefinitions];
