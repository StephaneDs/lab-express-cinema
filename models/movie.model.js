const { Schema, SchemaTypes, model } = require("mongoose")

const movieSchema = new Schema({
  title: SchemaTypes.String,
  director: SchemaTypes.String,
  stars: [SchemaTypes.String],
  image: SchemaTypes.String,
  description: SchemaTypes.String,
  showtimes: [SchemaTypes.String],
})
const Movie = model("Movie", movieSchema)

module.exports = Movie
