"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
var load_files_1 = require("@graphql-tools/load-files");
var merge_1 = require("@graphql-tools/merge");
var loadedTypes = load_files_1.loadFilesSync(__dirname + "/**/*.typeDefs.{j,t}s");
var loadedResolvers = load_files_1.loadFilesSync(__dirname + "/**/*.resolvers.{j,t}s");
exports.typeDefs = merge_1.mergeTypeDefs(loadedTypes);
exports.resolvers = merge_1.mergeResolvers(loadedResolvers);
