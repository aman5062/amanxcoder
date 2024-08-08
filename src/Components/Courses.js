import React from 'react'
import "../Components/Courses.css"
import html from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import php from "../Images/php.png";
import sql from "../Images/sql.png";
export default function Courses() {
  return (
    <div>
      <section id="body_courses" >
        <div className="course_container">
            <div className="course_box">
                <img src={html} alt="" className="box_image"/>
                <div className="box_title">
                    HTML : 0 to hero
                </div>
                <div className="box_dis">
                    Unlock the power of the web with our comprehensive HTML course designed for absolute beginners. Master the fundamental building blocks of web development, from basic tags to advanced layout techniques. By the end of this course, you'll be able to create stunning, fully functional web pages from scratch.
                </div>
                 <div className="btn_box">
                    <a href="" className="btn_course">Watch Now</a>
                </div>
            </div>
            <div className="course_box">
                <img src={css} alt="" className="box_image"/>
                <div className="box_title">
                    CSS : Beginner to Advanced
                </div>
                <div className="box_dis">
                    Transform your web pages with our in-depth CSS course tailored for all skill levels. Start with the basics of styling and layout, then delve into advanced techniques like animations, responsive design, and CSS Grid. By the end of this course, you'll have the skills to create visually stunning and highly functional websites.
                </div>
                 <div className="btn_box">
                    <a href="" className="btn_course">Watch Now</a>
                </div>
            </div>
            <div className="course_box">
                <img src={js} alt="" className="box_image"/>
                <div className="box_title">
                    Javascript : Upto Advanced
                </div>
                <div className="box_dis">
                    Unlock the full potential of web development with our comprehensive JavaScript course. Begin with the essentials of programming and interactive web elements, then progress to advanced concepts like asynchronous programming, ES6 features, and frameworks. By the end of this course, you'll be equipped to build dynamic and powerful web applications.
                </div>
                 <div className="btn_box">
                    <a href="" className="btn_course">Watch Now</a>
                </div>
            </div>
            
        </div>
        <div className="course_container">
            <div className="course_box">
                <img src={php} alt="" className="box_image"/>
                <div className="box_title">
                    PHP : Advanced course
                </div>
                <div className="box_dis">
                    Elevate your server-side programming skills with our advanced PHP course. Dive deep into complex topics like object-oriented programming, MVC frameworks, and secure coding practices. By the end of this course, you'll be able to build robust, scalable, and secure web applications using PHP.
                </div>
                 <div className="btn_box">
                    <a href="" className="btn_course">Watch Now</a>
                </div>
            </div>
           
            <div className="course_box">
                <img src={sql} alt="" className="box_image"/>
                <div className="box_title">
                    SQL
                </div>
                <div className="box_dis">
                    Unlock the power of data with our in-depth SQL course designed for all levels. Learn to efficiently query, manipulate, and manage data using Structured Query Language. By the end of this course, you'll be able to harness the full potential of SQL to extract insights and drive decision-making from your databases.
                </div>
                 <div className="btn_box">
                    <a href="" className="btn_course">Watch Now</a>
                </div>
            </div>
            
        </div>
    </section>
    </div>
  )
}
