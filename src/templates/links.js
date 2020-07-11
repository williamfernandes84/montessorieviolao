import React from "react"
import { graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import LayoutLinks from "../components/layoutLinks"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Icon from '@material-ui/core/Icon';

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
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    width: '320px',
    height: '50px',
    borderRadius: '15px',
    textAlign: 'center',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },

}));

const Links = ({ data }) => {
  const links = data.links.edges
  const classes = useStyles();

  return (
    <LayoutLinks>
    <CssBaseline />
      <Divider className={classes.margin}/>

        <List>
          {links.map((link, i) => {
            return (

              <ListItem>
                <ListItemText>
                  <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} href={link.node.url}>
                {link.node.title}
                </BootstrapButton>
                </ListItemText>
              </ListItem>
            )
          })}

        </List>
    </LayoutLinks>
  )
}

export default Links
