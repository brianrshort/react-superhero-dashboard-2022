const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComicSchema = new Schema({
  movie: {
    type: String,
    trim: true,
    required: "Movie is Required"
  },
  title: {
    type: String,
    trim: true,
    required: "Topic is Required"
  },
  start_year: {
      type: Number,
      unique: false,
      required: true
  },
  issue: {
    type: Number,
    unique: false,
    required: true
  },
  comicvine: {
    type: String,
    trim: true,
    required: "Comicvine ID is Required"
  },
  comic_order: {
      type: Number,
      unique: false,
      required: true
  }
});

const Comic = mongoose.model("comic", ComicSchema);

module.exports = Comic; 

