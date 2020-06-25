import React from "react"

const Footer = () => {

  return (
    <div className="site-footer">
      <div className="uk-padding-small uk-text-right">
        <ul className="uk-list-inline">
          <li><a href="https://instagram.com/montessorieviolao" class="uk-icon-button" uk-icon="instagram"></a></li>
          <li><a href="https://facebook.com/montessorieviolao" class="uk-icon-button" uk-icon="facebook"></a></li>
          <li><a href="https://youtube.com/montessorieviolao" class="uk-icon-button" uk-icon="youtube"></a></li>
        </ul>
      </div>


      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-gray-700">
          <p> Montessori & Violão. Não existe uma fórmula ou método mágico para ajudar na alfabetização, mas eu estou aqui para te ajudar nessa caminhada.</p>
        </p>
      </div>
    </div>
  )
}


export default Footer
