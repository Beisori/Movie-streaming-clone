import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    //implement routing with the router component
    //change Movieslider component to home.js file
    <div className="App">
      {/*<Route path="home" component={home} />*/}
      <Navbar />
    </div>
  );
}

export default App;