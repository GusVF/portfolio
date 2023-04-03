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
      <img className="glowing-border" src={my_photo} alt="Gustavo Ferreira" />
      <div className="is-flex
      is-flex-direction-column
      is-align-items-center
      is-size-2">
      <h1 >{translate ? 'Front-end Developer' : 'Desenvolvedor Front-end'}</h1>
      <h2>{translate ? 'Hello!' : 'Ola!'}</h2>
      <p>{translate ? 'My name is' : 'Meu nome  é'}</p>
      <p className="fade">{name}</p>
      </div>
      <div className="mt-5">
      <h2 className="about-header is-size-4">{ translate ? 'About me...' : 'Sobre mim...'}</h2>
      <p className="is-size-5">{ translate ? <>I live in Caraguatatuba, São Paulo, Brasil, and I am 46 years old. <br></br>I have been working with HTML, CSS, JavaScript, React, Redux, Context API, Bulma, and currently learning Back-end.<br></br>I am constantly seeking to improve my skills and stay up-to-date with the latest in web development.<br></br> I beleive in resilience and hard work are key ingredients to create success in anything you want to do.<br></br>Thank you for considering me as a potential member of your team.'</> 

      : <> Eu moro em Caraguatatuba, São Paulo, Brasil, e tenho 46 anos de idade. <br></br>
      Tenho trabalhado com HTML , CSS, JavaScript, React, Redux, Context API, Bulma, e atualmente aprendendo Back-end.<br></br> Estou constantemente procurando melhorar minhas habilidades e me manter atualizado com as novidades de web development.<br></br>
      Acredito que resiliencia e trabalhado duro sao os ingredientes para criar qualquer coisa que queira. <br></br>
      Obrigado por me considerar como um potencial membro do seu time.</>}
      </p>
    </div>
      </div>
  )
};

export default Home;
