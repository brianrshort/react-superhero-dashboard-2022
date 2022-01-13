const express = require("express");
const axios = require("axios");

const router = express.Router();

let db = require('../models'); 

let config = require("../config/config");

router.get("/:topic/:id", (req, res) => {
    console.log(req.params);
    let int = parseInt(req.params.id);
    db.Movie.findOne({ topic: req.params.topic, movie_order: int  }).then(movie => {
        console.log(movie);
        if (movie) {
            let url = `https://www.omdbapi.com/?t=${movie.title}&y=${movie.release_year}&apikey=${config.omdb}`;
            axios.get(url).then(resp => {
                console.log(resp.data);
                res.send(resp.data);
            });
          } else {
                res.send("No response available");
          } 
    }) 
})

module.exports = router;