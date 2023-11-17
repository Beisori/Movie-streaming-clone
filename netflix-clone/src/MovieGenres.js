import axios from "./axios"
import React, { useEffect, useState } from 'react'

export default function MovieGenres(){
    const [genre, setGenre] = useState([]);

    //https://api.themoviedb.org/3/genre/movie/list?api_key=eaa4d9ee470345a99f952f889c06479c&language=en
    //^From here you can get the genre IDs for new requests.js paths
    useEffect(() => {
        async function getAllMovies() { //Add URL for request
            const response = await axios.get(requestUrl);
            console.log('Response', response) //This doesn't work, use same type of search from discovery as in requests.js file
            setGenre(response.data.results);
        };
        getAllMovies();
    }, []);

    //Create element to return that shows movies in a flexbox with wrap
    //poster picture from API

    //Buttons that list movie genres based on ID
    //Individual item takes what it needs genre state
    //Map through genre based on ID and list that genre on individual links (router?)

    return(
        <div className="genre-dropdown-container">
            
        </div>
    );
}