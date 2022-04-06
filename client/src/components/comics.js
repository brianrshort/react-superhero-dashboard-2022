import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import crypto from "crypto-js";

import Arr from "./seeds/seeds";
import config from "./config/config";
import comicArr from "./seeds/fullComicSeed";
import ToButton from "./toButton";
import comicTitles from "./seeds/phaseTwo/strange/comicTitles";
import comicCovers from "./seeds/phaseTwo/strange/comicCovers";
import hundoComicArr from "./seeds/phaseTwo/strange/hundoComics";
import hundoCovers from "./seeds/phaseTwo/strange/hundoCovers";
import hundoTitles from "./seeds/phaseTwo/strange/hundoTitles";


let styles = {
    card: {
        flexDirection: "row"
    },
    image: {
        width: "25%"
    }
}


class Comics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comics: hundoComicArr,
            titles: hundoTitles,
            covers: hundoCovers
        }
    }


    // componentDidMount() {
    //         //this.setState({comics: comicArr});
    //         let newData = [];
    //         for (var i = 0; i < hundoComicArr.length; i++) {
    //             let comic = hundoComicArr[i];
    //             let ts = new Date().getTime();
    //             let stringToHash = ts + config.marvelPrivate + config.marvelPublic;
    //             let hash = crypto.MD5(stringToHash).toString();
    //             let url = `https://gateway.marvel.com/v1/public/comics?title=${comic.title}&startYear=${comic.start_year}&issueNumber=${comic.issue}&ts=${ts}&apikey=${config.marvelPublic}&hash=${hash}`;
    //             //console.log(url);
    //             axios.get(url).then(response => {
    //                 const obj = {};
    //                 obj.title = response.data.data.results[0].title;
    //                 obj.order = comic.comic_order;
    //                 const imageUrl = response.data.data.results[0].images[0].path + "." + response.data.data.results[0].images[0].extension
    //                 obj.image = imageUrl;
    //                 newData.push(obj);
    //             }).then(response => {
    //                 let sortData = newData.sort((a, b) => {
    //                     return a.order - b.order;
    //                 });
    //                 console.log(sortData)
    //                 this.setState({titles: sortData});
    //                 //console.log("State: " + JSON.stringify(this.state));
    //             })
    //         }
    //     }


    render() {

        // let comicsMap = this.state.titles.map(obj => {
        //     return <span key={obj.order}>"{obj.image}", </span>
        // })

    let comicsMap = this.state.titles.map((title) => {
        let index = this.state.titles.indexOf(title);
        let plusOne = index + 1;
        const url = "/comics/" + plusOne;
        return (
            <div className="card m-2" style={styles.card} key={index}>
            <div className="card-body">
                <img className="card-img-top" style={styles.image} src={this.state.covers[index]} alt="Card image cap" />
                <span className="p-3">{title} {hundoComicArr[index].issue} {hundoComicArr[index].title} </span>
                {/* <span>{comicArr[index].issue + " " + comicArr[index].title}  </span> */}
                <ToButton url={url} text="Comic" />
            </div>
            
          </div>
            )
    })
    
    return (
    <div className="container mt-4">
        <h1>~100 Doctor Strange Comics</h1>
        <hr />
        <div>
            {comicsMap}
        </div>
    </div>
    )
}
}


export default Comics;