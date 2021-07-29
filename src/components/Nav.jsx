import React from "react";
import Logo from "../weather2.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import About from "./About";
import { NavLink } from "react-router-dom";
function Nav({ onSearch }) {
  return (
    <div className="navContainer">
      <div className="leftSide">
        <NavLink to="/">
          <img src={Logo} className="logo" alt=""></img>
        </NavLink>
        <div className="title">Weather App</div>
      </div>
      <NavLink exact to="/about" className="navLinks">
        <div className="about">About</div>
      </NavLink>
      {/* <NavLink exact to="/" className="navLinks">Ciudades</NavLink> */}
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
