import React from 'react'
import aman from "../Images/aman.jpg"; 
export default function Footer() {
  return (
    <footer>
       
                <div>
                    <img src={aman} alt="" className="footer_image"/>
                </div>
                <div>
                    Copyright © 2024amanXCoder
                </div>
            
                <div>
                    <div className="social-media-icons">
                        <a href="https://facebook.com" target="_blank" className="social-icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" className="social-icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" target="_blank" className="social-icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="social-icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
        
</footer>
  )
}
