import React from 'react'
import "../App.css";
function ret(){
    var cl = document.getElementById("full");
    if(cl.className == "show_in_laptop"){
        cl.className = "show_in_mobile";
    }
    else if(cl.className == "show_in_mobile"){
        cl.className = "show_in_laptop";
    }
    
}

export default function Menunav() {
  return (
   

    <div id='menunav' className='bg-light mt-5'>
      <div id='menu_btn' onClick={ret}>☰</div>
    </div>
  )
}
