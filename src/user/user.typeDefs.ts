import { gql } from "apollo-server";

export default gql`
    type User {
        id: Int!
        userName: String!
        email: String!
        name: String!
        location: String!
        password: String!
        bio : string
        avatarURL: String
        githubUsername: String
        searchs: [User]
        followers(page:Int): [User]
        followings(page:Int): [User]
        createdAt: String!
        updatedAt: String!
    }
`