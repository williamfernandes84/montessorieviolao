import React from "react"
import FacebookIcon from '@material-ui/icons/FacebookIcon';
import InstagramIcon from '@material-ui/icons/InstagramIcon';
import YoutubeIcon from '@material-ui/icons/YoutubeIcon';

const Footer = () => {

  return (
    <div className="site-footer">
      <div className="uk-padding-small uk-text-right">
        <ul className="uk-list-inline">
          <li><a href="https://instagram.com/montessorieviolao"> <InstagramIcon color="primary"/> </a></li>
          <li><a href="https://facebook.com/montessorieviolao"> <FacebookIcon color="primary"/>< /a></li>
          <li><a href="https://youtube.com/montessorieviolao"> <YoutubeIcon color="primary" /> </a></li>
        </ul>
      </div>


      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-gray-700">
          <p> Montessori & Violão. Não existe uma fórmula ou método mágico para ajudar na alfabetização, mas eu estou aqui para te ajudar nessa caminhada. Visite nossa <a href= "/pagina/2">Política de Cookies</a></p>
        </p>
      </div>
    </div>
  )
}


export default Footer
