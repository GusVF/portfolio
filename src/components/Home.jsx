import { useState, useEffect } from "react";
import my_photo from "./images/my_photo.jpg";

function Home() {
   const [ name, setName ] = useState('');
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
    is-justify-content-space-around"
    >
      <img className="photo glowing-border" src={my_photo} alt="Gustavo Ferreira" />
      <div className="is-flex
      is-flex-direction-column
      is-align-items-center
      is-size-2">
      <h1 >Front-end web Developer</h1>
      <h2>Hello!</h2>
      <p>My name is</p>
      <p className="fade">{name}</p>
      </div>
      </div>
  )
};

export default Home;
