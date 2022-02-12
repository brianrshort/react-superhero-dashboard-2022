import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import crypto from "crypto-js";

import Arr from "./seeds/seeds";
import config from "./config/config";
import sample from "./seeds/sampleComicvine.json";

//import ComicDisplay from "./comicDisplay";

function ComicTwo() {
    const { id } = useParams();
    const [ data, setData ] = useState(Arr[0][id - 1]);
    const [ comicData, setComicData ] = useState({});
    const [ comicSample, setComicSample ] = useState(sample);
    const [ image, setImage ] = useState("");
    const [ thumbnail, setThumbnail ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ date, setDate ] = useState(new Date());
    const [ creators, setCreators ] = useState([]);
    const [ links, setLinks ] = useState("");
    const [ description, setDescription ] = useState("");

    useEffect(() => {
        let url = `https://comicvine.gamespot.com/api/issue/${data.comicvine}/?api_key=${config.comicvine}&format=json`;
        //console.log(data);
        //console.log(url);
        //console.log(comicSample);
        const descriptionElement = document.getElementById("description");
        descriptionElement.innerHTML = sample.description;
        // axios.get(url).then(response => {
        //     console.log(response.data);
        // })
    }, []);


    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    function makeDate(date) {
        let split = date.split("-");
        let month = parseInt(split[1]);
        let monthName = monthNames[month];
        let day = parseInt(split[2]).toString();
        return `${monthName} ${day}, ${split[0]}`
    }

    function getCharacters(array) {
        let newArr = [];
        array.forEach(obj => {
            newArr.push(obj.name);
        })
        return newArr;
    }

    function characterMap(array) {
        let newArr = getCharacters(array);
        //console.log(newArr);
        let newMap = newArr.map(name => {
            if (newArr.indexOf(name) === newArr.length - 1) {
                return <span key={name}>{name} </span>
            } else {
                return <span key={name}>{name}, </span>
            }
        })
        return newMap;
    }

    const capIt = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function creatorMap(array) {
        let newMap = array.map(obj => {
            let capped = capIt(obj.role);
            return <p className="ml-3 my-0" key={obj.name}><em>{capped}</em>: {obj.name}</p>
        });
        return newMap;
    }

        
    
}

export default ComicTwo;
