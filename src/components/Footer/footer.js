import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        Copyright &copy; {new Date().getFullYear()} Andre Buenafe. All rights reserved.
    </footer>
  )
}

export default Footer;