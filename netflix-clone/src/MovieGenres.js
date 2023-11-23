import axios from "./axios"
import React, { useEffect, useState } from 'react'
import requests from "./requests";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

export default function MovieGenres({requestUrl}){
    const [movies, setMovies] = useState([]);

    const [selectedValue, setSelectedValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [displayedInfo, setDisplayedInfo] = useState('');

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
        setSelectedValue(Event.target.value);
    }

    if(selectedValue === 'Action'){
        setDisplayedInfo(requests.fetchAction);
    }
    setSelectedValue(selectedValue);
    setSelectedOption(selectedValue);

    //For css use flexbox-wrap
    return(
        <div className="dropdown-container">
            <select className="dropdown-options" value={selectedValue} onChange={inputChanged}>
                <option value=''>select a genre</option>
                <option value="Action">Action</option>
            </select>

            {setDisplayedInfo && movies.map(movie => (
                <div key={movie.id}>
                    <img className="movie-image" src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title}/>
                </div>
            ))}
        </div>
    );
}