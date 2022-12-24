// import logo from './logo.svg';
// import React, { Component } from 'react';
// import './App.css';
import { Route, Routes } from "react-router-dom"
import '../src/assets/css/style.css';
// import Test from './Test';
// PAGE
import Home from './Home';
import Footer from './Footer';
import Movie from './pages/Movie';
import Navbar from "./Navbar";
import Topup from "./pages/Topup";
import Modal from "./Modal";
import { useState } from "react";
// import index from "./index"

function App() {
    const [test, setTest]=useState(false)
    return (
        <div className="App">
        <Navbar showtopup={() => setTest((current) => !current)} />
        <Modal show={test}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie" element={<Movie />}/>
          <Route path="/topup" element={<Topup />}/>
        </Routes>
        <Footer />
      </div>

    )
  }

export default App;
