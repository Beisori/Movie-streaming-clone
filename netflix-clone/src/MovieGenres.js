import axios from "./axios"
import React, { useEffect, useState } from 'react'

export default function MovieGenres(){
    const [genre, setGenre] = useState([]);

    //create GET request for movie listing -> IDs

    useEffect(() => {
        async function getAllMovies() { //Add URL for request
            const response = await axios.get(requestUrl);
            console.log('Response', response)
            setGenre(response.data.results);
        };
        getAllMovies();
    }, [requestUrl]); //requestUrl not needed probably, empty [] for rendering on need basis

    //Create element to return that shows movies in a flexbox with wrap
    //poster picture from API

    //Buttons that list movie genres based on ID
    //Individual item takes what it needs genre state
    //Map through genre and list that genre on individual links

    return(
        <div className="genre-dropdown-container">
            
        </div>
    );
}