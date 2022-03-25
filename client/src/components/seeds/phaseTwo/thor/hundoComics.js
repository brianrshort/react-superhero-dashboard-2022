const hundoComics = [
    {
        title: "journey+into+mystery",
        issueStart: 83,
        issueEnd: 88,
        releaseYear: 1952,
        comicvine: {
            pre: "4000-",
            post: [
                "6023",
                "6066",
                "6116",
                "6161",
                "6207",
                "6331"
            ]
        }
    },
    {
        title: "thor%3a+god+of+thunder",
        issueStart: 1,
        issueEnd: 25,
        releaseYear: 2012,
        comicvine: {
            pre: "4000-",
            post: [
                "367695",
                "370246",
                "373307",
                "378889",
                "387263",
                "392358",
                "396432",
                "401210",
                "410322",
                "417845",
                "421696",
                "423681",
                "425941",
                "428300",
                "433178",
                "437497",
                "442176",
                "443988",
                "445185",
                "448004",
                "450555",
                "453420",
                "456555",
                "458624",
                "465851",
            ]
        }
    },
    {
        title: "thor",
        issueStart: 1,
        issueEnd: 8,
        releaseYear: 2014,
        comicvine: {
            pre: "4000-",
            post: [
                "466966",
                "469844",
                "472913",
                "477856",
                "479265",
                "482168",
                "486155",
                "488661"
            ]
        }
    },
    {
        title: "mighty+thor",
        issueStart: 1,
        issueEnd: 23,
        releaseYear: 2015,
        comicvine: {
            pre: "4000-",
            post: [
                "506175",
                "508434",
                "410948",
                "516086",
                "518860",
                "536060",
                "531891",
                "537237",
                "541211",
                "544988",
                "550365",
                "553961",
                "558971",
                "571674",
                "575875",
                "581561",
                "587411",
                "593265",
                "595694",
                "603128",
                "609350",
                "615025",
                "625316"
            ]
        }
    },
    {
        title: "mighty+thor",
        issueStart: 700,
        issueEnd: 706,
        releaseYear: 2015,
        comicvine: {
            pre: "4000-",
            post: [
                "630529",
                "638601",
                "647948",
                "654056",
                "660667",
                "663579",
                "667649"
            ]
        }
    },
    {
        title: "the+unworthy+thor",
        issueStart: 1,
        issueEnd: 5,
        releaseYear: 2016,
        comicvine: {
            pre: "4000-",
            post: [
                "556484",
                "563729",
                "574880",
                "580767",
                "588579"
            ]
        }
    },
    {
        title: "thor",
        issueStart: 1,
        issueEnd: 16,
        releaseYear: 2018,
        comicvine: {
            pre: "4000-",
            post: [
                "673034",
                "675157",
                "677299",
                "680006",
                "685860",
                "689057",
                "692085",
                "695662",
                "696957",
                "700688",
                "703955",
                "706421",
                "710121",
                "712553",
                "713520",
                "717534"
            ]
        }
    },
    {
        title: "king+thor",
        issueStart: 1,
        issueEnd: 4,
        releaseYear: 2019,
        comicvine: {
            pre: "4000-",
            post: [
                "718757",
                "723861",
                "728424",
                "731518"
            ]
        }
    },
    {
        title: "war+of+the+realms",
        issueStart: 1,
        issueEnd: 6,
        releaseYear: 2019,
        comicvine: {
            pre: "4000-",
            post: [
                "705490",
                "706427",
                "707534",
                "709218",
                "710700",
                "712557"
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

