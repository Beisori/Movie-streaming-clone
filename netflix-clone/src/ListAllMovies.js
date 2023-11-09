import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
export default function ListAllMovies() {
  return <h1>Movies</h1>
  
}
const getMovies = () => {
  const responce = axios.get("https://api.themoviedb.org/3/movie/top_rated")}

useParams: [API_KEY = "eaa4d9ee470345a99f952f889c06479c"]
{/*export default Movies;*/}

useEffect ({getMovies})
