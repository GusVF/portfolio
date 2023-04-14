import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';

export default function StoreManager() {
  const {translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/project-store-manager", "_blank");
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
          <p className="is-size-4">"Store-Manager"</p>
          <img className="image"
          src="https://as1.ftcdn.net/v2/jpg/05/70/39/92/1000_F_570399249_utHCsBk0gf5plCKfxgnjTQm3GlSyy2LF.jpg" alt="store-manager" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/project-store-manager"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}
