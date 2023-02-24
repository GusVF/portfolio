import React from 'react'

export default function DockerTodoCard() {

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
          Project
        </p>
        <p className="is-size-4">"Docker todo"</p>
        <img className="image"
          src="https://blog.geekhunter.com.br/wp-content/uploads/2019/06/docker-na-pratica-como-construir-uma-aplicacao-2.png" alt="Docker" />
      </div>
      <footer>
        <p className="card-footer-item">
          <span>
            View repository:{" "}
            <a href="https://github.com/GusVF/luiz-ferreira-project-docker-todo-list"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
        </p> 
      </footer>
    </div>
  )
}
