const comicsArr = [
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
        issueEnd: 168,
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
                "110995",
                "110996",
                "110997",
                "110998",
                "111040",
                "111041",
                "111042",
                "111043",
                "111064",
                "111065",
                "111067",
                "111069",
                "111070",
                "111079",
                "111080",
                "111081",
                "111082",
                "111083",
                "111096",
                "111097",
                "111098",
                "111105",
                "111106",
                "111109",
                "111076",
                "111075",
                "111084",
                "111095",
                "111094",
                "111093",
                "111074",
                "111073",
                "111072",
                "111071",
                "111063",
                "111018",
                "110842",
                "110841",
                "110839",
                "110838",
                "110837",
                "110836",
                "110781",
                "110708",
                "110654"
            ]
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

console.log(comicArr.length);

//export default comicArr;
