import { gql } from "apollo-server";

export default gql`
    type Mutation {
        editProfile(
          userName: String
          name: String
          location: String
          email: String
          password: String
          avatarURL: Upload
          githubUsername: String
        ): MutationResponse!
    }
 `;

 