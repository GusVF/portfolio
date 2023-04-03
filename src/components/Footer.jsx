import React, { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext'

export default function Footer() {
  const { translate } = useContext(TranslateContext)
  return (
    <div
    className="footer-1
    has-text-white
    is-flex
    is-justify-content-space-evenly
    py-6"
    >
     <p className="is-size-5">{ translate ? 'Made with love by Gus Ferreira using:'
     : 'Feito com carinho por Gus Ferreira usando:'}</p>

     <img className="badge"
     src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
     alt="React badge"/>
    
    <img className="badge"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg"
    alt="Bulma badge"/>
   
   <img className="badge"
   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS badge"/>
          
      </div>
  )
}
