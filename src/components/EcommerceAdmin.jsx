import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';
import Ecommerce from "./images/ecommerce.jpg";

export default function EcommerceAdmin() {
  const { translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/e-commerce-admin", "_blank");
  }

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
          <p className="is-size-4">"e-commerce-Admin"</p>
          <img className="image"
          src={Ecommerce} alt="e-commerce" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/e-commerce-admin"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}


