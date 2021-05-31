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
        searchs: [User]
        followers: [User]
        followings: [User]
        totalFollowings: Int!
        totalFollowers: Int!
        createdAt: String!
        updatedAt: String!
    }
`