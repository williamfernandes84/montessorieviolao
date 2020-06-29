import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import HomeIcon from '@material-ui/icons/Home';

const Logo = () => (
  <div>
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
            <StaticQuery
              query={graphql`
                {
                  configuracao: allStrapiConfiguracao {
                    edges {
                      node {
                        strapiId
                        image {
                          publicURL
                        }
                      }
                    }
                  }

                }
              `}


              render={data =>

          data.configuracao.edges.map((config, i) => {
                  return (
                    <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                      <li>
                        <Link to={`#`}> <HomeIcon /></Link>
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

export default Logo
