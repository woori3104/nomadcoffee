import { gql } from "apollo-server";

export default gql`
    type seeUserResult {
        ok: Boolean!
        error: String
        followers: [User]
        totalFollowers : Int
        followings: [User]
        totalFollowings : Int
        totalFollowersPages: Int
        totalFollowingsPages: Int
    }
    type Query {
        seeUser(userName: String!, page: Int): seeUserResult!
    }
`;