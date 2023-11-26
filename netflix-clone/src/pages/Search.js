import React, { useState } from 'react'; 
import { useEffect } from 'react'; 
import MovieCard from '../MovieCard';
import axios from 'axios';
import './Search.css';

const API_URL = 'https://omdbapi.com?apikey=fe2f6c44'; 

const Search = () => { 
	const [movies, setMovies] = useState([]); 
	const [searchTerm, setSearchTerm] = useState([]); 
	const searchMovies = async (title) => { 
		const response = await fetch(`${API_URL}&s=${title}`); 
		const data = await response.json(); 
		setMovies(data.Search); 
	} 
	useEffect(() => { 
		searchMovies('John wick'); 
	}, []); 
	return ( 
		<div className="app"> 

			<div className="search"> 
				<input 
					placeholder="Search for Movies"
					value={searchTerm} 
					onChange={(e) => { setSearchTerm(e.target.value) }} 
					onKeyDown={(e) => {
						if (e.key === "Enter") {searchMovies(searchTerm)}
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
							<MovieCard movie={movie} /> 
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
