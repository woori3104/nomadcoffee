"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   type createAccountResult {\n        ok: Boolean!\n        error: String\n    }\n    type Mutation {\n        createAccount(\n            userName: String!\n            email: String!\n            name: String!\n            location: String!\n            password: String!\n            avatarURL: Upload\n            githubUsername: String\n        ): createAccountResult\n    }\n"], ["\n   type createAccountResult {\n        ok: Boolean!\n        error: String\n    }\n    type Mutation {\n        createAccount(\n            userName: String!\n            email: String!\n            name: String!\n            location: String!\n            password: String!\n            avatarURL: Upload\n            githubUsername: String\n        ): createAccountResult\n    }\n"])));
var templateObject_1;
