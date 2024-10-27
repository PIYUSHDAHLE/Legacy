import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="logo"><img src="./src/assets/main-logo.png" alt="NA" /><p>Legacy</p></div>
        <div className="right">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>Sign Up</button>
            <button>Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar