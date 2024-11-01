import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll';
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
                <li> <Link to='home' smooth={true} offset={0} duration={500}>   Home  </Link></li>
                <li> <Link to='about' smooth={true} offset={-150} duration={500}> About   </Link> </li>
                <li> <Link to='camp' smooth={true} offset={50} duration={500}>  Campus  </Link> </li>
                <li> <Link to='testi' smooth={true} offset={-100} duration={500}>  Testimonials  </Link></li>
            </ul>
            <button className='btn'><Link to='contact' smooth={true} offset={-100} duration={500}> Contact Us </Link> </button>         
        </div>
    </nav>
  )
}

export default Navbar