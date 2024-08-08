import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/Navbar.css";
import Menunav from './Menunav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Navbar2() {
  return (
    <>
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
    <Routes>
    <Route path='/html/*' element={<Menunav />} />
    <Route path='/css/*' element={<Menunav />} />
    <Route path='/javascript/*' element={<Menunav />} />
    <Route path='/php/*' element={<Menunav />} />
    <Route path='/python/*' element={<Menunav />} />
    <Route path='/java/*' element={<Menunav />} />
  </Routes>
    
    </>
  );
}
