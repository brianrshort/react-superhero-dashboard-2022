const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  movie: {
    type: String,
    trim: true,
    required: "Movie is Required"
  },
  topic: {
    type: String,
    trim: true,
    required: "Topic is Required"
  },
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  release_year: {
      type: Number,
      unique: false,
      required: true
  },
  movie_order: {
      type: Number,
      unique: false,
      required: true
  }
});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie; 

