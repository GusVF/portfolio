import React from 'react';
import { Link } from 'react-scroll';


function Header() {
  return (
    <div className=" Header
    has-text-light
    pb-5 pt-5"
    >

      <div className=" is-flex
      is-justify-content-space-around">
        
      <Link className="under-line has-text-light has-text-weight-semibold
      is-size-4" to="home" smooth={true} offset={-200} duration={1000}>Home</Link>

      <Link className="under-line has-text-light has-text-weight-semibold
      is-size-4" to="about" smooth={true} offset={-150} duration={1000}>About</Link>

      <Link className="under-line has-text-light has-text-weight-semibold
      is-size-4" to="projects" smooth={true} offset={200} duration={1000}>Projects</Link>

      <Link className="under-line has-text-light has-text-weight-semibold
      is-size-4" to="contact" smooth={true} offset={-100} duration={1000}>Contact</Link>

      </div>
    </div>
  )
}

export default Header;
