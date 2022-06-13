import helmet from "helmet";
import express from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const devType = process.env.NODE_ENV || production;

if(devType === "production")
{
console.log("DevType is production using helmet security");

app.use(helmet());

app.use(helmet.hidePoweredBy());
}
app.listen(PORT,() =>
{
    console.log("Server is running on : "+PORT);
})