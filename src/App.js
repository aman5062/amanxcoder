import './App.css';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Home from './Components/Home';
import Html from './Components/HTML/Html';
import Css from './Components/CSS/Css';
import Java from './Components/Java/Java';
import Javascript from './Components/Javascript/Javascript';
import Php from './Components/PHP/Php';
import Python from './Components/Python/Python';
import Courses from './Components/Courses';
import HtmlRoutes from './Components/Routes/htmlRoutes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div id='navbar_container'>
          <Navbar />
          <div id='nav2'>
            <Navbar2 />
          </div>
        
        </div>
        <div id='body'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/videos' element={<Courses />} />
            <Route path='/html/*' element={<Html />}>
              <Route path='*' element={<HtmlRoutes />} />
            </Route>
            <Route path='/css' element={<Css />} />
            <Route path='/javascript' element={<Javascript />} />
            <Route path='/php' element={<Php />} />
            <Route path='/python' element={<Python />} />
            <Route path='/java' element={<Java />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
