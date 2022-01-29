import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Arr from "./seeds/seeds";
import config from "./config/config";

function Movie() {
    const { id, topic } = useParams();
    const [ data, setData ] = useState(Arr[1]);
    const [ movie, setMovie ] = useState({});
    const [ movieData, setMovieData ] = useState({});

    useEffect(() => {
        const filtered = data.filter(obj => {
            //console.log(typeof obj.movie_order + " " + typeof id);
            return (obj.movie_order === parseInt(id) && obj.topic === topic);
        })
        console.log(filtered);
        setMovie(filtered[0]);   
    }, [])
    
    useEffect(() => {
        if (movie) {
            let url = `https://www.omdbapi.com/?t=${movie.title}&y=${movie.release_year}&apikey=${config.omdb}`;
            axios.get(url).then(res => {
                console.log(res.data);
                setMovieData(res.data)
            });
        }
    }, [movie]);



    return (
        <div className="m-5 p-5">
        <div className="card">
            <img className="card-img-top" src={movieData.Poster} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{movieData.Title}</h5>
                <p>Runtime: {movieData.Runtime}</p>
                <p>Director: {movieData.Director}</p>
                <p>Cast: {movieData.Actors}</p>
                <p className="card-text">{movieData.Plot}</p>
            </div>
        </div>
        </div>

    )


}

export default Movie;