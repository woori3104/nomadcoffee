import { gql } from "apollo-server";

export default gql`
    type User {
        id: Int!
        userName: String!
        email: String!
        name: String!
        location: String!
        password: String!
        avatarURL: String
        githubUsername: String
        createdAt: String!
        updatedAt: String!
    }
    type  Query {
        users: [User]
    }
`