import { gql } from "apollo-server";

export default gql`
    type Query {
        searchCoffeeShop(keyword:String!): [CoffeeShop]
        searchCategories(keyword:String!): [CoffeeShop]
    }
`;