import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import crypto from "crypto-js";

import Arr from "./seeds/seeds";
import config from "./config/config";
import ComicDisplay from "./comicDisplay";

function Comic() {
    const { id } = useParams();
    const [ data, setData ] = useState(Arr[0][id - 1]);
    const [ comicData, setComicData ] = useState({});
    const [ image, setImage ] = useState("");
    const [ thumbnail, setThumbnail ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ date, setDate ] = useState(new Date());
    const [ creators, setCreators ] = useState([]);
    const [ links, setLinks ] = useState("");
    const [ description, setDescription ] = useState("");

    useEffect(() => {
        let ts = new Date().getTime();
        let stringToHash = ts + config.marvelPrivate + config.marvelPublic;
        let hash = crypto.MD5(stringToHash).toString();
        let url = `https://gateway.marvel.com/v1/public/comics?title=${data.title}&startYear=${data.start_year}&issueNumber=${data.issue}&ts=${ts}&apikey=${config.marvelPublic}&hash=${hash}`;
        //console.log(url);
        axios.get(url).then(res => {
            console.log(res.data.data.results[0].urls[0].url);
            console.log(res.data.data.results[0]);
            setComicData(res.data.data.results[0]);
            setImage(`${res.data.data.results[0].images[0].path}.${res.data.data.results[0].images[0].extension}`);
            setThumbnail(`${res.data.data.results[0].thumbnail.path}.${res.data.data.results[0].thumbnail.extension}`);
            //setData(res.data.data.results[0]);
            setDate(new Date(res.data.data.results[0].dates[0].date));
            setTitle(res.data.data.results[0].title);
            setCreators(res.data.data.results[0].creators.items);
            setLinks(res.data.data.results[0].urls[0].url);
            const newDesc = res.data.data.results[0].description.replaceAll("<br>", "");
            const newNewDesc = newDesc.replaceAll("32 PGS./Rated T+ ...$2.99", "");
            const newNewNewDesc = newNewDesc.replaceAll("40 PGS./Rated T+ ...$2.99", "");
            setDescription(newNewNewDesc)

        })
    }, []);



    console.log("Creators: " + creators);

    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        return (
                
                <div className="card">
                <img className="card-img-top" src={thumbnail} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p><strong>Published:</strong> {monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}</p> 
                    <p className="card-text">{description ? description : "No description available"}</p>
                    <a href={links} className="btn btn-primary">Learn More</a>
                </div>
                </div>
            
        )
}

export default Comic;
