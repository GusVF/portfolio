import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';

export default function TrybersAndDragonsCard() {
  const { translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/project-trybers-and-dragons.", "_blank");
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
          <p className="is-size-4">"Trybers and Dragons"</p>
          <img className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpYvb6qq5X-XODbRoLt8JebQc54-8KB1n8yB9dWjpBuwRhe9e0BTGx9PEYXQOSrDE9i4&usqp=CAU" alt="TrybersAndDragons" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/project-trybers-and-dragons."
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}


