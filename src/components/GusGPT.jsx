import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';

export default function GusGPT() {
  const {translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/GusGPT","_blank");
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
          <p className="is-size-4">"GusGPT"</p>
          <img className="image"
          src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/461976i84C8EB6B0EC4692F/image-size/original?v=v2&px=-1" alt="todo list" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/GusGPT"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}
