import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 660);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
      <div className="logo">
        <img src="./src/assets/main-logo.png" alt="NA" />
        <p>Legacy</p>
      </div>
      <div className={`right ${menuOpen ? 'open' : ''}`}>
        {/* Close Button for Mobile Menu */}
        {menuOpen && (
          <button className="close-btn" onClick={closeMenu}><i class="ri-close-circle-fill"></i></button>
        )}
        <ul>
          <li>
            <Link to="home" smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500} onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="camp" smooth={true} offset={50} duration={500} onClick={closeMenu}>Campus</Link>
          </li>
          <li>
            <Link to="testi" smooth={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</Link>
          </li>
        </ul>
        <button className="btn">
          <Link to="contact" smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact Us</Link>
        </button>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
