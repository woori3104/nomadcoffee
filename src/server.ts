require("dotenv").config();
import * as express from "express";
import * as logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import {typeDefs, resolvers} from "./schema";
import client from "./client";
import { getUser } from "./user/users.utils";

const apollo = new ApolloServer({
    resolvers,
    typeDefs,
    context: async({req}) => {
        return {
            loggedInUser: await getUser(req.headers.token),
            client,
        }
    },
});
const PORT = process.env.PORT

const app = express();
app.use(logger("tiny"));
app.use("/static", express.static("uploads"));
apollo.applyMiddleware({ app });
app.listen({ port: PORT }, () => {
  console.log(`🚀Server is running on http://localhost:${PORT}/graphql  ✅`);
});