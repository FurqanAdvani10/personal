import React, { useEffect, useState } from 'react'
import './nabar.css'
import logo from '../Assets/imgpsh_fullsize_anim.png'
import { FaSearch } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';





function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) { // Adjust the scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className='container'>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#services">Services</a></li>
        <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-icons">
        <FaSearch className="icon" /> |
        <FaEnvelope className="icon" />
        <span className="contact-number">+123 456 7890</span>
      </div>
    </div>
  </nav>

  )
}

export default Header