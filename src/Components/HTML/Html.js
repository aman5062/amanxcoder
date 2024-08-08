import React from 'react';
import '../../App.css';
import Sidebarhtml from '../Sidebarhtml';
import { Routes, Route, Outlet } from "react-router-dom";
import HtmlRoutes from '../../Components/Routes/htmlRoutes';

export default function Html() {
  return (
    <div id='container_div'>
      <section id='left'>
        <Sidebarhtml />
      </section>
      <section id='right'>
        {/* <Routes>
          <Route path='/*' element={<HtmlRoutes />} />
        </Routes> */}
        <Outlet />
      </section>
    </div>
  );
}
