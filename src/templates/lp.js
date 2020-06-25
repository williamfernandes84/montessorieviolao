import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import SignupForm from "../components/SignupForm"
import Layout from "../components/layout"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import LockIcon from '@material-ui/icons/Lock';

export const query = graphql`
  query LpQuery($id: Int!) {
    strapiLp(strapiId: { eq: $id }) {
      strapiId
      titulo
      headline
      cta_telegram
      link_telegram
      description_1
      description_2
      description_3
      cta_img {
        publicURL
      }
      cta_form_email
    }
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),

  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  paper: {
    margin: theme.spacing(3),
  },
  grid: {
    marginTop: theme.spacing(4),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


const Pagina = ({ data }) => {
let cta;
  const pagina = data.strapiLp

  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Container maxWidth="xl">

          <Container maxWidth="lg">
                    <Typography component="h3" variant="h5" align="center" color="textSecondary" paragraph>
                     {pagina.headline}
                   </Typography>
        </Container>

        <Divider variant="middle" />

      <Grid container className={classes.grid} alignItems="center" spacing={3} >
      <CssBaseline />

          <Grid item xs={false} sm={false} md={6} lg={6} xl={6} elevation={6} align="center" square>
            <img src={pagina.cta_img.publicURL} />
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

                <Divider variant="middle" />
                <br /><br />
                <Typography component="h2" variant="h5">
                  {pagina.cta_form_email}
                </Typography>
                <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Digite o seu E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <div className={classes.heroButtons}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.submit}
                  >
                    ENVIAR
                  </Button> <LockIcon />Nós nunca enviamos SPAM
</div>

                </form>
            </Grid>



    </Grid>

</Container>
</div>







    </Layout>
  )
}

export default Pagina
