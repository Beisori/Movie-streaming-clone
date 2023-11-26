import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import New from './pages/New';
import Mylist from './pages/Mylist';
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
        <Link to="New">New and popular</Link>
        <Link to="Mylist">My list</Link>
        <Link to="Search">Search</Link>
        
      </div>
      <div className="navbar-avatar">
        <img
        className="navbar_avatar"
        src={require("./img/Netflix-avatar.png")}
        alt="Netflix logo"/>
      </div>
      </nav>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/New" element={<New />} />
        <Route path="/Mylist" element={<Mylist />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
