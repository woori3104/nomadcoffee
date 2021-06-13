require("dotenv").config();
import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import {typeDefs, resolvers} from "./schema";
import client from "./client";
import { getUser } from "./user/users.utils";
import { graphqlUploadExpress } from "graphql-upload";
const cors = require("cors");
const apollo = new ApolloServer({
    resolvers,
    typeDefs,
    playground:true,
    introspection:true,
    context: async({req}) => {
        return {
            loggedInUser: await getUser(req.headers.token),
            client,
        }
    },
    
});
const PORT = process.env.PORT

const app = express();


apollo.applyMiddleware({ app });
app.use(cors);
// CORS 허용 미들웨어 - 프로덕션일 경우 라이브 URL로 변경
app.use("*", function (req, res, next) {
  console.log(`req:${req}`);
  console.log(`res:${res}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));
app.use("/static", express.static("uploads"));

app.listen({ port: PORT }, () => {
  console.log(`🚀Server is running on http://localhost:${PORT}/graphql ✅`);
});