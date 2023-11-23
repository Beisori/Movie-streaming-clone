import axios from "./axios"
import React, { useEffect, useState } from 'react'
import requests from "./requests";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

export default function MovieGenres({requestUrl}){
    const [movies, setMovies] = useState([]);


    //https://api.themoviedb.org/3/genre/movie/list?api_key=eaa4d9ee470345a99f952f889c06479c&language=en
    //^From here you can get the genre IDs for new requests.js paths
    useEffect(() => {
        async function getAllMovies() {
            const response = await axios.get(requestUrl);
            console.log('Response', response)
            setMovies(response.data.results);
        };
        getAllMovies();
    }, [requestUrl]);



    return(
        <div className="dropdown-container">
            <select className="dropdown-options" value={''} onChange={''}>
                <option value=''>select a genre</option>
                <option value="Action">Action</option>
            </select>

        </div>
    );
}