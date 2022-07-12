const express = require("express")
const router = express.Router()

const Movie = require("../models/movie.model")

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await Movie.find({}).select("title director")
    res.status(200).json(findallMovies)
  } catch (error) {
    next(error)
  }
})

router.get("/movies/:id", async (req, res, next) => {
  try {
    movieId = req.params.id
    const findMovieById = await Movie.findById(movieId, req.body)
    res.status(200).json(findMovieById)
  } catch (error) {
    next(error)
  }
})
module.exports = router
