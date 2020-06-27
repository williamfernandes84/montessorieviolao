import React from "react"
import { graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import LayoutLinks from "../components/layoutLinks"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const Links = ({ data }) => {
  const links = data.links.edges

  return (
    <LayoutLinks>
      <Container maxWidth="sm">

        <List>
          {links.map((link, i) => {
            return (
              <ListItem>
                <ListItemText>
                  <a href={link.node.url}>{link.node.title}</a>
                  <Divider />
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
