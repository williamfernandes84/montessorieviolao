import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
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
    <div className={classes.footer}>
    <Typography> Montessori & Violão. Não existe uma fórmula ou método mágico para ajudar na alfabetização, mas eu estou aqui para te ajudar nessa caminhada. Visite nossa <a href= "/pagina/2">Política de Cookies</a></Typography>

    </div>
  )
}


export default Footer
