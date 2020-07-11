import React from "react"
import PropTypes from "prop-types"
import Seo from "./seo"
import { StaticQuery, graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius: '100%',
    maxWidth: '200px',
    maxHeight: '200px',
    textAlign: 'center',
    padding: '10px'
    },
}));

const LayoutLinks = ({ children }) => {
  const classes = useStyles();

  return (
    <>
    <Container maxWidth="sm">
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
            <Box display="flex" justifyContent="center">
              <img className={classes.img} alt="Montessori e Violão" src={config.node.image.publicURL} style={{alignSelf: 'center'}}/>
            </Box>
          )
        })

      }
    />
      <Seo />
      <main>{children}</main>
      </Container>
    </>
  )
}

LayoutLinks.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default LayoutLinks
