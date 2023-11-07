import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieSlider from './Movieslider';
import Home from './pages/Home';
import Series from './pages/Series';
import  Movies from './pages/Movies';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    //implement routing with the router component
    //change Movieslider component to home.js file
    <div className="App">
      {/*<Route path="home" component={home} />*/}
      <Navbar />
      <div>

      </div>
    
    <MovieSlider title="Trending"/>
    
</div>
  );
}

export default App;
