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
{translate ? <>Ever since I was a child, I had a lifelong dream of moving to the United States. At the age of 19, I made that dream a reality by relocating to Orlando, Florida.<br></br>
For 8 years, I worked in the restaurant industry, gaining valuable experience in teamwork and collaboration. During this time, I was fortunate to receive a student grant of 80%. I initially pursued a degree in computer science, but circumstances beyond my control prevented me from completing the program.<br></br>
Working in the restaurant industry provided me with invaluable opportunities to interact with clients, where their experience revolved around relaxation and enjoyment.</> : 
<>Desde a infância, sempre tive o sonho de morar nos Estados Unidos. Aos 19 anos, realizei esse sonho ao me mudar para Orlando, na Flórida.<br></br>
Por 8 anos, trabalhei na indústria de restaurantes, adquirindo uma rica experiência em trabalho em equipe e colaboração. Durante esse período, tive a sorte de receber uma bolsa de estudos de 80%. Inicialmente, optei por cursar Ciência da Computação, mas circunstâncias alheias à minha vontade impediram a conclusão do curso.<br></br>
Trabalhar no setor de restaurantes me proporcionou valiosas oportunidades de interação com clientes, em um ambiente focado no lazer e na diversão.</>}
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
{translate ? <>After spending 22 years living in the US, I made the decision to return to Brazil to be closer to my family and explore new professional opportunities.<br></br>
During this time, I successfully managed the construction of two homes using my own savings while I searched for the right career path to pursue.<br></br>
In 2022, I discovered <a href="https://www.betrybe.com/" target="_blank" rel="noopener noreferrer">Trybe</a>, a programming school that reignited my passion for technology.<br></br>
Trybe offers an extensive curriculum with over 1500 synchronous hours covering software development, front-end and back-end technologies, computer science, software engineering, agile methodologies, and essential behavioral skills.<br></br>
I am excited to be on this new journey, as I firmly believe that a career in technology has the power to positively impact various fields and enhance the lives of others.</> :
<>Após 22 anos morando nos Estados Unidos, decidi retornar ao Brasil para estar mais próximo da minha família e buscar novas oportunidades profissionais.<br></br>
Durante esse período, liderei com sucesso a construção de duas residências utilizando minhas próprias economias, enquanto procurava o caminho profissional adequado.<br></br>
Em 2022, encontrei a escola de programação <a href="https://www.betrybe.com/" target="_blank" rel="noopener noreferrer">Trybe</a>, que reacendeu meu interesse pela tecnologia.<br></br>
A Trybe oferece um currículo abrangente com mais de 1500 horas de aulas síncronas, abordando desenvolvimento de software, tecnologias front-end e back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais essenciais.<br></br>
Estou entusiasmado por embarcar nessa nova jornada, pois acredito firmemente que uma carreira na área de tecnologia tem o poder de impactar positivamente diversas profissões.</>}
</p>
        );

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
        </div>
        <div className='message-body'>
          { renderMessage() }
        </div>
      </article>
    </div>
  );
}

export default MyPath;
