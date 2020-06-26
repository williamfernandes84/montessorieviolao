import React from "react"
import PropTypes from "prop-types"
import Seo from "./seo"
import Avatar from '@material-ui/core/Avatar';
import { StaticQuery, graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Footer from "./footer"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    "padding": "15px",
    width: theme.spacing(10),
    height: theme.spacing(10),
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
              <Avatar alt="Montessori e Violão" style={{alignSelf: 'center'}}  className={classes.large} src={config.node.image.publicURL} />
            </Box>
          )
        })

      }
    />
      <Seo />
      <main>{children}</main>
      <Footer />
      </Container>
    </>
  )
}

LayoutLinks.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default LayoutLinks
