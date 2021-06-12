import { gql } from "apollo-server";

export default gql`
    type CoffeeShop {
        id:         Int!
        name:       String!
        latitude:   String!
        longitude:  String!
        user:       User!
        photos:     [CoffeeShopPhoto]
        categories: [Category]
        isMine:     Boolean
    }
`