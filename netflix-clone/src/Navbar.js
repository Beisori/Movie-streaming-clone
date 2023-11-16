import React, {useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import Home from './pages/home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import New from './pages/New';
import Mylist from './pages/Mylist';




function Navbar() {
  const Nav = () => {
    const [scroll, setScroll] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setScroll(true);
        } else setScroll(false);
      });
    }, []);
  }
  return (
    <BrowserRouter>
      <nav className={`navbar ${scroll && "navbar_black"}`}>
        <div className="navbar-logo">
          <img className="navbar-logo" src={require("./img/logo.png")} alt="Netflix Logo" />
        </div>
      <div className="navbar-links">
        <Link to="Home">Home</Link>
        <Link to="Series">Series</Link>
        <Link to="Movies">Movies</Link>
        <Link to="New">New and popular</Link>
        <Link to="Mylist">My list</Link>
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
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/New" element={<New />} />
        <Route path="/Mylist" element={<Mylist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
