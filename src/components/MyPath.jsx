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
      case 2023/2019:
        return (
          <p className="is-size-5">
            { translate ? <> Moved back to Brazil in  the middle of 2019 after 24 years living in Florida, USA.<br></br> Managed the construction of two small homes until the middle of 
          2022.<br></br>
           Now I'm currently studying Full-stack Web development at
            <a href="https://www.betrybe.com/" 
      target="_blank" rel="noopener noreferrer"> Trybe</a>, school of web development. </> 
           : <> Me mudei de volta ao Brasil no meio de 2019 depois de 24 anos morando no estado da Florida, USA.<br></br>
           Gerenciei a construção de duas casas
           ate o meio de 2022.<br></br> 
           Estou atualmente estudando desenvolvimento Full-stack na escolam, 
            <a href="https://www.betrybe.com/" 
      target="_blank" rel="noopener noreferrer"> Trybe</a>, escola de desenvolvimento web </>}
           </p>
        );
      case 2019/2017:
        return (
          <p className="is-size-5"> 
          { translate ? <> I am passionate about the sport of cycling, so in this time after leaving the Fire Department I started a mobile bike shop called Next Cycling USA.<br></br> 
          The mobile service did bicycle repairs around central Florida and went bike races to help people with their bike repair needs.<br></br>
          It was a great experience to manage the entire concept of a mobile bike shop, purchasing from vendors, selling bycicle goods and making repairs, giving the consumer the convenience of having a repair without having to leave home.<br></br>
           </> 
          : <> Sou um amante do esporte de ciclismo, então neste momento depois de ter deixado o corpo de Bombeiros, fui a procura de um novo propósito e criei uma bicicletaria móvel chamada Next Cycling USA.<br></br> 
          O servico móvel fez reparos na area central da Florida e foi em competições para ajudar competidores com reparos nas corridas.<br></br>
          Foi uma grande experiência gerenciar todo o conceito de uma bicicletaria móvel, efetuando compras com vendedores, vendendo peças e fazendo reparos, dando ao consumidor a conveniência de não precisar sair de casa para fazer o conserto de sua bicicleta.</>}
          </p>
        );
      case 2017/2005:
        return (
          <p className="is-size-5">
            { translate ? <> english </> : <> Portuguese </>}
            </p>
        );
      case 2005/1995:
        return (
          <p className="is-size-5"> 
          { translate ? <> english </> : <> Portuguese </>}
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
          onClick={ () => handleBtnClick(2023/2019)}
          >
            2023/2019
          </button>
          <button
          className='button is-italic is-rounded px-4 has-text-weight-bold glowing-border'
          onClick={ () => handleBtnClick(2019/2017)}
          >
            2019/2017
          </button>
          <button
          className='button is-italic is-rounded px-4 has-text-weight-bold glowing-border'
          onClick={ () => handleBtnClick(2017/2005) }
          >
            2017/2005
          </button>
          <button
          className='button is-italic is-rounded px-4 has-text-weight-bold glowing-border'
          onClick={() => handleBtnClick(2005/1995)}
          >
            2005/1995
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
