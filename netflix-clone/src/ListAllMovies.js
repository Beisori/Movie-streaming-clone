import { Await, useParams } from "react-router-dom"
import axios from "axios"
import React, { useEffect, useState }from "react";

const Allmovies = () => {
  
  const [movies, setMovies] = useState([]);
 
  return <h1>Movies</h1>
  
  useEffect(() => {
      getMovies(id)
  },[])

const getMovies = async (id) => {
  const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list${id}?api_key=eaa4d9ee470345a99f952f889c06479c&language=en")}
  const data = response.data;
  setMovies(response.data.results)
  console.log(data);

  useParams: [API_KEY = "eaa4d9ee470345a99f952f889c06479c"]

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

}
export default Allmovies;