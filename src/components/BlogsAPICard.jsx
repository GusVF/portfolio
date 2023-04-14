import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';

export default function BlogsAPI() {
  const {translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/project-blogs-api", "_blank");
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
          <p className="is-size-4">"Blogs-API"</p>
          <img className="image"
          src="https://blog.hubspot.com/hs-fs/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg" alt="blogs-api" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
          {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/project-blogs-api"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}
