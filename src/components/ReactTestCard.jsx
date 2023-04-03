import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';

export default function ReactTestCard() {
  const { translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/luiz-ferreira-project-docker-todo-list", "_blank");
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
          <p className="is-size-4">"RTL"</p>
          <img className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwSOjqZd5b95gwUW2p50KRQNN8GZuW5AEMV7cQMuyTSeXAJgZMi9NYX3XMQyJP9cLvTU&usqp=CAU" alt="Testing Library" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/luiz-ferreira-project-react-testing-library"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}
