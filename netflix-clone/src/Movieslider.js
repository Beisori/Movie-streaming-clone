import axios from "./axios"
import React, { useEffect, useState } from 'react'
import './movieslider.css';

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
        const getMovieData = async () => {
            const response = await axios.get(requestURL)
            setMovies[response.data.results]
        }
        getMovieData();
    }, [requestURL]);

    return(
        <>
            <div class="movie-container">
                {movies.map(movie =>(
                    <div key={movie.id}>
                        <img className="slider-image" src={`${imageBaseUrl}${movie.poster_path}`}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MovieSlider;