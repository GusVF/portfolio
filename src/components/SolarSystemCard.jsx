import React from 'react'

export default function SolarSystemCard() {

  const handleClick = () => {
    window.open("https://github.com/GusVF/luiz-ferreira-project-docker-todo-list", "_blank");
  };

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
          <p className="is-size-4">"Solar System"</p>
          <img className="image"
          src="https://img.freepik.com/free-vector/solar-system-background_1284-12725.jpg" alt="Solar system" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
            View repository:{" "}
            <a href="https://github.com/GusVF/luiz-ferreira-project-solar-system"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}
