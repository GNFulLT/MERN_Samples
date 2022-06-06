import express from "express";

var movieRouter = express.Router();


movieRouter.get("/",(req,res)=>
{
    res.send("Hi sam");
});

export default movieRouter;