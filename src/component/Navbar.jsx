import React from 'react';
import { Link } from "react-router-dom";
import '../stylesheet/navbar.css';

// navimg
import logo from '../img/navimg/nav_logo.png';
import fav from '../img/navimg/favorite.png';
import chat from '../img/navimg/chat.png';
import location from '../img/navimg/location.png';
import person from '../img/navimg/person.png';

const Navbar = ({usertoggle ,userformtoggle }) => {
  




  return (
    <nav className="navbar navbar-expand-lg nav_bg">
      <div className="container-fluid d-flex align-items-center">

        {/* Logo */}
        <a className="navbar-brand me-auto" href="#">
          <img src={logo} alt="Logo" className="nav-logo" />
        </a>

        {/* Navbar Toggle Button (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-center justify-content-center navlist_gap flex-wrap">

            <li className="nav-item"> <Link to="/" className=" text-black  text-decoration-none"> Home </Link> </li>
            <li className="nav-item"> <Link to="/aboutus" className=" text-black  text-decoration-none"> About Us </Link> </li>
            <li className="nav-item"> <Link to="/" className=" text-black  text-decoration-none"> Jobs </Link> </li>
            <li className="nav-item"> <Link to="/" className=" text-black  text-decoration-none"> Categories </Link> </li>
            <li className="nav-item"> <Link to="/" className=" text-black  text-decoration-none"> Blogs </Link> </li>
            <li className="nav-item"> <Link to="/" className=" text-black  text-decoration-none"> Contact Us </Link> </li>
            <li className="nav-item"   onClick={userformtoggle} > <Link to="/"    className="  btn nav_loginbtn text-white text-decoration-none"> Login </Link> </li>
            <li className="nav-item"> <Link to="/addjobpost"   className="btn nav_loginbtn text-white text-decoration-none"> Add Job Post </Link></li>
            
            {/* Icons */}
            <li className="nav-item"> <Link to="/Favorite" className="  text-decoration-none"> <img src={fav} alt="Favorite" className="icon-img" /> </Link> </li>
            <li className="nav-item"> <Link to="/notifications" className="  text-decoration-none"> <img src={chat} alt="Chat" className="icon-img" /> </Link> </li>
            <li className="nav-item"> <Link to="/" className="  text-decoration-none"> <img src={location} alt="Location" className="icon-img" /> </Link> </li>
            <li className="nav-item"> <Link to="/" className="  text-decoration-none"    > <img src={person} onClick={usertoggle} alt="Profile" className="icon-img profile-btn" /> </Link> </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
