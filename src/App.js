import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Routes as Router ,Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
            <Route exact path="/" element={<Home />}/>         
            <Route exact path="/create" element={<Create />}/>  
            <Route exact path="/blogs/:id" element={<BlogDetails />}/>   
            <Route exact path="*" element={<NotFound />}/>                                                              
        </Routes>
      </div>      
    </div>     
    </BrowserRouter>
  );
}

/*function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}*/

export default App;