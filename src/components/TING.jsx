import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';
import TrybeLogo from './images/Trybe.jpeg';

export default function TrybeIsNotGoogle() {
  const {translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/project-TING", "_blank");
  };

  return (
    <div className="under-line"
    style={{width: "300px"}} onClick={handleClick}>
        <div className="card-content
            is-flex
            is-flex-direction-column
            is-align-items-center">
          <p className="is-size-4">
          {translate? 'Project' : 'Projeto'}
          </p>
          <p className="is-size-4">"Trybe is not Google"</p>
          <img className="image"
          src={TrybeLogo} alt="trybe-is-not-google" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/project-TING"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}
