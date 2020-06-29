import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"


const IndexPage = () => (
  <Layout>

    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                headline
                category {
                  name
                }
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
           <div className="uk-container">
              <ArticlesComponent articles={data.allStrapiArticle.edges} />
             </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
