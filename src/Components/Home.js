import React from 'react'
import home_img from '../Images/home_1.jpg'
import "../Components/Home.css";

export default function Home() {
  return (
    <div>
    
     <section id="body_home">
        <section id="intro">
            <section id="intro_left">
               <div className="cont_intro_left">
                <div className="welcome">Welcome to </div>
                <div className="amanxcoder">amanXCoder</div>
                
               </div>
               <div className="content_home">
                Are you unsure about which course to choose? Don't worry—I've got you covered. Explore our courses and discover the perfect fit for you. Best of all, they're free! AmanxCoder is my way of teaching fundamental coding techniques efficiently, condensing what took me years to learn into easily digestible lessons.
               </div>
               <br/>
               <div className="btn_intro_grp">
                <a href="#" className="btn_intro l">Learn Coding</a>
                <a href="#" className="btn_intro w">Explore Blog</a>
               </div>
            </section>
            <section id="intro_right">
                <img src={home_img} alt="Laptop" className="img_home"/>
            </section>
        </section>

        
    </section>
    </div>
  )
}
