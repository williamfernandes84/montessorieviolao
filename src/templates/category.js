import React from "react"
import { graphql } from "gatsby"

import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"

export const query = graphql`
  query Category($id: Int!) {
    articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          title
          category {
            name
          }
          image {
            publicURL
          }
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category = ({ data }) => {
  const articles = data.articles.edges

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <ArticlesComponent articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export default Category
