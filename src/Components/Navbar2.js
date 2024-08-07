import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/Navbar.css";

export default function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar_bottom'>
      <ul id='navbar_box'>
        <li>
          <Link to="/html">HTML</Link>
        </li>
        <li>
          <Link to="/css">CSS</Link>
        </li>
        <li>
          <Link to="/javascript">Javascript</Link>
        </li>
        <li>
          <Link to="/php">PHP</Link>
        </li>
        <li>
          <Link to="/python">Python</Link>
        </li>
        <li>
          <Link to="/java">Java</Link>
        </li>
      </ul>
    </nav>
  );
}
