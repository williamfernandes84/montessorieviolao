import React from "react"
import { Link } from "gatsby"


const Card = ({ article }) => {

  return (
    <div id="modal-close-default" uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
            <button className="uk-modal-close-default" type="button" uk-close></button>
            <h2 className="uk-modal-title">Default</h2>
            <p>Quer receber minhas melhores dicas de atividades pedagógicas para trabalhar em casa?
            <p>Me informe seu e-mail ou baixe o meu Aplicativo gratuitamente!</p>
            <form>
              <div className="uk-margin">
                  <div className="uk-inline">
                      <span className="uk-form-icon" uk-icon="icon: email"></span>
                      <input className="uk-input" type="text">
                  </div>
              </div>

            </form>
        </div>
    </div>


  )
}

export default Card
