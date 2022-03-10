import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Arr from "./seeds/seeds";
import config from "./config/config";
import emptyOMDB from "./seeds/emptyOmdb";

function Movie() {
    //Pull parameters
    const { id, topic } = useParams();

    //Set states
    const [ data, setData ] = useState(Arr[1]);
    const [ movie, setMovie ] = useState({});
    const [ movieData, setMovieData ] = useState(emptyOMDB);

    //Grab the necessary entry from the seed data to get info to call the OMDB API.
    useEffect(() => {
        const filtered = data.filter(obj => {;
            return (obj.movie_order === parseInt(id) && obj.topic === topic);
        })
        console.log(filtered);
        setMovie(filtered[0]);
        const mov = filtered[0];
        let url = `https://www.omdbapi.com/?t=${mov.title}&y=${mov.release_year}&apikey=${config.omdb}`;
        axios.get(url).then(res => {
            //console.log(url);
            //console.log(res.data);
            setMovieData(res.data)
        });
    }, []);

    //A map to display ratings information. IMDBvotes is it's own key-value in the OMDB API, so 
    //added a dependency to pull that data in IF the source of the ratings is the Internet Movie Database (IMDB).
    function ratingsMap(arr) {
        let map = arr.map(obj => {
            if (obj.Source === "Internet Movie Database") {
                return <p key={obj.Source}>{obj.Source}: {obj.Value} ({movieData.imdbVotes} votes)</p>
            } else {
                return <p key={obj.Source}>{obj.Source}: {obj.Value}</p>
            }
        })
        return map; 
    }

    //Display information. 
    return (
        <div className="d-flex justify-content-center row m-5 p-5">
            <div className="col-6">
                <div className="card">
                    <img className="card-img-top" src={movieData.Poster} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{movieData.Title}</h5>
                        <p><strong>Vital Statistics</strong></p>
                        <p>Runtime: {movieData.Runtime}</p>
                        <p>Release Year: {movieData.Year}</p>
                        <p>Genre: {movieData.Genre}</p>
                        <p className="card-text">Plot Summary: {movieData.Plot}</p>
                        <hr />
                        <p><strong>Cast and Crew</strong></p>
                        <p>Director(s): {movieData.Director}</p>
                        <p>Writer(s): {movieData.Writer}</p>
                        <p>Cast: {movieData.Actors}</p>
                        <hr />
                        <p><strong>Reception</strong></p>
                        <p>Box Office: {movieData.BoxOffice}</p>
                        <p>Awards: {movieData.Awards}</p>
                        {movieData ? ratingsMap(movieData.Ratings) : ""}
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Movie;