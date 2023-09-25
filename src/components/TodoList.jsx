import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';

export default function TodoList() {
  const {translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/todo-list","_blank");
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
          <p className="is-size-4">"Todo List"</p>
          <img className="image"
          src="https://img.freepik.com/free-psd/3d-rendering-graphic-design-element_23-2149412223.jpg?size=626&ext=jpg&ga=GA1.2.325944128.1695647392&semt=ais" alt="todo list" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/todo-list"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}
