import { BrowserRouter as Router, Redirect, Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./components/home";
import Comics from "./components/comics";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/comics" element={<Comics />} />
      {/* 
      <Route path="/movies" component={movies} />
      <Route path="/movies/:topic/:id" component={movie} />
      <Route path="/comics/:id" component={comic} /> */}
    </Routes>
    </Router>
    
  );
}

export default App;
