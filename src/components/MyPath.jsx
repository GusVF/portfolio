import React, { useContext, useState } from 'react';
import { TranslateContext } from '../context/TranslateContext';

function MyPath() {
  const [selectecBtn, setSelecedtBtn] = useState('');
  const { translate } = useContext(TranslateContext)

  const handleBtnClick = (buttonText) => {
    setSelecedtBtn(buttonText);
  };

  const renderMessage = () => {
    switch(selectecBtn) {
      case 1995/2005:
        return (
          <p className="is-size-5">
            { translate ? <> Since childhood I had a dream to move to the US and at 19 years old I made that dream come true moving to Orlando, Florida.<br></br>
             Worked for 8 years in restaurants and learned a lot about team effort. In this time I got a student grant of 80%, and decided to go for computer science, but I ended up not going because of reasons beyond my reach.<br></br>
             I was a great place to learn to work with clients where for them the theme was one of relaxing and enjoyment.</>  : <> Desde criança eu tinha um sonho de me mudar para os Estados Unidos e aos 19 anos realizei este sonho, indo morar em Orlando no estado da Florida.<br></br>
            Trabalhei em restaurantes por 8 anos e aprendi muito sobre colaboração. Nessa época recebi uma bolsa de estudos de 80%, e escolhi Ciências da computação, porém não consegui cursar por motivos fora do meu alcance. <br></br>
            Foi um aprendizado muito valioso aprender a trabalhar com clientes em um ambiente onde para o comsumidor o tema é lazer e descontração</>}
           </p>
        );
      case 2005/2017:
        return (
          <p className="is-size-5"> 
          { translate ? <>  In 2005 I tryed for a Fire Department job, and I spend 12 years in an amazing profession where I learned about team work, ponctuality and communication.<br></br>
          In the Fire Truck there is a computer that gives us information about the current call as well as other important work related information, and that's where I undertood that technology had a direct impact in all professions, and developers could better all other professions with their work.</>  : <> Em 2005 fiz concurso para o corpo de Bombeiros, e durante 12 anos trabalhei em uma profissão apaixonante, onde aprendi sobre o verdadeiro significado de trabalho em equipe, pontualidade e comunicação.<br></br>
          No Caminhão do Bombeiro tem um computador que além de informação de tudo que precisamos no trablalho, também nos da informação sobre a ocôrrencia que estamos respondendo em chamadas de emergência, e foi ali que entendi que a tecnologia tem impacto em todas as profissões, e os desenvolvedores podem molhorar todas elas com seu trabalho.  </>}
          </p>
        );
      case 2017/2023:
        return (
          <p className="is-size-5">
            { translate ? <>After 22 years living in the US, I decided to go back to Brazil to stay closer to family and consequently look for another profession.<br></br>
            In this time  I magnaged the construciton of two homes with my own economies while I looked for the right direction to go professionally.<br></br>
            In 2022 I found a programming school called <a href="https://www.betrybe.com/" 
            target="_blank" rel="noopener noreferrer"> Trybe</a> that reignited my interest in technology.<br></br>
            Trybe is a school with more then 1500 synchronous hours of sofware development, front-end, back-end, computer science, sofware engineering and agile methodologies as well as comportamental abilities.<br></br>
            A profession that can better the day of other professions...<br></br>
            I'm glad to be on this new path.</> : <> Depois de 22 anos morando nos Estados Unidos, decidi voltar ao Brasil para ficar mais perto da familia, e consequentemente a procura de uma nova profissão.<br></br>
            Nesse tempo gerencei a construção de duas residências com minhas proprias economias enquanto pesquisava a direcão certa a se seguir profissionalmente.<br></br>
            Em 2022 encontrei a escola <a href="https://www.betrybe.com/" 
            target="_blank" rel="noopener noreferrer"> Trybe</a> que me reacendeu o interesse por tecnologia.<br></br>
            O escola Trybe conta com mais de 1.500 horas de aulas e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br></br>
            Uma profissão que pode melhorar o dia de outras...<br></br>
            Estou feliz por estar neste caminho.</>}
            </p>
        );
      // case 2019/2023:
      //   return (
      //     <p className="is-size-5"> 
      //     { translate ? <> 2019 english </> : <> Portuguese </>}
      //     </p>
      //   );
      default: 
      return (
        <p className="has-text-centered">{ translate ? <> Click on a button for details on where 
        I've been, and what I've been up to. </> 
        : <> Click em um botão para detalhes de onde estive, e o que tenho feito. </> } </p>
      )
    }
  };


  return (
    <div id='path'
    className="is-flex 
    is-flex-direction-column
    is-align-items-center"
    data-scroll-section>
      <p className="has-text-white mb-4 is-size-4">
        { translate ? 'Click on a button to see timeline details' 
        : 'Clique em um botão para ver detalhes da linha de tempo' }
        </p>
      <article className='message is-dark'>
        <div className='message-header'>
          <button
          className='button is-italic is-rounded px-4 has-text-weight-bold glowing-border'
          onClick={ () => handleBtnClick(1995/2005)}
          >
            1995/2005
          </button>
          <button
          className='button is-italic is-rounded px-4 has-text-weight-bold glowing-border'
          onClick={ () => handleBtnClick(2005/2017)}
          >
            2005/2017
          </button>
          <button
          className='button is-italic is-rounded px-4 has-text-weight-bold glowing-border'
          onClick={ () => handleBtnClick(2017/2023) }
          >
            2017/2023
          </button>
          {/* <button
          className='button is-italic is-rounded px-4 has-text-weight-bold glowing-border'
          onClick={() => handleBtnClick(2019/2023)}
          >
            2019/2023
          </button> */}
        </div>
        <div className='message-body'>
          { renderMessage() }
        </div>
      </article>
    </div>
  );
}

export default MyPath;
