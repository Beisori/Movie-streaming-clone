import React from 'react'
import './App.css';
import Navbar from './Navbar';
import home from './pages/home'
import series from './pages/series'
import movies from './pages/movies'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <p>Hello world</p>

      {/*<Route path="home" component={home} />*/}
      <Navbar />
      {/*<Row title="Trending" />
      <Row title="Top rated" />*/}

    </div>
  );
}

export default App;
