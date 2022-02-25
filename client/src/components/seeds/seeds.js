// const mongoose = require("mongoose");

// const Comic = require('../models/comic');
// const Movie = require("../models/movie");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hero", { useNewUrlParser: true });

const comicsArr = [
    {
        title: "strange+tales",
        issueStart: 110,
        issueEnd: 123,
        releaseYear: 1951,
        comicvine: {
            pre: "4000-",
            post: [
                "110835",
                "110808",
                "110869",
                "110870",
                "110871",
                "110872",
                "110873",
                "110874",
                "110883",
                "110948",
                "110949",
                "110950",
                "110993",
                "110994"
            ]
        }
    },
    {
        title: "fantastic+four",
        issueStart: 27,
        issueEnd: 27,
        releaseYear: 1961,
        comicvine: {
            pre: "4000-",
            post: ["7158"]
        }
    },
    {
        title: "amazing+spider-man+annual",
        issueStart: 1,
        issueEnd: 1,
        releaseYear: 1964,
        comicvine: {
            pre: "4000-",
            post: ["6837"]
        }
    },
    {
        title: "doctor+strange",
        issueStart: 169,
        issueEnd: 183,
        releaseYear: 1968,
        comicvine: {
            pre: "4000-",
            post: [
                "139646",
                "139647",
                "139648",
                "139651",
                "139652",
                "139650",
                "139649",
                "9992",
                "10044",
                "10097",
                "10152",
                "10204",
                "10308",
                "10405",
                "10512"
            ]
        }
    },
    {
        title: "doctor+strange",
        issueStart: 1,
        issueEnd: 81,
        releaseYear: 1974,
        comicvine: {
            pre: "4000-",
            post: [
                "14334",
                "14486",
                "14576",
                "14660",
                "14834",
                "15053",
                "130433",
                "15266",
                "15477",
                "15677",
                "15861",
                "16077",
                "16253",
                "16339",
                "16414",
                "16504",
                "16592",
                "16680",
                "16771",
                "16952",
                "17180",
                "17343",
                "17498",
                "17677",
                "17867",
                "18038",
                "18243",
                "18408",
                "18473",
                "18731",
                "18889",
                "19033",
                "19289",
                "19427",
                "19573",
                "19703",
                "19841",
                "19981",
                "20163",
                "20307",
                "20450",
                "20588",
                "20727",
                "20856",
                "21033",
                "21173",
                "21297",
                "21438",
                "21591",
                "21727",
                "21927",
                "22080",
                "22228",
                "22372",
                "22516",
                "22668",
                "22860",
                "23029",
                "23200",
                "23369",
                "23538",
                "23721",
                "23974",
                "24197",
                "24402",
                "24598",
                "24784",
                "24989",
                "25257",
                "25386",
                "25582",
                "25782",
                "25979",
                "26190",
                "26502",
                "26696",
                "26887",
                "27080",
                "27274",
                "27486",
                "27788"
            ]
        }
    },
    {
        title: "doctor+strange+annual",
        issueStart: 1,
        issueEnd: 1,
        releaseYear: 1976,
        comicvine: {
            pre: "4000-",
            post: ["182863"]
        }
    },
    {
        title: "doctor+strange+%26+doctor+doom%3a+triumph+and+torment",
        issueStart: 0,
        issueEnd: 0,
        releaseYear: 1989,
        comicvine: {
            pre: "4000-",
            post: ["139720"]
        }
    },
    
    {
        title: "doctor+strange%3a+season+one",
        issueStart: 1,
        issueEnd: 1,
        releaseYear: 2011,
        comicvine: {
            pre: "4000-",
            post: ["357023"]
        }
    },
]

//let newArr = [];
let comicOrderIndex = 1;
let comicArr = [];

for (var i = 0; i < comicsArr.length; i++) {
    let comic = comicsArr[i];
    for (var j = comic.issueStart; j <= comic.issueEnd; j++) {
        let obj = {};
        let index = j - comic.issueStart;
        obj.movie = "strange";
        obj.title = comic.title;
        obj.start_year = comic.releaseYear;
        obj.issue = j; 
        obj.comicvine = `${comic.comicvine.pre}${comic.comicvine.post[index]}`;
        obj.comic_order = comicOrderIndex;
        //newArr.push(obj);
        // Comic.create(obj)
        //     .then(dbExample => {
        //         console.log(dbExample);
        //     })
        //     .catch(({ message }) => {
        //         console.log(message);
        //     })
        comicArr.push(obj);
        comicOrderIndex++;
    }
}


