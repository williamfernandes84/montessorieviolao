import React from "react"
import Card from "./card"

import { Link, StaticQuery, graphql } from "gatsby"
const Articles = ({ articles }) => {

  return (
    <div>
    <section>
      <ul className="uk-navbar-nav">

        <StaticQuery
          query={graphql`
            query {
              allStrapiCategory {
                edges {
                  node {
                    strapiId
                    name
                  }
                }
              }
            }
          `}
          render={data =>
            data.allStrapiCategory.edges.map((category, i) => {
              return (
                <li key={category.node.strapiId}>
                  <Link to={`/category/${category.node.strapiId}`}>
                    {category.node.name}
                  </Link>
                </li>

              )
            })
          }
        />

      </ul>
    </section>

    <section className="post-feed">
              {articles.map((article, i) => {
              return (
                <Card article={article} key={`article__${article.node.id}`} />
              )
            })}
    </section>
  </div>
  )
}

export default Articles
