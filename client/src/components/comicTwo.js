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

    
}

export default ComicTwo;
