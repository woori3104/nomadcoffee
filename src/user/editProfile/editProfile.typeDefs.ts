import { gql } from "apollo-server";

export default gql`
   type EditProfileResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        editProfile(
          userName: String
          name: String
          location: String
          email: String
          password: String
          avatarURL: Upload
          githubUsername: String
        ): EditProfileResult!
    }
 `;

 