import React, { useContext } from "react";
import { TranslateContext } from "../context/TranslateContext";

function Contact() {
  const { translate } = useContext(TranslateContext)
  return (
    <div
      id="contact"
      data-scroll-section
      className="has-text-white
    is-flex
    is-flex-direction-column
    is-align-items-center"
    >
      <h2 className="is-size-3"
      >
        {translate ? 'My Contact is a click away in the icons bellow.' 
        : 'Meu contato esta a um click nos icones abaixo' } </h2>
      <p className="is-size-4"
      >
        {translate ? 'I"m looking forward to hear from you.' 
        : 'Espero seu contato com anseio' }</p>
      <div className="mb-4 mt-4">
      <a href="https://www.linkedin.com/in/luiz-gustavo-ferreira-gusferreira/" 
      target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt="linkedIn"/>
     </a>
      <a href="mailto:gus.116506@gmail.com" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail"/>
  </a>
  <a href="https://github.com/GusVF" 
      target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank" alt="GitHub"/>
     </a>
      </div>
      <div className="is-flex">
      <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank" alt="WhatsApp"/>
      <p className="is-size-5 ml-3"> (12) 9 9635-6852</p>
      </div>
    </div>
  );
}

export default Contact;
