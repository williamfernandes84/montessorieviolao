import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Logo from "./logo"
const Nav = () => (
  <div>
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
      <Logo />
            <StaticQuery
              query={graphql`
                {
                  paginas: allStrapiPaginas {
                    edges {
                      node {
                        strapiId
                        titulo
                      }
                    }
                  }

                }
              `}


              render={data =>

          data.paginas.edges.map((pagina, i) => {
                  return (
                    <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                      <li>
                        <Link to={`/pagina/${pagina.node.strapiId}`}> {pagina.node.titulo}</Link>
                      </li>

                    </ul>
                    </div>
                  )
                })

              }
            />
      </nav>
    </div>
  </div>
)

export default Nav
