import React from "react"
import { graphql } from "gatsby"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import SignupForm from "../components/SignupForm"
import Layout from "../components/layout"
import SobreNos from "../components/sobrenos"

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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 16, 0),

  },
  divider: {
    margin: theme.spacing(4,0,4,0),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

}));


const Pagina = ({ data }) => {
  const pagina = data.strapiLp

  const classes = useStyles();

  return (
    <Layout>
    <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth="xl">

          <Container maxWidth="lg">
                    <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
                     <b>{pagina.headline}</b>
                   </Typography>
        </Container>

        <Divider variant="middle" className={classes.divider}/>

      <Grid container maxWidth="sm"  alignItems="center" spacing={3} >
      <CssBaseline />

          <Grid item xs={false} sm={false} md={6} lg={6} xl={6} elevation={6} align="center" square>
            <img src={pagina.cta_img.publicURL} alt="Imagem CTA"/>
          </Grid>

            <Grid item xs={false} sm={false} md={6} lg={6} xl={6} elevation={6} square>
                <Typography component="h2" variant="h5" paragraph>
                  {pagina.cta_telegram} <br />
                <div className={classes.heroButtons}>
                    <Button
                    href={pagina.link_telegram}
                    variant="contained"
                    color="primary"
                    size="large"
                  >ENTRAR PARA O GRUPO</Button> </div>
                </Typography>

                <Divider variant="middle" className={classes.divider} />

                <br /><br />
                <Typography component="h2" variant="h5">
                  {pagina.cta_form_email}
                </Typography>
                <SignupForm />
            </Grid>

          </Grid>

          <Divider className={classes.divider} variant="middle" />

          <SobreNos conteudo={pagina.sobre_nos} imagem={pagina.foto_perfil.publicURL}/>


        </Container>
</div>







    </Layout>
  )
}

export default Pagina
