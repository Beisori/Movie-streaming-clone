import axios from "./axios";
import React, { useEffect, useState } from 'react';
import './MovieGenres.css';

const API_KEY = "eaa4d9ee470345a99f952f889c06479c";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

export default function MovieGenres({requestUrl}){
    const [moviesByGenres, setMoviesByGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    //https://api.themoviedb.org/3/genre/movie/list?api_key=eaa4d9ee470345a99f952f889c06479c&language=en
    //^From here you can get the genre IDs for new requests.js paths
    
    useEffect(() => {
        async function getMoviesByGenre() {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}`);
            console.log('Response', response)
            setMoviesByGenres(response.data.results);
        };
        getMoviesByGenre();
    }, [selectedGenre]);

    const genreChanged = (Event) => {
        setSelectedGenre(Event.target.value);
    }

    return(
        <div className="genre-dropdown-container">
            <select id="genreDropdown" value={selectedGenre} onChange={genreChanged}>
                <option value="">Genres</option>
                <option value="28">Action</option>
                <option value="35">Comedy</option>
                <option value="99">Documentaries</option>
                <option value="27">Horror</option>
            </select>

            <div className="genre-movie-container">
                {moviesByGenres.map(movie => (
                    <div key={movie.id}>
                        <img className="movie-image-genres" src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title}/>
                    </div>
                ))}
            </div>
        </div>
    );
}