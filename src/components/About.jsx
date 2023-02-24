import React from 'react';


function About() {
  return (
    <div className="about-container
    has-text-dark
    is-flex
    is-justify-content-center">
    <div  id="about"
    data-scroll-section
    className="is-flex
    is-flex-direction-column
      is-align-items-center">
      <h2 className="about-header is-size-3">Information about me...</h2>
      <p className="is-size-5">I live in Caraguatatuba, São Paulo, Brasil.<br></br>
      I have been working with HTML, CSS, JavaScript, React<br></br>
      functional and class components,
      Redux, Bulma, and currently learning Back-end.<br></br>
      I am constantly seeking to improve my skills and stay up-to-date with the latest in web development.<br></br>
      Thank you for considering me as a potential member of your team.</p>
    </div>
    </div>
  );
}

export default About;

