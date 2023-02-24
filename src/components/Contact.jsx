import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      data-scroll-section
      className="has-text-white
    is-flex
    is-flex-direction-column
    is-align-items-center"
    >
      <h2 className="is-size-3"> My Contact is a click away in the icons bellow. </h2>
      <p className="is-size-4">I'm looking forward to hear from you.</p>
      <div>
      <a href="https://www.linkedin.com/in/luiz-gustavo-ferreira-gusferreira/" 
      target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt="linkedIn"/>
     </a>
      <a href="mailto:gus.116506@gmail.com" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail"/>
  </a>
      </div>
    </div>
  );
}

export default Contact;
