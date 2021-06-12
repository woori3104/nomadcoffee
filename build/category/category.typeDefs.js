"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Category {\n        id:     Int\n        name:   String\n        slug:   String\n        shops:  [CoffeeShop]\n        totalShops: Int\n    }\n"], ["\n    type Category {\n        id:     Int\n        name:   String\n        slug:   String\n        shops:  [CoffeeShop]\n        totalShops: Int\n    }\n"])));
var templateObject_1;
