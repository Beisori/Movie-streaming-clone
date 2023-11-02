import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {

    {/*const [show, handleShow] = useState(false);  tämä on nav barin mustaksi muuttumisen toimintoja. DLC toni kattoo tän myöhemmin ku näkyy elokuvat yms

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
    <div className="nav">
    {/*<div classname={`nav ${show && "nav_black"}`}>  tämä käyttöön kun on enemmän asioita tehty, ei toiminut nyt vielä alkuun. tekee siis sen et ku scrollaa alas nii nav bar tuleekin mustaksi*/}
        <img
        className="nav_logo"
        src={require("./img/logo.png")}
        alt="Netflix logo"/>
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and popular</span>
        <span>My list</span>

        <img
        className="nav_avatar"
        src={require("./img/Netflix-avatar.png")}
        alt="Netflix logo"/>
     </div>

  );
}

export default Nav;