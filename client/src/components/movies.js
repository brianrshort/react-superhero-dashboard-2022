import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
//import crypto from "crypto-js";

import Arr from "./seeds/seeds";
import config from "./config/config";

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            titles: []
        }
    }
    
    componentDidMount() {
        this.setState({ movies: Arr[1]});
        let newData = [];
        for (var i = 0; i < Arr[1].length; i++) {
            let movie = Arr[1][i];
            if (movie) {
                let url = `https://www.omdbapi.com/?t=${movie.title}&y=${movie.release_year}&apikey=${config.omdb}`;
                axios.get(url).then(resp => {
                    //console.log(resp.data.Title);
                    const obj = {};
                    obj.title = resp.data.Title;
                    obj.order = movie.movie_order;
                    //console.log(obj)
                    newData.push(obj);
                }).then(response => {
                    let sortData = newData.sort((a, b) => {
                        return a.order - b.order;
                    });
                    //console.log(sortData);
                    this.setState({titles: sortData});
                    //this.setState({data: newData});
                    //console.log("State: " + JSON.stringify(this.state.data));
                })
              } 
        }

    }

    // let data = [];
    // axios.get("/api/movies/")
    //     .then(moviessArr => {
    //         console.log(moviesArr);
    //         for (var i = 0; i < moviesArr.length; i++) {
    //             axios.get(`URL HERE`)
    //                 .then(response => {
    //                     data.push(`${response[0].title}`);
    //                 })
    //         }
    // });
    // console.log(data);

    render() {
        
    let moviesMap = this.state.titles.map((obj) => {
        return <p key={obj.order}>{obj.title}</p>;
    })
    
    return (
    <div className="container">
        Movies
        {moviesMap}
    </div>
    )
}
}


export default Movies;