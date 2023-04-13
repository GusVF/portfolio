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
      <h1 >{translate ? 'Full Stack Developer.' : 'Desenvolvedor Full Stack.'}</h1>
      <h2>{translate ? 'Hello!' : 'Ola!'}</h2>
      <p>{translate ? 'My name is' : 'Meu nome  é'}</p>
      <p className="fade">{name}</p>
      </div>
      <div className="mt-5">
      <h2 className="about-header is-size-4">{ translate ? 'About me...' : 'Sobre mim...'}</h2>
      <p className="is-size-5">{ translate ? <>I live in Caraguatatuba, São Paulo, Brasil and <br></br>I am a full-stack web developer constantly seeking to improve my skills<br></br> and stay up-to-date with the world of technology.<br></br> My beleive is that resilience and dedication are key ingredients to create success in anything you want.<br></br>This Portfolio will give you good information about what I have been up to<br></br> but please feel free to contact me with the links at the end of the page.'</> 
      :
       <> Eu moro em Caraguatatuba, São Paulo, Brasil.<br></br> Sou desenvolvedor full-stack e contantemente procurando melhorar minhas habilidades <br></br>para ficar em dia com o mundo da tecnologia.<br></br>
      Acredito que resiliencia e dedicacão, são os ingredientes para conquistar qualquer coisa. <br></br>Este Portfolio tem bastante informação sobre mim mas por favor sinta-se livre para me<br></br> contatar pelos links no final da pagina.</>}
      </p>
    </div>
      </div>
  )
};

export default Home;
