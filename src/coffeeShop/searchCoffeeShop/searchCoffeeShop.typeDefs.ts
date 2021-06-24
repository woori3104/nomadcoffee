import { gql } from "apollo-server";

export default gql`
    type Query {
        searchCoffeeShop(keyword:String!, offset:Int): [CoffeeShop]
    }
`;