import React, { useContext } from 'react';
import { TranslateContext } from '../context/TranslateContext';

export default function Technologies() {
  const { translate } = useContext(TranslateContext);
  return (
    <div id='tech' className="has-text-centered">
      <div className='has-text-white'>
        <p id='tech-text'>{translate ? 'Technologies' : 'Tecnologias'}</p>
        <p>
          {translate
            ? 'Here are the technologies I have had contact with so far,'
            : 'Aqui estão as tecnologias com as quais tive contato até agora,'}
        </p>
        <p className="mb-6">
          {translate
            ? 'and they all have been used in the projects listed bellow.'
            : 'e todas elas foram usadas nos projetos listado abaixo.'}
        </p>
      </div>
      <div className="badge-div
      is-flex
      is-flex-wrap-wrap
      is-justify-content-center"
      >
      <img
        className="badges mb-4 has-background-white flex-shrink-0"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="Java-Script-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        alt="Python-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
        alt="Java-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="Docker-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        alt="mySql-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        alt="GitHub-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        alt="HTML-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        alt="CSS-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg"
        alt="Bulma-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        alt="Redux-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        alt="Jest-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"
        alt="Mocha-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg"
        alt="Pytest-badge"
      />
      <img
        className="badges mb-4 has-background-white"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"
        alt="Trello-badge"
      />
      </div>
    </div>
  );
}
