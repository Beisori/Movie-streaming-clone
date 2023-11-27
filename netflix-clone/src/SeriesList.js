import React, { useEffect, useState } from 'react'
import axios, { imageBaseUrl } from "./axios"

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";


export default function SeriesList({ title, requestUrl, topRow }) {
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

            <div className='series-container'>
                {movies.map(movie => (<img key={movie.id} className={`series-image-list ${topRow && "series-image-top-row"}`} src={`${imageBaseUrl}${topRow ? movie.poster_path : movie.backdrop_path || movie.poster_path}`} alt={movie.name} />))}
            </div>
        </div> 
    )
}