import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';

export default function TrybeSmithCard() {
  const { translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/project-trybesmith", "_blank");
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
          <p className="is-size-4">"TrybeSmith"</p>
          <img className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStG-gjI-Ep1EuHNyLVzSO9QJUUtpPs8ZmsBg&usqp=CAU" alt="TrybeSmith" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/project-trybesmith"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}


