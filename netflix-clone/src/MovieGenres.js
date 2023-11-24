import axios from "./axios"
import React, { useEffect, useState } from 'react'
import requests from './requests';

const API_KEY = "eaa4d9ee470345a99f952f889c06479c";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

export default function MovieGenres({requestUrl}){
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    //https://api.themoviedb.org/3/genre/movie/list?api_key=eaa4d9ee470345a99f952f889c06479c&language=en
    //^From here you can get the genre IDs for new requests.js paths
    
    useEffect(() => {
        async function getMoviesByGenre() {
            const response = await axios.get(requestUrl + `discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}`);
            console.log('Response', response) //request path doesn't work 404
            setMovies(response.data.results);
        };
        getMoviesByGenre();
    }, [selectedGenre]);

    const genreChanged = (Event) => {
        setSelectedGenre(Event.target.value);
    }

    return(
        <div className="genre-dropdown-container">
            <h2 className="genre-title">Movies by genres</h2>
            <select id="genreDropdown" value={selectedGenre} onChange={genreChanged}>
                <option value="">Genres</option>
                <option value="28">Action</option>
            </select>

            <div className="genre-movie-container">
                {movies.map(movie => (
                    <div key={movie.id}>
                        <img className="movie-image" src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title}/>
                    </div>
                ))}
            </div>
        </div>
    );
}