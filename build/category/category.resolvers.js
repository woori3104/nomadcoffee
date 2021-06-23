"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client");
exports.default = {
    Category: {
        totalShops: function (name) {
            return client_1.default.coffeeShop.count({
                where: { categories: { some: { name: name } } },
            });
        },
    },
};
