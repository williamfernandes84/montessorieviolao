import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"

export const query = graphql`
  query PaginasQuery($id: Int!) {
    strapiPaginas(strapiId: { eq: $id }) {
      strapiId
      titulo
      headline
      
    }
  }
`

const Pagina = ({ data }) => {
  const pagina = data.strapiPaginas
  return (
    <Layout>
      <div>
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={pagina.titulo} />
            <h3>{pagina.headline}</h3>
            <p>
              {pagina.conteudo}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Pagina
