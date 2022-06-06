import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/posts.js"

const CONNECTION_URL = "mongodb+srv://gnfugur:gnfugur@cluster0.au2ye.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;





const app = express();

app.use(express.urlencoded({extended: true})); 

app.use(express.json({limit:"30mb",extented:true})); 

app.use(cors());


mongoose.connect(CONNECTION_URL,{useUnifiedTopology:true })
.then(()=> app.listen(PORT,() => console.log(`Server running on ${PORT}`)))
.catch((error)=>console.log(error))

app.use('/posts',postRouter);


