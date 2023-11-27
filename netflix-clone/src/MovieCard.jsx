import React from 'react'; 

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({ movie }) => { 
    return ( 
        <div className="movie"> 
            <div> 
                <p>{movie.Title}</p> 
            </div> 
            <div> 
                <img src= {`${imageBaseUrl}${movie.poster_path}`}/> 
            </div> 
            <div> 
                <span>{movie.Type}</span> 
                <h3>{movie.Title}</h3> 
            </div> 
        </div> 
    ) 
} 
export default MovieCard;