 const hundoComics = [
    {
        title: "strange+tales",
        issueStart: 110,
        issueEnd: 111,
        releaseYear: 1951,
        comicvine: {
            pre: "4000-",
            post: [
                "110835",
                "110808"
            ]
        }
    },
    {
        title: "strange+tales",
        issueStart: 114,
        issueEnd: 123,
        releaseYear: 1951,
        comicvine: {
            pre: "4000-",
            post: [
                "110871",
                "110872",
                "110873",
                "110874",
                "110883",
                "110948",
                "110949",
                "110950",
                "110993",
                "110994",
            ]
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
        title: "doctor+strange%3a+the+oath",
        issueStart: 1, 
        issueEnd: 5,
        releaseYear: 2006,
        comicvine: {
            pre: "4000-",
            post: [
                "105989",
                "105988",
                "105990",
                "106026",
                "106721"
            ]
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
    {
        title: "doctor+strange",
        issueStart: 1,
        issueEnd: 26,
        releaseYear: 2015,
        comicvine: {
            pre: "4000-",
            post: [
                "502116",
                "504935",
                "507179",
                "510496",
                "513646",
                "518855",
                "527138",
                "531879",
                "537232",
                "542620",
                "548575",
                "552159",
                "553956",
                "558415",
                "569330",
                "578457",
                "581556",
                "583719",
                "592596",
                "599863",
                "598372",
                "603121",
                "609346",
                "616189",
                "622937",
                "630520",
            ]
        }
    },
    {
        title: "doctor+strange",
        issueStart: 381,
        issueEnd: 390,
        releaseYear: 2015,
        comicvine: {
            pre: "4000-",
            post: [
                "638595",
                "644504",
                "647940",
                "654053",
                "660016",
                "661149",
                "662744",
                "665912",
                "667638",
                "670742"
            ]
        }
    },
    {
        title: "doctor+strange+annual",
        issueStart: 1,
        issueEnd: 1,
        releaseYear: 2016,
        comicvine: {
            pre: "4000-",
            post: ["551303"]
        }
    },
    {
        title: "doctor+strange+and+the+sorcerers+supreme",
        issueStart: 1,
        issueEnd: 12,
        releaseYear: 2016,
        comicvine: {
            pre: "4000-",
            post: [
                "555518",
                "558963",
                "571663",
                "575865",
                "580749",
                "585078",
                "591756",
                "597189",
                "605111",
                "608243",
                "617841",
                "621663"
            ]
        }
    },
    {
        title: "doctor+strange%3a+last+days+of+magic",
        issueStart: 1,
        issueEnd: 1,
        releaseYear: 2016,
        comicvine: {
            pre: "4000-",
            post: ["527139"]
        }
    },
    {
        title: "doctor+strange%3a+mystic+apprentice",
        issueStart: 1,
        issueEnd: 1,
        releaseYear: 2016,
        comicvine: {
            pre: "4000-",
            post: ["555519"]
        }
    },
    {
        title: "doctor+strange",
        issueStart: 1,
        issueEnd: 20,
        releaseYear: 2018,
        comicvine: {
            pre: "4000-",
            post: [
                "672283",
                "674130",
                "675977",
                "679990",
                "685841",
                "687010",
                "691378",
                "692543",
                "694123",
                "699397",
                "701309",
                "704812",
                "706947",
                "709716",
                "712528",
                "714232",
                "716356",
                "717516",
                "718750",
                "721150"
            ]
        }
    },
    {
        title: "doctor+strange%3a+damnation",
        issueStart: 1,
        issueEnd: 4,
        releaseYear: 2018,
        comicvine: {
            pre: "4000-",
            post: [
                "660660",
                "662087",
                "663570",
                "667639"
            ]
        }
    },
    {
        title: "dr.+strange",
        issueStart: 1,
        issueEnd: 6,
        releaseYear: 2019,
        comicvine: {
            pre: "4000-",
            post: [
                "731665",
                "735521",
                "737155",
                "739557",
                "775008",
                "787347"
            ]
        }
    },
 ]

let comicOrderIndex = 1;
let hundoComicArr = [];

for (var i = 0; i < hundoComics.length; i++) {
    let comic = hundoComics[i];
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
        hundoComicArr.push(obj);
        comicOrderIndex++;
    }
}

//console.log(comicArr.length);

export default hundoComicArr;
