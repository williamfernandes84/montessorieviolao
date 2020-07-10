import React from "react"
import { graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"

export const query = graphql`
  query ConfirmacaoQuery($id: Int!) {
    strapiConfirmacao(strapiId: { eq: $id }) {
      strapiId
      titulo
      conteudo
      urlWhatsapp
      headline
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
                <h2>{pagina.headline}</h2>
                <p>{pagina.conteudo}</p>
                          <br />

                <Grid item xs={false} sm={false} md={6} lg={6} xl={6} elevation={6} align="center" >
                <a href={pagina.urlWhatsapp}><img src={pagina.imagem.publicURL} alt="Imagem Confirmação"/></a>
                </Grid>

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
