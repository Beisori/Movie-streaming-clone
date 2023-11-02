import React from 'react'
import './App.css';
import Nav from './Nav';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hello world</h1>
      {/*<Row title="Trending" />
      <Row title="Top rated" />*/}

    </div>
  );
}

export default App;
