import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {

    {/*const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);*/}
    
  return (
    <div classname="nav">
    {/*<div classname={`nav ${show && "nav_black"}`}>*/}
        <img
        className="nav_logo"
        src={require("./img/logo.png")}
        alt="Netflix logo"/>

        <img
        className="nav_avatar"
        src={require("./img/Netflix-avatar.png")}
        alt="Netflix logo"/>
    </div>
  );
}

export default Nav;