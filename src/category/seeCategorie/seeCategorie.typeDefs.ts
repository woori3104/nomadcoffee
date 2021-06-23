import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCategorie(name: String!, offset: Int): MutationResponse!
  }
`;