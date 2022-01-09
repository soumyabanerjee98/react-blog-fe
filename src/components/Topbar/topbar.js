import React, { useState, createRef } from "react";
import { withRouter } from "react-router-dom";
import "../Topbar/topbar.css";
import ham from "../Topbar/hamburger.png";

function Topbar(props){
    let isLoggedIn = localStorage.getItem("signin");
    let refNav = createRef(null);
    let [navVisible, setNavVisible] = useState(false);

    let toggler = () => {
        if (navVisible) {
            refNav.current.style.display = "none";
            setNavVisible(() => { 
                return !navVisible });
        }
        else {
            refNav.current.style.display = "block";
            setNavVisible(() => { 
                return !navVisible });
        }

    }

    const navLinks = (comp) => {
        if (isLoggedIn === "true")
            props.history.push(comp);
        else
            props.history.push("/");

        if (window.innerWidth < 800) {
            toggler();
        }
    }

    const signOut = (path) => {
        localStorage.setItem("signin", "false");
        isLoggedIn = localStorage.getItem("signin");
        props.history.push(path);
    }

    return <>
    <div className="header">
        <div className="header1">
            The
        </div>
        <div className="header2">
            Siren
        </div>
        <span className="toggle" onClick={toggler} >
            <img className="ham" src={ham} alt="icon" />
        </span>
    </div>
    <div className="navbar">
        <ul>
            <div ref={refNav} className="navlink" id="navlink" >
                <li onClick={() => navLinks("/home")} >Home</li>
                <li onClick={() => navLinks("/category/bollywood")} >Bollywood</li>
                <li onClick={() => navLinks("/category/hollywood")} >Hollywood</li>
                <li onClick={() => navLinks("/category/technology")} >Technology</li>
                <li onClick={() => navLinks("/category/travel")} >Travel</li>
                <li onClick={() => navLinks("/category/food")} >Food</li>
                {
                    (isLoggedIn === "false") ?
                        <li onClick={() => navLinks("/")} >Sign In / Sign Up</li>
                        :
                        <li onClick={() => signOut("/")} >Sign Out</li>
                }
            </div>
        </ul>
    </div>
    <hr/>
    </>
}

export default withRouter(Topbar);