import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext';

export default function TrybeWalletCard() {
  const { translate } = useContext(TranslateContext);

  const handleClick = () => {
    window.open("https://github.com/GusVF/luiz-ferreira-project-trybe-wallet", "_blank");
  };

  return (
    <div className="under-line"
    style={{width: "300px"}} onClick={handleClick}>
        <div className="card-content
            is-flex
            is-flex-direction-column
            is-align-items-center">
          <p className="is-size-4">
            {translate? 'Project' : 'Projeto'}
          </p>
          <p className="is-size-4">"Trybe Wallet"</p>
          <img className="image"
          src="https://cdn.shopify.com/s/files/1/0575/7177/products/edc-wallet-crazy-horse-brown_2000x.jpg?v=1552328919" alt="Wallet" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
            {translate ? 'View Repository' : 'Veja o Repositorio'}:{" "}
            <a href="https://github.com/GusVF/luiz-ferreira-project-trybe-wallet"
            target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          </p> 
        </footer>
      </div>
  )
}
