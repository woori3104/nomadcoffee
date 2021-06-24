import { gql } from "apollo-server";

export default gql`
    type Query {
        searchCoffeShop(keyword:String!, offset:Int): [CoffeeShop]
    }
`;