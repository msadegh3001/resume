import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Movies from './Movies';

const Navbar = ({ totalCount }) => {
  return (
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Vidly</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies">Movies <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customers">customers</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Rentals">Rentals</NavLink>
          </li>
          <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
