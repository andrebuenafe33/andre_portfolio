import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/ajb-logo2.png';
import { Link } from 'react-scroll';
import contactMeImg from '../../assets/contactMe.jpg';
import burgerMenu from '../../assets/burgerMenu.png';

const Navbar = () => {

  // Burger Menu Toogle Functionality
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} title="Home" className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} title="About" className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} title="Portfolio" className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='achievements' spy={true} smooth={true} offset={-80} duration={500} title="Achievements" className="desktopMenuListItem">Achievements</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactMeImg} alt="Contact Me" className="desktopMenuImg" />Contact Me
        </button>
        
        {/* Burger Menu */}
        <img src={burgerMenu} alt="Menu" className="mobileMenu" onClick={() => setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} title="Home" className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} title="About" className="listItem" onClick={() => setShowMenu(!showMenu)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} title="Portfolio" className="listItem" onClick={() => setShowMenu(!showMenu)}>Portfolio</Link>
            <Link activeClass='active' to='achievements' spy={true} smooth={true} offset={-80} duration={500} title="Achievements" className="listItem" onClick={() => setShowMenu(!showMenu)}>Achievements</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} title="Contact" className="listItem" onClick={() => setShowMenu(!showMenu)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar; 