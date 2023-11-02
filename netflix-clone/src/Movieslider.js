import axios from "./axios"
import React, { useEffect, useState } from 'react'
import './Movieslider.css'

const API_KEY = "eaa4d9ee470345a99f952f889c06479c";
const requestURL = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTVShows:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`,

    fetchComedy:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAction:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorror:`discover/movie?api_key=${API_KEY}&with_genres=27`,
}

function MovieSlider(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovieData(requestKey){
            const response = await axios.get(`${requestURL}${requests[requestKey]}`)
            setMovies(response.data.results);
        };
        getMovieData('fetchTrending');
    }, [requestURL])

    return(
        <>
            <div class="movie-container">
                {movies.map(movie =>(
                    <div key={movie.id}>
                        <img className="slider-image" src={`${imageBaseUrl}${movie.backdrop_path}`}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MovieSlider;