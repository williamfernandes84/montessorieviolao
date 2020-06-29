import React from "react"
import { graphql } from "gatsby"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SignupForm from "../components/SignupForm"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

export const query = graphql`
  query LpQuery($id: Int!) {
    strapiLp(strapiId: { eq: $id }) {
      strapiId
      titulo
      headline
      cta_telegram
      link_telegram
      sobre_nos
      cta_img {
        publicURL
      }
      cta_form_email
      foto_perfil{
        publicURL
      }
    }
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(8, 0, 8, 0),

  },
  divider: {
    margin: theme.spacing(4,0,4,0),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  buttonTelegram: {
    textAlign: 'center',
  },

  sobrenos: {
    "padding": "15px",
    "background-color": "#ffd8d8",
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


const Pagina = ({ data }) => {
  const pagina = data.strapiLp

  const classes = useStyles();

  return (
    <Layout>
    <CssBaseline />
      <div className={classes.root}>
        <Container maxwidth="xl">

          <Container maxwidth="lg">
                    <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
                     <b>{pagina.headline}</b>
                   </Typography>
        </Container>

        <Divider variant="middle" className={classes.divider}/>

      <Grid container maxwidth="sm"  alignItems="center" spacing={3} >
      <CssBaseline />

          <Grid item xs={false} sm={false} md={6} lg={6} xl={6} elevation={6} align="center" >
            <img src={pagina.cta_img.publicURL} alt="Imagem CTA"/>
          </Grid>

            <Grid item xs={false} sm={false} md={6} lg={6} xl={6} elevation={6} >
                <Typography component="span" paragraph> <br />
                  {pagina.cta_telegram} <br /><br />
                <div className={classes.buttonTelegram}>
                    <Button
                    href={pagina.link_telegram}
                    variant="contained"
                    color="primary"
                    size="large"
                  >ENTRAR PARA O GRUPO</Button> </div>
                </Typography>

                <Divider variant="middle" className={classes.divider} />
                <Typography component="span">
                  {pagina.cta_form_email}<br /><br />
                </Typography>
                <SignupForm />
            </Grid>
          </Grid>
        </Container>
</div>

    <div className={classes.sobrenos}>
      <Grid container spacing={3}>
        <Grid item className={classes.img} xs={3}>
            <img className={classes.img} alt="Eu" src={pagina.foto_perfil.publicURL} />
            <br /><br />
            <div className={classes.menuLeft}>
                <Typography display="inline"><a href="https://instagram.com/montessorieviolao"> <InstagramIcon color="primary"/> </a></Typography>
                <Typography display="inline"><a href="https://facebook.com/montessorieviolao"> <FacebookIcon color="primary"/>< /a></Typography>
                <Typography display="inline"><a href="https://youtube.com/montessorieviolao"> <YouTubeIcon color="primary" /> </a></Typography>
            </div>
        </Grid>
        <Grid item xs>
          <ReactMarkdown source={pagina.sobre_nos} />
        </Grid>
      </Grid>

    </div>



    </Layout>
  )
}

export default Pagina
