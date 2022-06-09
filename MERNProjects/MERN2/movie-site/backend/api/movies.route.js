import express from "express";
import MoviesController from '../controller/movies.controller.js'
import ReviewsController from "../controller/reviews.controller.js"

var movieRouter = express.Router();

movieRouter.route("/id/:id").get(MoviesController.apiGetMovieById);
movieRouter.route("/ratings").get(MoviesController.apiGetRatings);


movieRouter.get("/",(req,res,next)=>
{
    try{
    MoviesController.apiGetMovies(req,res,next);
    }
    catch(ex)
    {
        res.status(400);
    }
});


movieRouter.route("/review")
.post(ReviewsController.apiPostReview)
.put(ReviewsController.apiUpdateReview)
.delete(ReviewsController.apiDeleteReview)

export default movieRouter;
