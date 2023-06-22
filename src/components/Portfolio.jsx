import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';
import PortfolioPic from './images/portfolio.jpeg'

export default function Portfilio() {
  const {translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/portfolio","_blank");
  };

  return (
    <div className="under-line"
    style={{width: "300px"}} onClick={handleClick}>
        <div className="card-content
            is-flex
            is-flex-direction-column
            is-align-items-center">
          <p className="is-size-4">
          {translate? 'This Portfolio' : 'Este Portfolio'}
</p>
          <p className="is-size-4">"Portfolio"</p>
          <img className="image"
          src={PortfolioPic} alt="Este Portfolio" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/portfolio"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}
