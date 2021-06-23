"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        seeProfile: function (_, _a, _b) {
            var userName = _a.userName;
            var client = _b.client;
            return client.user.findUnique({
                where: {
                    userName: userName,
                }
            });
        },
    },
};
exports.default = resolvers;
