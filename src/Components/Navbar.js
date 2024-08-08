import React from 'react';
import "../Components/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='nav1'>
      <Link className="navbar-brand" to="/">
        <b>&lt;AmanxCoder/&gt;</b>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/videos">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tutorials">Tutorial</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notes">Notes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-gear">My Gear</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/work">Work With Us</Link>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-primary my-2 my-sm-0 mr-2" type="button">Login</button>
          <button className="btn btn-primary my-2 my-sm-0" type="button">Signup</button>
        </div>
      </div>
    </nav>
  );
}
