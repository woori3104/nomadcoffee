import { gql } from "apollo-server";

export default gql`
    type CoffeeShopPhoto {
        id:         Int!
        url:       String!
        latitude:   String!
        longitude:  String!
        user:       User!
        shop:       CoffeeShop!
    }
`