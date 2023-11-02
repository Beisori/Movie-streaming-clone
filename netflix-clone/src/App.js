import React from 'react'
import './App.css';
import Navbar from './Navbar';
import home from './pages/home'
import series from './pages/series'
import movies from './pages/movies'
import { BrowserRouter } from 'react-router-dom';
import MovieSlider from './Movieslider';

function App() {
  return (
    <div className="App">
      {/*<Route path="home" component={home} />*/}
      <Navbar />
      <MovieSlider/>
    </div>
  );
}

export default App;
