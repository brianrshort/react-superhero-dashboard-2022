import React from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
    return (
    <div className="container">
        <div className="row">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Fluid jumbotron</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6 border border-success">
                <Link to="/movies">Click for movies</Link>
            </div>
            <div className="col-6 border border-success">
                <Link to="/comics">Click for comics</Link>                
            </div>
        </div>
    </div>
    )
}


export default Home;