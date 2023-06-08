import React, {Fragment} from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Login from "./layout/Login";
import Register from "./layout/Register";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Fragment>
      <Navbar />
      <Routes>
          <Route path = "/" element = {<Landing />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/login" element = {<Login />} />
      </Routes>
    </Fragment>
    </Router>
  );
}
export default App;