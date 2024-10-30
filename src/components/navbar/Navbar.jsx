import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  
  const [sticky , setSticky] = useState(false)

  useEffect (()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 660){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  },[]);
  
  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
        <div className="logo"><img src="./src/assets/main-logo.png" alt="NA" /><p>Legacy</p></div>
        <div className="right">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Campus</a></li>
                <li><a href="#">Testimonials</a></li>
            </ul>
            <button>Contact Us</button>
         
        </div>
    </nav>
  )
}

export default Navbar