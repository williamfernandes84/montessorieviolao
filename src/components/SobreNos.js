import React from "react"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from "react-markdown"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  sobrenos: {
    "flexGrow": 1,
    "padding": "10px",
    "background-color": "#ffffff",
    "fonte-size": "8px"
  },
  image: {
    },
  img: {
    borderRadius: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    textAlign: 'center',
    },
}));

const SobreNos = ({conteudo, imagem}) => {

const classes = useStyles();
  return (

    <div className={classes.sobrenos}>

      <Grid container spacing={3}>
        <Grid item className={classes.img} xs={3}>
            <img className={classes.img} alt="Eu" src={imagem} />
            <br /><br />
            <div className={classes.menuLeft}>
                <Typography display="inline"><a href="https://instagram.com/montessorieviolao"> <InstagramIcon color="primary"/> </a></Typography>
                <Typography display="inline"><a href="https://facebook.com/montessorieviolao"> <FacebookIcon color="primary"/>< /a></Typography>
                <Typography display="inline"><a href="https://youtube.com/montessorieviolao"> <YouTubeIcon color="primary" /> </a></Typography>
            </div>
        </Grid>
        <Grid item xs>
          <ReactMarkdown source={conteudo} />
        </Grid>
      </Grid>

    </div>

  )
}


export default SobreNos
