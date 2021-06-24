import { gql } from "apollo-server";

export default gql`
    type Query {
        searchCaffeShop(keyword:String!, offset:Int): [CoffeeShop]
    }
`;