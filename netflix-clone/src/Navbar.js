import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
      <img className="navbar-logo" src={require("./img/logo.png")} alt="Netflix Logo" />
      </div>
      <div className="navbar-links">
        <a href="home">Home</a>
        <a href="series">Series</a>
        <a href="movies">Movies</a>
        <a href="new">New and popular</a>
        <a href="mylist">My list</a>
        </div>
        <div className="navbar-search">
        <input type="text" placeholder="Search for movies and series" />
      </div>
        <div className="navbar-avatar">
        <img
        className="navbar_avatar"
        src={require("./img/Netflix-avatar.png")}
        alt="Netflix logo"/>
      </div>
    </nav>
  );
}

export default Navbar;