let cumberbatchArr = [
    {
        t: "spider-man",
        y: 2021
    },
    {
        t: "louis+wain",
        y: 2021
    },
    {
        t: "power+of+the+dog",
        y: 2021
    },
    {
        t: "mauritanian",
        y: 2021
    },
    {
        t: "courier",
        y: 2020
    },
    {
        t: "1917",
        y: 2019
    },
    {
        t: "between+two+ferns",
        y: 2019
    },
    {
        t: "endgame",
        y: 2019
    },
    {
        t: "mowgli",
        y: 2018
    },
    {
        t: "grinch",
        y: 2018
    },
    {
        t: "infinity+war",
        y: 2018
    },
    {
        t: "current+war",
        y: 2017
    },
    {
        t: "strange",
        y: 2016
    },
    {
        t: "zoolander",
        y: 2016
    },
    {
        t: "hamlet",
        y: 2015
    },
    {
        t: "black+mass",
        y: 2015
    },
    {
        t: "hobbit",
        y: 2014
    },
    {
        t: "penguins+of+madagascar",
        y: 2014
    },
    {
        t: "imitation+game",
        y: 2014
    },
    {
        t: "hobbit",
        y: 2013
    },
    {
        t: "osage+county",
        y: 2013
    },
    {
        t: "fifth+estate",
        y: 2013
    },
    {
        t: "years+a+slave",
        y: 2013
    },
    {
        t: "star+trek",
        y: 2013
    },
    {
        t: "hobbit",
        y: 2012
    },
    {
        t: "wreckers",
        y: 2011
    },
    {
        t: "war+horse",
        y: 2011
    },
    {
        t: "tinker+tailor",
        y: 2011
    },
    {
        t: "frankenstein",
        y: 2011
    },
    {
        t: "whistleblower",
        y: 2010
    },
    {
        t: "third+star",
        y: 2010
    },
    {
        t: "four+lions",
        y: 2010
    },
    {
        t: "creation",
        y: 2009
    },
    {
        t: "burlesque+fairytales",
        y: 2009
    },
    {
        t: "boleyn",
        y: 2008
    },
    {
        t: "atonement",
        y: 2007
    },
    {
        t: "amazing+grace",
        y: 2006
    },
    {
        t: "starter+for+10",
        y: 2006
    },
    {
        t: "to+kill+a+king",
        y: 2003
    },
]

const raimiArr = [
    {
        t: "oz",
        y: 2013
    },
    {
        t: "drag",
        y: 2009
    },
    {
        t: "spider-man",
        y: 2007
    },
    {
        t: "spider-man",
        y: 2004
    },
    {
        t: "spider-man",
        y: 2002
    },
    {
        t: "gift",
        y: 2000
    },
    {
        t: "game",
        y: 1999
    },
    {
        t: "simple",
        y: 1998
    },
    {
        t: "quick",
        y: 1995
    },
    {
        t: "darkness",
        y: 1992
    },
    {
        t: "darkman",
        y: 1990
    },
    {
        t: "evil+dead",
        y: 1987
    },
    {
        t: "crimewave",
        y: 1985
    },
    {
        t: "evil+dead",
        y: 1981
    }
]

let movieArr = [];
function createMovie(arr, topic) {
    let index = 1;
    let rev = arr.reverse();
    for (var i = 0; i < rev.length; i++) {
        let obj = {};
        obj.movie = "strange";
        obj.topic = topic;
        obj.title = rev[i].t;
        obj.release_year = rev[i].y;
        obj.movie_order = index;
        // Movie.create(obj)
        //     .then(dbExample => {
        //         console.log(dbExample);
        //     })
        //     .catch(({ message }) => {
        //         console.log(message);
        //     })
        movieArr.push(obj);
        index++;
    }
}

createMovie(cumberbatchArr, "cumberbatch");
createMovie(raimiArr, "raimi");

let Arr = [ comicArr, movieArr ];

module.exports = Arr;