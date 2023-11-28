import React, { useState, useEffect } from 'react';  
import MovieCard from '../MovieCard';
import axios from 'axios';
import './Search.css';

const API_KEY = "eaa4d9ee470345a99f952f889c06479c";

const Search = () => { 
	const [movies, setMovies] = useState([]); 
	const [searchTerm, setSearchTerm] = useState([]); 

	const searchMovies = async (title) => { 
		const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&include_adult=false&language=en-US&page=1`);
		setMovies((...movies) => [...movies, ...response.data.results]);
	} 
	useEffect(() => { 
		searchMovies(searchTerm);
    }, [searchTerm, searchMovies]);

	return ( 
		<div className="app"> 

			<div className="search"> 
				<input 
					placeholder="Search for Movies"
					value={searchTerm} 
					onChange={(Event) => { setSearchTerm(Event.target.value) }} 
					onKeyDown={(Event) => {
						if (Event.key === "Enter") {searchMovies(searchTerm)}
						}
					}
				/> 
				<img 
					src= {require("../img/SearchIcon.png")}
					alt="search icon"
					onClick={() => searchMovies(searchTerm)} 
				/> 
			</div> 

			{ 
				movies?.length > 0 
					? (<div className="container"> 
						{movies.map((movie) => ( 
							<MovieCard key={movie.id} movie={movie} /> 
						))} 
					</div>) : ( 
						<div className="empty"> 
							<h2>Search bar empty. Please write something to search.</h2> 
						</div> 
					) 
			} 
		</div> 
	); 
} 
export default Search;
