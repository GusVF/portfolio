import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { TranslateContext } from '../context/TranslateContext';

function Header() {
  const { translate, handleClick } = useContext(TranslateContext);


  return (
    <div className=" Header
    has-text-light
    pb-5 pt-5"
    >

      <div className=" is-flex
      is-justify-content-space-around">
        
      <Link className="under-line has-text-light has-text-weight-semibold
      is-size-4" to="home" smooth={true} offset={-200} duration={1200}>Home</Link>

      <Link className="under-line has-text-light has-text-weight-semibold
      is-size-4" to="tech" smooth={true} offset={-250} duration={1200}
      >
        { translate ? "Technologies" : "Tecnologias" }</Link>

      <Link className="under-line has-text-light has-text-weight-semibold
      is-size-4" to="path" smooth={true} offset={-150} duration={1200}
      >
        { translate ? 'Path' : 'Trajetoria' }</Link>

      <Link className="under-line has-text-light has-text-weight-semibold
      is-size-4" to="projects" smooth={true} offset={260} duration={1200}
      >
        {translate ? 'Projects' : 'Projetos'}</Link>

      <Link className="under-line has-text-light has-text-weight-semibold
      is-size-4" to="contact" smooth={true} offset={-100} duration={1200}
      >
        { translate ? 'Contact' : 'Contato'}</Link>
      <div className='buttons'>
        <p className="is-size-5 has-text-weight-semibold mr-4"
        >
          {translate ? 'Clique aqui para:' : 'Click here for:'}</p>
        <button
        className="button has-text-weight-bold"
        onClick={ handleClick }
        >{translate ? 'Português' : 'English'}
        </button>
      </div>
      </div>
    </div>
  )
};

export default Header;
