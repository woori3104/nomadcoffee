"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Mutation {\n        createCoffeeShop(\n            name: String!\n            latitude: String!\n            longitude: String!\n            photos: [Upload]\n            categories: [String]\n        ): MutationResponse!\n    }\n"], ["\n    type Mutation {\n        createCoffeeShop(\n            name: String!\n            latitude: String!\n            longitude: String!\n            photos: [Upload]\n            categories: [String]\n        ): MutationResponse!\n    }\n"])));
var templateObject_1;
