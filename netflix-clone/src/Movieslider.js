import axios from "./axios"
import React, { useEffect, useState } from 'react'
import './Movieslider.css'

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";


export default function MovieSlider({ title, requestUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(requestUrl);
            console.log('Response', response)
            setMovies(response.data.results);
        };
        getMovies();
    }, [requestUrl]);

    return(
        <div className="movie-row-container">
            <h2 className="movie-title">{title}</h2>

            <div className="movie-container">
                {movies.map(movie => (
                    <div key={movie.id}>
                        <img className="movie-image" src={`${imageBaseUrl}${movie.backdrop_path}`} alt={movie.title}/>
                    </div>
                ))}
            </div>
        </div>
    );
}