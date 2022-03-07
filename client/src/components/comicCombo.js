import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import crypto from "crypto-js";

import Arr from "./seeds/seeds";
import comicArr from "./seeds/fullComicSeed";
import config from "./config/config";
import sampleMarvel from "./seeds/sampleMarvel.json";
import sampleComicvine from "./seeds/sampleComicvine.json";

function ComicCombo() {
    const { id } = useParams();

    const [ marvel, setMarvel ] = useState(sampleMarvel);
    const [ comicvine, setComicvine ] = useState(sampleComicvine);
    const [ date, setDate ] = useState(new Date(sampleMarvel.dates[0].date));

    const capIt = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function marvelCreatorMap(array) {
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

    function getEntries(array) {
        let newArr = [];
        array.forEach(obj => {
            newArr.push(obj.name);
        })
        return newArr;
    }

    function comicvineMap(array) {
        let newArr = getEntries(array);
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

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }

    function compareMaps(arrOne, arrTwo) {
        let arr = [];
        arrOne.forEach(obj => {
            arr.push(obj.name);
        })
        arrTwo.forEach(obj => {
            arr.push(obj.name);
        })
        const filtered = arr.filter(unique);
        let newMap = filtered.map(name => {
            if (filtered.indexOf(name) === filtered.length - 1) {
                return <span key={name}>{name} </span>
            } else {
                return <span key={name}>{name}, </span>
            }
        })
        return newMap;
        
    }

    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        return (
            <div className="d-flex justify-content-center row m-5 p-5">
            <div className="col-6">
                <div className="card">
                <img className="card-img-top" src={marvel.images[0].path + "." + marvel.images[0].extension} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{marvel.title}</h5>
                    <p><strong>Published:</strong> {monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}</p> 
                    <p><strong>Series:</strong> {marvel.series.name}</p>
                    <p><strong>Creators:</strong></p>
                    {marvelCreatorMap(marvel.creators.items)}
                    <div className="ml-3"></div>
                    <p className="card-text"><strong>Plot: </strong>{marvel.description ? marvel.description : "No description available"}</p>
                    <hr />
                    <p><strong>Characters:</strong> {compareMaps(marvel.characters.items, comicvine.character_credits)}</p>
                    <p><strong>Locations:</strong> {comicvineMap(comicvine.location_credits)}</p>
                    <p><strong>Chattels:</strong> {comicvineMap(comicvine.object_credits)}</p>
                    <p><strong>Tags:</strong> {comicvineMap(comicvine.concept_credits)}</p>
                    <a href={marvel.urls[0].url} className="btn btn-primary m-1">More Marvel</a>
                    <a href={comicvine.site_detail_url} className="btn btn-primary">More Comicvine</a>
                </div>
                </div>
            </div>
            </div>
            
        )


}


export default ComicCombo;