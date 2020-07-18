import React from "react"
import { graphql } from "gatsby"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Layout from "../components/layout"
import Vimeo from '@u-wave/react-vimeo';
import FolderIcon from '@material-ui/icons/Folder';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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

  tabs: {
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Pagina = ({  }) => {
  const classes = useStyles();
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };




  return (
    <Layout>
    <CssBaseline />
      <div className={classes.root}>
        <Container maxwidth="xl">

        <Container maxwidth="lg" >
                    <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
                     <b>Atividades da série <br />O Caminho</b>
                   </Typography>

        </Container>

        <Divider variant="middle" className={classes.divider}/>

      <Grid container maxwidth="sm"  alignItems="center" spacing={3} >
      <CssBaseline />


      <AppBar position="static" color="primary">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="white"
                variant="scrollable"
                scrollButtons="on"
                aria-label="Menu"
              >
                <Tab label="AULA 1" {...a11yProps(0)} />
                <Tab label="AULA 2" {...a11yProps(1)} />
                <Tab label="AULA 3" {...a11yProps(2)} />
                <Tab label="AULA 4" {...a11yProps(3)} />
                <Tab label="AULA 5" {...a11yProps(4)} />
                <Tab label="AULA 6" {...a11yProps(5)} />
                <Tab label="AULA 7" {...a11yProps(6)} />
              </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} className={classes.tabs}>
              <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
               <b>Introdução</b>
              </Typography>
              <Vimeo video="439326913" responsive /><br /><br />
             <Typography component="span" align="center" color="textPrimary" paragraph>
              Se tiver dúvidas, envie uma mensagen no Direct do Instagram @montessorieviolao
            </Typography>
            </TabPanel>


            <TabPanel value={value} index={1} className={classes.tabs}>
              <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
               <b>Concentração</b>
             </Typography>
             <Typography component="span" align="center" color="textPrimary" paragraph>
              Clique no Link para ser direcionado para nossa pasta de materiais de impressão.
            </Typography><br /><br />
            <a href="https://drive.google.com/drive/folders/1qfO-bNlckwcQgfQ1CS8YBVp0WY91NDeW?usp=sharing"> <FolderIcon />Pasta de Materiais</a><br /><br />
            <Typography component="span" align="center" color="textPrimary" paragraph>
             Se tiver dúvidas, envie uma mensagen no Direct do Instagram @montessorieviolao
           </Typography>
            </TabPanel>


            <TabPanel value={value} index={2} className={classes.tabs}>
              <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
               <b>Autonomia <LockIcon /></b>
             </Typography>
             <Vimeo video="438906574" responsive /><br />
             <Typography component="span" align="center" color="textPrimary" paragraph>
              No vídeo demonstramos como trabalhar a Autonomia da sua criança em casa.
            </Typography><br /><br />
            <Typography component="span" align="center" color="textPrimary" paragraph>
             Se tiver dúvidas, envie uma mensagen no Direct do Instagram @montessorieviolao
           </Typography>
            </TabPanel>


            <TabPanel value={value} index={3} className={classes.tabs}>
              <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
               <b>Coordenação <LockIcon /></b>
             </Typography><br />
             <Vimeo video="439108311" responsive /><br />
             <Typography component="span" align="center" color="textPrimary" paragraph>
              Clique no Link para ser direcionado para nossa pasta de materiais de impressão e baixar os templates para as atividades de Coordenação.
            </Typography><br /><br />
            <a href="https://drive.google.com/drive/folders/1qfO-bNlckwcQgfQ1CS8YBVp0WY91NDeW?usp=sharing"> <FolderIcon />Pasta de Materiais</a><br /><br />
            <Typography component="span" align="center" color="textPrimary" paragraph>
             Se tiver dúvidas, envie uma mensagen no Direct do Instagram @montessorieviolao
           </Typography>
            </TabPanel>


            <TabPanel value={value} index={4}>
              <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
               <b>Escrita <LockIcon /></b>
             </Typography>
             <Vimeo video="439510314" responsive /><br />
             <Typography component="span" align="center" color="textPrimary" paragraph>
              Senha de acesso foi informada na Live do dia 17/Julho
            </Typography><br /><br />
            <Typography component="span" align="center" color="textPrimary" paragraph>
             Clique no Link para ser direcionado para nossa pasta de materiais de impressão e baixar os templates para as atividades de Coordenação.
           </Typography><br /><br />
           <a href="https://drive.google.com/drive/folders/1qfO-bNlckwcQgfQ1CS8YBVp0WY91NDeW?usp=sharing"> <FolderIcon />Pasta de Materiais</a><br /><br />
            <Typography component="span" align="center" color="textPrimary" paragraph>
             Se tiver dúvidas, envie uma mensagen no Direct do Instagram @montessorieviolao
           </Typography>
            </TabPanel>


            <TabPanel value={value} index={5}>
              <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
               <b>Leitura e Matemática <LockIcon /></b>
             </Typography>
             <Typography component="span" align="center" color="textPrimary" paragraph>
              Senha de acesso será informada na Live do dia 18/Julho às 21h
            </Typography><br /><br />
            <Typography component="span" align="center" color="textPrimary" paragraph>
             Se tiver dúvidas, envie uma mensagen no Direct do Instagram @montessorieviolao
           </Typography>
            </TabPanel>

            <TabPanel value={value} index={6}>
              <Typography component="h3" variant="h5" align="center" color="textPrimary" paragraph>
               <b>Resumo do Método e Aula sobre Observação, Analisar progresso, Identificar problemas..</b>
             </Typography>
             <Typography component="span" align="center" color="textPrimary" paragraph>
              Senha de acesso será informada na Live do dia 19/Julho às 21h
            </Typography><br /><br />
            <Typography component="span" align="center" color="textPrimary" paragraph>
             Se tiver dúvidas, envie uma mensagen no Direct do Instagram @montessorieviolao
           </Typography>
            </TabPanel>

            <Divider variant="middle" className={classes.divider}/>

            <Typography component="span" paragraph> <br />
              Se você ainda não está inscrita nesta série, entre para o nosso grupo de Whatsapp <br /><br />
            <div className={classes.buttonTelegram}>
                <Button
                href='https://hotm.art/LPdesafioMV'
                variant="contained"
                color="primary"
                size="large"
              >ENTRAR PARA O GRUPO</Button> </div>
            </Typography>


          </Grid>
        </Container>
</div>





    </Layout>
  )
}

export default Pagina
