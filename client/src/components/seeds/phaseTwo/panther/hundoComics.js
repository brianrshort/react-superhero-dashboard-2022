const hundoComics = [
    {
        title: "fantastic+four",
        issueStart: 52,
        issueEnd: 56,
        releaseYear: 1961,
        comicvine: {
            pre: "4000-",
            post: [
                "8666",
                "8732",
                "8810",
                "8876",
                "8943"
            ]
        }
    },
    {
        title: "jungle+action",
        issueStart: 5,
        issueEnd: 24,
        releaseYear: 1972,
        comicvine: {
            pre: "4000-",
            post: [
                "13389",
                "13581",
                "13797",
                "13991",
                "14268",
                "14424",
                "14586",
                "14762",
                "14972",
                "110178",
                "15186",
                "15383",
                "15585",
                "15786",
                "16006",
                "16170",
                "16344",
                "16510",
                "16687",
                "16876"
            ]
        }
    },
    {
        title: "black+panther",
        issueStart: 1,
        issueEnd: 4,
        releaseYear: 1988,
        comicvine: {
            pre: "4000-",
            post: [
                "29850",
                "29962",
                "30082",
                "30207"
            ]
        }
    },
    {
        title: "black+panther",
        issueStart: 1,
        issueEnd: 62,
        releaseYear: 1998,
        comicvine: {
            pre: "4000-",
            post: [
                "46481",
                "46482",
                "46483",
                "46484",
                "46485",
                "46486",
                "46487",
                "46488",
                "46489",
                "46490",
                "46491",
                "46492",
                "46493",
                "46494",
                "46495",
                "46496",
                "46497",
                "46498",
                "46499",
                "46500",
                "46501",
                "46502",
                "50807",
                "50808",
                "50809",
                "50810",
                "50811",
                "50812",
                "50813",
                "50814",
                "50815",
                "50816",
                "50817",
                "50818",
                "50819",
                "50820",
                "50821",
                "50822",
                "50823",
                "78166",
                "78167",
                "78168",
                "78169",
                "78170",
                "78171",
                "80543",
                "126057",
                "126058",
                "126067",
                "126075",
                "126529",
                "126751",
                "149102",
                "149103",
                "149104",
                "149105",
                "149106",
                "149107",
                "149108",
                "149109",
                "149110",
                "149111"
            ]
        }
    },
    {
        title: "black+panther+2099",
        issueStart: 1,
        issueEnd: 1,
        releaseYear: 2004,
        comicvine: {
            pre: "4000-",
            post: [
                "28139"
            ]
        }
    },
    {
        title: "black+panther+saga",
        issueStart: 1,
        issueEnd: 1,
        releaseYear: 2008,
        comicvine: {
            pre: "4000-",
            post: [
                "224858"
            ]
        }
    },
    {
        title: "black+panther%3a+the+sound+and+the+fury",
        issueStart: 1,
        issueEnd: 1,
        releaseYear: 2018,
        comicvine: {
            pre: "4000-",
            post: [
                "658719"
            ]
        }
    },
    {
        title: "rise+of+the+black+panther",
        issueStart: 1,
        issueEnd: 6,
        releaseYear: 2018,
        comicvine: {
            pre: "4000-",
            post: [
                "650923",
                "658727",
                "662093",
                "664919",
                "668779",
                "672290"
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