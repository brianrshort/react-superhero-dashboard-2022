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

const occultArr = [
    {
        t: "eye+of+the+devil",
        y: 1966
    },
    {
        t: "incubus",
        y: 1966
    },
    {
        t: "devil+rides+out",
        y: 1968
    },
    {
        t: "rosemary's+baby",
        y: 1968
    },
    {
        t: "witchfinder",
        y: 1968
    },
    {
        t: "wicker",
        y: 1973
    },
    {
        t: "dr+strange",
        y: 1978
    },
    {
        t: "doctor+mordrid",
        y: 1992
    },
    {
        t: "doctor+strange",
        y: 2007
    },  
    {
        t: "dark+song",
        y: 2016
    },
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

let occultRev = occultArr.reverse();

createMovie(cumberbatchArr, "cumberbatch");
createMovie(raimiArr, "raimi");
createMovie(occultRev, "occult");

export default movieArr;