import { BrowserRouter as Router, Redirect, Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./components/home";
import Comics from "./components/comics";
//import Comic from "./components/comic";
import Movies from "./components/movies";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/comics" element={<Comics />} />
      {/* <Route path="/comics/:id" element={<Comic />} /> */}
      <Route path="/movies" element={<Movies />} />
      {/* 
      <Route path="/movies/:topic/:id" component={movie} />
       */}
    </Routes>
    </Router>
    
  );
}

export default App;
