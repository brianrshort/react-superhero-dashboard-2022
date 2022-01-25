import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
//import crypto from "crypto-js";

import Arr from "./seeds/seeds";
import config from "./config/config";

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            topics: [],
            titles: [],
            searchField: ""
        }
    }
    
    componentDidMount() {
        this.setState({ movies: Arr[1]});
        let newData = [];
        for (var i = 0; i < Arr[1].length; i++) {
            let movie = Arr[1][i];
            //console.log(movie.topic);
            console.log(this.state.topics);
            //console.log(this.state.topics.indexOf(movie.topic.toString()));
            this.setState(prev => {
                console.log(prev.topics);
                let arr = [...prev.topics, movie.topic];
                let unique = arr.filter(onlyUnique);
                return {topics: unique};
            })
            //console.log(this.state.topics);
            //if (movie) {
                let url = `https://www.omdbapi.com/?t=${movie.title}&y=${movie.release_year}&apikey=${config.omdb}`;
                axios.get(url).then(resp => {
                    //console.log(resp.data.Title);
                    const obj = {};
                    obj.title = resp.data.Title;
                    obj.topic = movie.topic;
                    obj.order = movie.movie_order;
                    //console.log(obj)
                    newData.push(obj);
                }).then(response => {
                    let sortData = newData.sort((a, b) => {
                        return a.order - b.order;
                    });
                    let alphaSort = sortData.sort((a, b) => {
                        return a.topic - b.topic;
                    })
                    //console.log(sortData);
                    this.setState({titles: alphaSort});
                    //this.setState({data: newData});
                    //console.log("State: " + JSON.stringify(this.state.data));
                })
              //} 
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
        

        let filmMap = (string) => {
            const objMap = this.state.titles.map(obj => {
                if (obj.topic === string) {
                    return <p key={obj.topic + obj.order}>{obj.title}</p>;
                }
            })
            return objMap;
        }

    let moviesMap = this.state.topics.map((string) => {
        return (
            <div key={string}>
                <h1>{string}</h1>
                {filmMap(string)}
            </div>
        )
        
        // this.state.titles.map(obj => {
        //     if (obj.topic === string) {
        //         return <p key={obj.topic + obj.order}>{obj.title}</p>;
        //     }
        // }) 
    })

    
    
    return (
    <div className="container">
        Movies
        <hr />
        <input type="search" placeholder="search comics" onChange={e => this.setState({searchField: e.target.value})} />
        {moviesMap}
    </div>
    )
}
}


export default Movies;