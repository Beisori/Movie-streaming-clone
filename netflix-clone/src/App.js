import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieSlider from './Movieslider';
import requests from './requests';


function App() {
  return (
    //implement routing with the router component
    //change Movieslider component to home.js file
    <div className="App">
      {/*<Route path="home" component={home} />*/}
      <Navbar />

      <MovieSlider title="Trending" requestUrl={requests.fetchTrending}/>
      <MovieSlider title="Top Rated" requestUrl={requests.fetchTopRated}/>
      <MovieSlider title="Popular" requestUrl={requests.fetchPopular}/>
      <MovieSlider title="TV Shows" requestUrl={requests.fetchTVShows}/>
      <MovieSlider title="Action" requestUrl={requests.fetchAction}/>
      <MovieSlider title="Comedies" requestUrl={requests.fetchComedy}/>
      <MovieSlider title="Horror" requestUrl={requests.fetchHorror}/>
      <MovieSlider title="Documentaries" requestUrl={requests.fetchDocumentaries}/>
    </div>

  );
}

export default App;
