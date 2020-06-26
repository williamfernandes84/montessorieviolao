import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query ConfirmacaoQuery($id: Int!) {
    strapiConfirmacao(strapiId: { eq: $id }) {
      strapiId
      titulo
      conteudo
      imagem {
        publicURL
      }
    }
  }
`

const Pagina = ({ data }) => {
  const pagina = data.strapiConfirmacao

  return (
    <Layout>

      <div className="uk-section">
        <div className="uk-container uk-container">


          <div className="uk-flex uk-flex-center">
              <div className="uk-card uk-card-default uk-card-body uk-flex-center">

                <div className="uk-flex-center">
                <h2>{pagina.conteudo}</h2>
                          <br /><br />
                <img src={pagina.imagem.publicURL} width='20%' alt="Imagem Confirmação"/>

                </div>

              </div>
          </div>




            <br /><br />
          </div>
      </div>





    </Layout>
  )
}

export default Pagina
