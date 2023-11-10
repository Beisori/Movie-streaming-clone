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
    }, [requestUrl]);

    //Create element to return that shows movies in a grid
    //Table or grid? Do research
    //poster picture from API
    //GridContainer + individual items?

    return(
        <>
            
        </>
    );
}