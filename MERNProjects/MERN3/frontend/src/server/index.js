import express from "express";
import path from "path";
import helmet from "helmet";
import compress from "compression";
import cors from "cors";
import servicesLoader from './services';
import db from './database';

console.log("Starting")

const utils = {
  db,
 };

const services = servicesLoader(utils);


const root = path.join(__dirname, "../../");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(helmet());



app.use(helmet({
  contentSecurityPolicy : (process.env.NODE_ENV === 'production') ? undefined :  {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "*.amazonaws.com"],
    },
  }
}));
app.use(helmet.referrerPolicy({ policy: "same-origin" }));

app.use(compress());

app.use(cors());

const startApollo = async () =>
{
     await services.graphql.start();

     services.graphql.applyMiddleware({app,path:"/graphql"})
}

startApollo();

app.use("/", express.static(path.join(root, "dist/client")));

app.use("/uploads", express.static(path.join(root, "uploads")));

app.get("/", (req, res) => {
  res.sendFile(path.join(root, "/dist/client/index.html"));
});



app.listen(port, () => {
  console.log("App is running on " + port);
});
