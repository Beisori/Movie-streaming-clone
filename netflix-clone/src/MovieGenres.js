import axios from "./axios"
import React, { useEffect, useState } from 'react'
import requests from "./requests";

export default function MovieGenres({requestUrl}){
    const [movies, setMovies] = useState([]);

    const [genreValue, setGenreValue] = useState('');
    const [optionValue, setOptionValue] = useState('');

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

    const inputChanged = (Event) => {
        setGenreValue(Event.target.value);
    }

    if(setGenreValue === 'Action'){
        <MovieSlider title="Action" requestUrl={requests.fetchAction}/>
    }
    setOptionValue(setGenreValue);

    //Inside return create similar mapping for movies as in movieslider which displays the info for movies
    //For css use flexbox-wrap
    return(
        <div className="dropdown-container">
            <select className="dropdown-options" value={setGenre} onChange={inputChanged}>
                <option value=''>select a genre</option>
                <option value="Action">Action</option>
            </select>
        </div>
    );
}