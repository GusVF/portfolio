import { useState, useEffect, useContext } from "react";
import { TranslateContext } from '../context/TranslateContext';
import my_photo from "./images/my_photo.jpg";

function Home() {
   const [ name, setName ] = useState('');
   const {translate} = useContext(TranslateContext)
   const nameArray = 'Luiz Gustavo Ferreira'.split('');

   useEffect(() => {
     // eslint-disable-next-line no-unused-vars
     let i = 0;
     const interval = setInterval(() => {
       setName(prevName => {
         if (prevName.length < nameArray.length) {
           const nextLetter = nameArray[prevName.length];
           return prevName + nextLetter;
         } else {
           clearInterval(interval);
           return '';
         }
       });
       i++;
     }, 200);

     return () => clearInterval(interval);
   }, [nameArray]);


  return ( 
    <div id="home"
    data-scroll-section
    className="has-text-white
    is-flex
    is-flex-direction-row
    is-flex-wrap-wrap
    is-justify-content-space-around"
    >
      <img className="glowing-border ml-6" src={my_photo} alt="Gustavo Ferreira" />
      <div className="is-flex
      is-flex-direction-column
      is-align-items-center
      is-size-2">
      <h1 >{translate ? 'Full Stack Developer.' : 'Desenvolvedor Full Stack.'}</h1>
      <h2>{translate ? 'Hello!' : 'Ola!'}</h2>
      <p>{translate ? 'My name is' : 'Meu nome  é'}</p>
      <p className="fade">{name}</p>
      </div>
      <div className="mt-6">
      <h2 className="about-header is-size-4">{translate ? 'Welcome to my Portfolio...' : 'Bem-vindo ao meu Portfolio...'}</h2>
      <p className="is-size-5">{translate ? <>Currently residing in Caraguatatuba, São Paulo, Brazil.<br></br>
      I am a full-stack web developer seeking to join a dynamic company.<br></br>
      This Portfolio provides comprehensive information about my skills and professional journey.<br></br>
      Feel free to reach out to me using the contact links at the end of this page.</>
      :
      <>Residindo atualmente em Caraguatatuba, São Paulo, Brasil.<br></br>
      Sou um desenvolvedor full-stack em busca de oportunidades para fazer parte de uma empresa dinâmica.<br></br>
      Este Portfolio apresenta informações abrangentes sobre minhas habilidades e trajetória profissional.<br></br>
      Fique à vontade para entrar em contato comigo por meio dos links de contato no final desta página.</>}
      </p>
    </div>
      </div>
  )
};

export default Home;
