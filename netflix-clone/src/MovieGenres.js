import axios from "./axios"
import React, { useEffect, useState } from 'react'
import requests from "./requests";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

export default function MovieGenres({requestUrl}){
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState('');

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

    function renderGenre(){
        if(genre === 'Action'){
            //Render action movies in a flex box wrap
        }
        //Inside this use conditional rendering, which has request inside it
        //Choose which to render based on user input <- this information comes from inputChanged event
    }

    const inputChanged = (Event) => {
        setGenre({...genre,[Event.target.name]: Event.target.value})
    }

    return(
        <div className="dropdown-container">
            <select className="dropdown-options" value={genre} onChange={inputChanged}>
                <option value=''>select a genre</option>
                <option value="Action">Action</option>
            </select>

            <div className="movie-container">
                <h2>Movies</h2>
                {renderGenre && movies.map(movie => (
                    <div key={movie.id}>
                        <img className="movie-image" src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title}/>
                    </div>
                ))}
            </div>
        </div>
    );
}