import React from "react"
import { graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import LayoutLinks from "../components/layoutLinks"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export const query = graphql`
  query MyQuery {
    links: allStrapiLink(sort: {fields: strapiId, order: ASC}) {
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

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(1,0,1,0),
  },

}));

const Links = ({ data }) => {
  const links = data.links.edges
  const classes = useStyles();

  return (
    <LayoutLinks>
    <CssBaseline />
      <Container maxWidth="sm">
      <Divider className={classes.divider}/>

        <List>
          {links.map((link, i) => {
            return (

              <ListItem>
                <ListItemText>
                <Button variant="contained" color="secondary" href={link.node.url}>
                {link.node.title}
                </Button>
                  <Divider className={classes.divider}/>
                </ListItemText>
              </ListItem>
            )
          })}

        </List>
      </Container>
    </LayoutLinks>
  )
}

export default Links
