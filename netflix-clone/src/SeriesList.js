import React, { useEffect, useState } from 'react'
import axios from "./axios"
import './SeriesList.css';

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

export default function SeriesList({ title, requestUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(requestUrl);
            console.log('Response', response)
            setMovies(response.data.results);
        };
        getMovies();
    }, [requestUrl]);

    return (
        <div className='series-container'>
            <h2 className='series-title'>{title}</h2>

            {movies.map(movie => (
                <div key={movie.id}>
                    <img className="series-images" src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title}/>
                </div>
            ))}
        </div> 
    )
}