"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../../client");
var users_utils_1 = require("../users.utils");
exports.default = {
    Query: {
        me: users_utils_1.protectedResolver(function (_, __, _a) {
            var loggedInUser = _a.loggedInUser;
            try {
                console.log(loggedInUser);
                return client_1.default.user.findUnique({
                    where: {
                        id: loggedInUser.id,
                    },
                });
            }
            catch (error) {
                console.log(error);
                return "Can't get me";
            }
        }),
    },
};
