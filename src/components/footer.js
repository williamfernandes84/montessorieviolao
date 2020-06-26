import React from "react"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    "padding": "10px",
    "background-color": "#539cc8",
    "fonte-size": "8px",
    "margin-bottom": "10px",
    "color": "#fff",
  },
  menuLeft: {
    "text-align": "right",
    "padding": "10px",
  },

}));

const Footer = () => {

const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.menuLeft}>
          <Typography display="inline"><a href="https://instagram.com/montessorieviolao"> <InstagramIcon color="primary"/> </a></Typography>
          <Typography display="inline"><a href="https://facebook.com/montessorieviolao"> <FacebookIcon color="primary"/>< /a></Typography>
          <Typography display="inline"><a href="https://youtube.com/montessorieviolao"> <YouTubeIcon color="primary" /> </a></Typography>
      </div>

    <Typography> Montessori & Violão. Não existe uma fórmula ou método mágico para ajudar na alfabetização, mas eu estou aqui para te ajudar nessa caminhada. Visite nossa <a href= "/pagina/2">Política de Cookies</a></Typography>

    </div>
  )
}


export default Footer
