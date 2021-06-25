import { gql } from "apollo-server";

export default gql`
    type Query {
        searchCategories(keyword:String!, offset:Int): [CoffeeShop]
    }
`;