import React from 'react'
import "../Components/Navbar.css"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='nav1'>
    <a className="navbar-brand" href="/">
        <b>&lt;AmanxCoder/&gt;</b> 
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/videos/">Courses</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/tutorials/">Tutorial</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/blog/">Blog</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/notes/">Notes</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact/">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/my-gear/">My Gear</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/work/">Work With Us</a>
            </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-primary my-2 my-sm-0 mr-2" type="button">Login</button>
            <button className="btn btn-primary my-2 my-sm-0" type="button">Signup</button>
        </div>
    </div>
</nav>
  )
}