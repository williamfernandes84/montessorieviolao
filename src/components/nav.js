import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Logo from "./logo"

const Nav = () => (
  <div>
    <div>
      <nav className="uk-navbar-container" >
      <Logo />
            <StaticQuery
              query={graphql`
                {
                  paginas: allStrapiPaginas{
                    edges {
                      node {
                        strapiId
                        titulo
                        exibir_menu
                      }
                    }
                  }

                }
              `}


              render={data =>

          data.paginas.edges.map((pagina, i) => {

            if (pagina.node.exibir_menu === true){
                  return (
                    <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                      <li key={i}>
                        <Link to={`/pagina/${pagina.node.strapiId}`}> {pagina.node.titulo}</Link>
                      </li>

                    </ul>
                    </div>
                  )
                } else {
                  return (<></>)
                }

              })

              }
            />
      </nav>
    </div>
  </div>
)

export default Nav
