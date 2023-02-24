import React from 'react'

export default function TrybeWalletCard() {

  const handleClick = () => {
    window.open("https://github.com/GusVF/luiz-ferreira-project-docker-todo-list", "_blank");
  };

  return (
    <div className="under-line"
    style={{width: "300px"}} onClick={handleClick}>
        <div className="card-content
            is-flex
            is-flex-direction-column
            is-align-items-center">
          <p className="is-size-4">
            Project
          </p>
          <p className="is-size-4">"Trybe Wallet"</p>
          <img className="image"
          src="https://cdn.shopify.com/s/files/1/0575/7177/products/edc-wallet-crazy-horse-brown_2000x.jpg?v=1552328919" alt="Wallet" />
        </div>
        <footer>
          <p className="card-footer-item">
          <span>
            View repository:{" "}
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
