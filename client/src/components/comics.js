import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import crypto from "crypto-js";

import Arr from "./seeds/seeds";
import config from "./config/config";

class Comics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        let newData = [];
        for (var i = 0; i < Arr[0].length; i++) {
            let comic = Arr[0][i];
            let ts = new Date().getTime();
            let stringToHash = ts + config.marvelPrivate + config.marvelPublic;
            let hash = crypto.MD5(stringToHash).toString();
            let url = `https://gateway.marvel.com/v1/public/comics?title=${comic.title}&startYear=${comic.start_year}&issueNumber=${comic.issue}&ts=${ts}&apikey=${config.marvelPublic}&hash=${hash}`;
            //console.log(url);
            axios.get(url).then(response => {
                const obj = {};
                obj.title = response.data.data.results[0].title;
                obj.order = comic.comic_order;
                newData.push(obj);
            }).then(response => {
                let sortData = newData.sort((a, b) => {
                    return a.order - b.order;
                });
                this.setState({data: sortData});
                //console.log("State: " + JSON.stringify(this.state));
            })
        }

    }

    // let data = [];
    // axios.get("/api/comics/")
    //     .then(comicsArr => {
    //         console.log(comicsArr);
    //         for (var i = 0; i < comicsArr.length; i++) {
    //             axios.get(`/api/comics/marvel/${comicsArr[i].comic_order}`)
    //                 .then(response => {
    //                     data.push(`${response[0].title}`);
    //                 })
    //         }
    // });
    // console.log(data);
    
    //console.log("Arr.ComicArr: " + Arr[0].length);

    render() {
        
    let comicsMap = this.state.data.map((obj) => {
        return <p key={obj.order}>{obj.title}</p>;
    })
    
    return (
    <div className="container">
        Comics
        {comicsMap}
    </div>
    )
}
}


export default Comics;