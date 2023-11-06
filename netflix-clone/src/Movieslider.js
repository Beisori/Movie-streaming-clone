import axios from "./axios"
import React, { useEffect, useState } from 'react'
import './Movieslider.css'
import requests from "./requests";

const requestURL = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function MovieSlider(){
    const [movies, setMovies] = useState([]);
    
    useEffect(() => 
    {
        const promises = Object.keys(requests).map(requestKey => 
            axios.get(`${requestURL}${requests[requestKey]}`)
        );

        Promise.all(promises)
        .then(responses => {
            const movieData = responses.map(response => response.data.results);
            setMovies(movieData);
        })
    }, []);

    return(
        <>
        <div>
            
        </div>
        </>
    );
}

export default MovieSlider;