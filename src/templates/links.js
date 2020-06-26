import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query MyQuery {
    links: allStrapiLink {
      edges {
        node {
          title
          url
          strapiId
        }
      }
    }
  }
`

const Links = ({ data }) => {
  const links = data.links.edges

  return (
    <Layout>

      <div className="uk-section">
        <div className="uk-container uk-container">
          <div className="uk-flex uk-flex-center">
              <div className="uk-card uk-card-default uk-card-body uk-flex-center">

                {links.map((link, i) => {
                return (

                  <dl class="uk-description-list uk-description-list-divider">
                      <dt><a href={link.node.url}>{link.node.title}</a></dt>
                  </dl>

                )
                })}


              </div>
          </div>




            <br /><br />
          </div>
      </div>





    </Layout>
  )
}

export default Links
