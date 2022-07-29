import React from "react";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "../Pages/Home";
import Grid from "../Pages/Grid";

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/grid" element={<Grid/>} />
        </Routes>
    </Router>
  );
}

export default AppRoutes;