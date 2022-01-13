const express = require("express");
const axios = require("axios");
const crypto = require("crypto-js");
const router = express.Router();

let db = require('../models'); 

let config = require("../config/config");

router.get("/marvel/:id", (req, res) => {
    let int = parseInt(req.params.id);
    db.Comic.findOne({ comic_order: int }).then(comic => {
        //console.log(comic);
        //res.send(comic);
        let title;
        if (comic.title.includes("+&+")) {
            let index = comic.title.indexOf("+&+");
            index++;
            let splitTitle = comic.title.split("");
            splitTitle.splice(index, 1, "%26");
            let newTitle = splitTitle.join("");
            title = newTitle;
        } else {
            title = comic.title;
        }
        let ts = new Date().getTime();
        let stringToHash = ts + config.marvelPrivate + config.marvelPublic;
        let hash = crypto.MD5(stringToHash).toString();
        let url = `https://gateway.marvel.com/v1/public/comics?title=${title}&startYear=${comic.start_year}&issueNumber=${comic.issue}&ts=${ts}&apikey=${config.marvelPublic}&hash=${hash}`;
        //console.log(url);
        axios.get(url).then(response => {
            //console.log(response.data.data.results);
            res.send(response.data.data.results);
        })
    })
})

router.get("/comicvine/:id", (req, res) => {
    let int = parseInt(req.params.id);
    db.Comic.findOne({ comic_order: int }).then(comic => {
        //console.log(comic);
        //res.send(comic);
        let url = `https://comicvine.gamespot.com/api/issue/${comic.comicvine}/?api_key=${config.comicvine}&format=json`;
        console.log(url);
        axios.get(url).then(response => {
            console.log(response.data);
            res.send(response.data);
    })
    })
})

module.exports = router;