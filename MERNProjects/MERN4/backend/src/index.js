import helmet from "helmet";
import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import apolloServer from "./GraphQL/index.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const devType = process.env.NODE_ENV || production;

if(devType !== "production")
{
console.log("DevType is production using helmet security");

app.use(helmet());

app.use(helmet.hidePoweredBy());

app.use(helmet.xssFilter());
}

app.use(cors());

const startApollo = async () =>
{
    await apolloServer.start();
    apolloServer.applyMiddleware({app,path:"/graphql"});
}

startApollo();

app.listen(PORT,() =>
{
    console.log("Server is running on : "+PORT);
})

