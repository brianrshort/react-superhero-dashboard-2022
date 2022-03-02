import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import axios from "axios";
import crypto from "crypto-js";

import comicArr from "./seeds/fullComicSeed";
import config from "./config/config";
import emptyMarvel from "./seeds/emptyMarvel";


function Comic() {
    //Get params
    const { id } = useParams();
    
    //Set data. Data, date, and image are all set from the emptyMarvel object
    //comicData is used from the array to query Marvel developer API
    const [ data, setData ] = useState(emptyMarvel);
    const [ date, setDate ] = useState(emptyMarvel.dates[0].date);
    const [ image, setImage ] = useState(`${emptyMarvel.images[0].path}.${emptyMarvel.images[0].extension}`)
    const [ comicData, setComicData ] = useState(comicArr[parseInt(id) - 1]);

    //Use params and comicData to get display data from Marvel developer api
    //To use the Marvel API, though, you have to use a timestampe, private key, public key,
    //and an MD5 hash string. 
    useEffect(() => {
        let ts = new Date().getTime();
        let stringToHash = ts + config.marvelPrivate + config.marvelPublic;
        let hash = crypto.MD5(stringToHash).toString();
        let url = `https://gateway.marvel.com/v1/public/comics?title=${comicData.title}&startYear=${comicData.start_year}&issueNumber=${comicData.issue}&ts=${ts}&apikey=${config.marvelPublic}&hash=${hash}`;
        //console.log(url);
        fetch(url).then(res => {
            return res.json();
        }).then(results => {
            //console.log(results);
            let comic = results.data.results[0];
            setData(comic);
            setImage(comic.images[0].path + "." + comic.images[0].extension)
            setDate(new Date(comic.dates[0].date));
        })
        
        
        
        // axios.get(url).then(res => {
        //         let comic = res.data.data.results[0];
        //         setData(comic);
        //         setImage(comic.images[0].path + "." + comic.images[0].extension)
        //         setDate(new Date(comic.dates[0].date));
        // })
    }, []);

    //Function to return a string with the first letter capitalized
    const capIt = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //Function to create a creator map with individual entries (roles)
    //as well as arrays of creator names and display all that information
    //in an intelligible way
    function creatorMap(array) {
        const obj = {};
        array.forEach(item => {
            let role = item.role;
            obj[role] = [];
        })
        array.forEach(item => {
            let role = item.role;
            obj[role].push(item.name);
        })
        let creatorArray = [];
        for (const key in obj) {
            let namesMap = obj[key].map(creator => {
                if (obj[key].indexOf(creator) === obj[key].length -1) {
                    return <span key={creator}>{creator} </span>
                } else {
                    return <span key={creator}>{creator}, </span>
                }
            });
            let keyName;
            if (obj[key].length === 1){
                keyName = key;
            } else {
                keyName = key + "s";
            }
            let graph = <p key={key}><em>{capIt(keyName)}</em>: {namesMap}</p>
            creatorArray.push(graph);    
        }
        let creatorDiv = <div className="ml-3">{creatorArray}</div>
        return creatorDiv;
    }

    //A simpler map function that lists the characters in the characters array
    //from the data.characters.items array
    function characterMap(array) {
        let characterMap = array.map(obj => {
            if (array.indexOf(obj) === array.length -1) {
                return <span key={obj.name}>{obj.name}</span>    
            } else {
                return <span key={obj.name}>{obj.name}, </span>
            }
        })
        return characterMap;
    }

    //Month names array to use with date.getMonth
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    //Displayed data
        return (
            <div className="d-flex justify-content-center row m-5 p-5">
            <div className="col-6">
                <div className="card">
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p><strong>Published:</strong> {monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}</p> 
                    <p><strong>Series:</strong> {data.series.name}</p>
                    <p><strong>Characters:</strong> {characterMap(data.characters.items)}</p>
                    <p><strong>Creators:</strong></p>
                    {creatorMap(data.creators.items)}
                    <div className="ml-3"></div>
                    <p className="card-text"><strong>Plot: </strong>{data.description ? data.description : "No description available"}</p>
                    <a href={data.urls[0].url} className="btn btn-primary">Learn More</a>
                </div>
                </div>
            </div>
            </div>
            
        )
}

export default Comic;
