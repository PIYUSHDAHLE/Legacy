import React from 'react'
import Logo from '../../assets/main-logo.png'
import '../footer/Footer.css'
const Footer = () => {
  return (
    <div className='footer-box'>
        <section className='s1'>
          <div className="left">
          <h3>Contact Us</h3>
            <p>123 Main St, Anytown, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>

          <div className="mid">
           <img src={Logo} alt="NA" />
           <h1>Legacy</h1>
          </div>

          <div className="right">
            <ul>
              <li><a href="#"><i className="ri-facebook-fill"></i></a></li>
              <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
              <li><a href="#"><i className="ri-instagram-fill"></i></a></li>
              <li><a href="#"><i className="ri-google-fill"></i></a></li>
              <li><a href="#"><i className="ri-youtube-fill"></i></a></li>
            </ul>
          </div>
        </section>
        <section className='s2'>
                 <p>This website developed by Piyush Dahle © {new Date().getFullYear()} Legacy All rights reserved.</p>
        </section>
    </div>
  )
}

export default Footer