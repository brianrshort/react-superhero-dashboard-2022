import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import crypto from "crypto-js";

//import Arr from "./seeds/seeds";
import config from "./config/config";
//import comicArr from "./seeds/fullComicSeed";
import ToButton from "./toButton";
//import comicTitles from "./seeds/phaseTwo/strange/comicTitles";
//import comicCovers from "./seeds/phaseTwo/strange/comicCovers";
import strangeComics from "./seeds/phaseTwo/strange/hundoComics";
import strangeCovers from "./seeds/phaseTwo/strange/hundoCovers";
import strangeTitles from "./seeds/phaseTwo/strange/hundoTitles";
import thorComics from "./seeds/phaseTwo/thor/hundoComics";
import thorCovers from "./seeds/phaseTwo/thor/hundoCovers";
import thorTitles from "./seeds/phaseTwo/thor/hundoTitles";
import pantherComics from "./seeds/phaseTwo/panther/hundoComics";
import pantherTitles from "./seeds/phaseTwo/panther/hundoTitles";
import pantherCovers from "./seeds/phaseTwo/panther/hundoCovers";



let styles = {
    card: {
        flexDirection: "row"
    },
    image: {
        width: "25%"
    }
}


function FlexComics () {
    const { topic } = useParams();

    const [ comics, setComics ] = useState([]);
    const [ comicObjects, setComicObjects ] = useState([]);
    const [ covers, setCovers ] = useState([]);
    const [ titles, setTitles ] = useState([]);    
    

    useEffect(() => {
        let comicArr;
        if (topic === "strange") {
            setComics(strangeComics);
            setCovers(strangeCovers);
            setTitles(strangeTitles);
        } else if (topic === "thor") {
            setComics(thorComics);
            setCovers(thorCovers);
            setTitles(thorTitles);
        } else if (topic === "panther") {
            setComics(pantherComics);
            setCovers(pantherCovers);
            setTitles(pantherTitles);
        }
    }, []);

    let comicsMap = titles.map((title) => {
        let index = titles.indexOf(title);
        let plusOne = index + 1;
        const url = "/comics/" + topic + "/" + plusOne;
        return (
            <div className="card m-2" style={styles.card} key={index}>
            <div className="card-body">
                <img className="card-img-top" style={styles.image} src={covers[index]} alt="Card image cap" />
                <span className="p-3">{title}</span>
                {/* <span className="p-3">{title} {comics[index].issue} {comics[index].title} </span> */}
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



export default FlexComics;