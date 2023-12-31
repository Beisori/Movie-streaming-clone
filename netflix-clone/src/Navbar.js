import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import Search from './pages/Search';

function Navbar() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="navbar-logo">
          <img className="navbar-logo" src={require("./img/logo.png")} alt="Netflix Logo" />
        </div>

        <div className="navbar-links">
          <Link to="Home">Home</Link>
          <Link to="Series">Series</Link>
          <Link to="Movies">Movies</Link>
          <Link to="Search">Search</Link>

        </div>
        <div className="navbar-avatar">

        </div>
      </nav>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
