import React from "react"
import { graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player/youtube'
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core';
import AccordionSummary from '@material-ui/core';
import AccordionDetails from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(2, 0, 2, 0),

  },
  divider: {
    margin: theme.spacing(4,0,4,0),
  },
  centerBlock: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    backgroundColor: "#cccccc",
    textAlign: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  buttonbuttonComprar: {
    textAlign: 'center',
    marginLeft: theme.spacing(3),
    backgroundColor: "#5F9578",
    "padding": "15px",

  },

  sobreCurso: {
    "padding": "15px",
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

const Pagina = () => {
  const classes = useStyles();

  return (
    <Layout>
    <CssBaseline />
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
        <Grid className={classes.sobreCurso}>
          <Typography component="h1" variant="h5" align="center" >
            <b>Caminho para Leitura</b>
          </Typography>
          <Typography component="p" variant="p" align="center" >
            No vídeo abaixo explicamos sobre o curso <b>Caminho para Leitura</b> do Montessori e Violão
          </Typography>
          <br />
            <ReactPlayer width='100%' url='https://youtu.be/VtweZerkN5I' />
            <br />
            <Typography component="span" variant="span" align="center" >
              Clique no Botão ao lado para garantir a sua Vaga com <b>30% de Desconto!</b>
            </Typography>
            <Button
                href='https://pay.hotmart.com/J8041377E?off=2lnyppqp'
                variant="contained"
                color="primary"
                size="large"
                className={classes.buttonbuttonComprar}
              >COMPRAR AGORA!</Button>

          </Grid>

        </Grid>

        <Divider variant="middle" className={classes.divider}/>

        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
        <Grid>
          <Typography component="h1" variant="h5" align="center" >
            Sobre o Curso
          </Typography>
          <Typography component="p" variant="p" align="center" >
            Veja o conteúdo do curso:
          </Typography>

          <List>

            <ListItem alignItems="flex-start">
              <ListItemText
                  primary="Módulo 1 - O Caminho para Leitura"
                  secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Neste módulo vamos apresentar o Caminho, é um módulo introdutório que termina com um exemplo de atividades.
                          </Typography>

                          <ul>
                            <li>Quem foi Dra. Maria Montessori</li>
                            <li>Períodos Sensíveis: Introdução</li>
                            <li>Períodos Sensíveis: 0 a 3 anos</li>
                            <li>Períodos Sensíveis: 3 a 6 anos</li>
                            <li>Períodos Sensíveis: 6 a 12 anos</li>
                            <li>Regra Básica de funcionamento da metodologia</li>
                            <li>Montessori e a valorização da Infância</li>
                            <li>A importância dos Sentidos</li>
                            <li>A importância dos Coordenação Motora</li>
                            <li>A importância da Concentração</li>
                            <li>A importância da Autonomia</li>
                            <li>Exemplo de Atividades que veremos nos móduloa a Seguir</li>
                          </ul>

                        </React.Fragment>
                        }
                />

            </ListItem>

            <Divider variant="middle" className={classes.divider}/>

            <ListItem alignItems="flex-start">
              <ListItemText
                  primary="Módulo 2 - Preparando Caminho para Leitura"
                  secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Neste módulo é hora de "mãos na massa", esinaremos atividades que trabalham os pilares que eu expliquei no módulo anterior.
                          </Typography>

                          <ul>
                            <li>AULA 1 - Introdução</li>
                            <li>AULA 2 - Atividade para refinamento de movimento para coordenação motora fina com potes</li>
                            <li>AULA 3 - Entenda as atividades de concentração e análise de medidas</li>
                            <li>AULA 4 - Atividade de transpor líquidos para refinamento da coordenação motora fina</li>
                            <li>AULA 5 - A importância das atividades manuais</li>
                            <li>AULA 6 - Atividade com dobraduras e toalhas</li>
                            <li>AULA 7 - Atividade de orientação de espaço com pá e folhas</li>
                            <li>AULA 8 - Atividade para estimulo dos sentidos</li>
                            <li>AULA 9 - Atividade para estímulo dos Sentidos</li>
                            <li>AULA 10 - Atividade para refinamento de coordenação motora fina com miçangas</li>
                            <li>AULA 11 - Atividade para refinamento de coordenação motora fina com botões / revista / recortes</li>
                            <li>AULA 12 - Atividade para refinamento de movimento para coordenação motora fina com folhas e algodão</li>
                            <li>AULA 13 - Atividade para refinamento de movimentos para coordenação motora fina com grãos</li>
                            <li>AULA  - Atividade para refinamento de movimentos para coordenação motora fina e estímulo de Concentração com botões</li>
                            <li>AULA 15 - Atividade para refinamento de movimento e aprendizado de formas</li>
                            <li>AULA 16 - Porque você não deve ignorar essas atividades manuais</li>

                          </ul>

                        </React.Fragment>
                        }
                />

            </ListItem>

            <Divider variant="middle" className={classes.divider}/>

            <ListItem alignItems="flex-start">
              <ListItemText
                  primary="Módulo 3 - Atividades de Linguagem"
                  secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Neste módulo avançamos para atividades de Linguagem, um módulo bem prático.
                          </Typography>

                          <ul>
                            <li>AULA 1 - Introdução Módulo 3</li>
                            <li>AULA 2 - Linha do Tempo</li>
                            <li>AULA 3 - O som das letras</li>
                            <li>AULA 4 - Construção de Palavras (Do concreto para o abstrato)</li>
                            <li>AULA 5 - Representação gráfica de Objeto</li>
                            <li>AULA 6 - Representação gráfica de Objetos e associação de palavras</li>
                            <li>AULA 7 - Livro Montessori</li>
                            <li>AULA 8 - Alfabeto em Rolo</li>
                            <li>AULA 9 - Cartões de Vocabulário</li>
                            <li>AULA 10 - Cartão Básico</li>
                            <li>AULA 11 - Continuação da atividade de Cartões básicos</li>
                            <li>AULA 12 - Caixa de Palavras</li>
                            <li>AULA 13 - Cartões de Comando</li>
                            <li>AULA 14 - Cartões de Relacionamento</li>
                            <li>AULA 15 - Cartões de leitura com imagem</li>
                            <li>AULA 16 - Sobre observação</li>
                          </ul>

                        </React.Fragment>
                        }
                />

            </ListItem>

            <Divider variant="middle" className={classes.divider}/>

            <ListItem alignItems="flex-start">
              <ListItemText
                  primary="Módulo 4 - Atividades de Escrita e Leitura"
                  secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Neste módulo avançamos para atividades de Linguagem, um módulo bem prático.
                          </Typography>

                          <ul>
                            <li>Aula 1 - Introdução</li>
                            <li>AULA 2 - Dificuldade Ortográficas</li>
                            <li>AULA 3 - Alfabeto em Lixa</li>
                            <li>Aula 4 - Escrita com giz</li>
                            <li>Aula 5 - Fichas de Treinamento de Escrita</li>
                            <li>Aula 6 - Produção Literária</li>
                            <li>Aula 7 - Livro do Alfabeto</li>
                            <li>Aula 8 - Número e Quantidades</li>
                            <li>Aula 9 - Conclusão do Módulo</li>

                          </ul>

                        </React.Fragment>
                        }
                />

            </ListItem>

            <Divider variant="middle" className={classes.divider}/>

            <ListItem alignItems="flex-start">
              <ListItemText
                  primary="Módulo 5 - Atividades de Matemática"
                  secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Neste módulo avançamos para atividades de Matemática.
                          </Typography>

                          <ul>
                            <li>Aula 1 - Introdução</li>
                            <li>AULA 2 - Números em Lixa</li>
                            <li>AULA 3 - Livro dos Números</li>
                            <li>Aula 4 - Par e Ímpar</li>
                            <li>Aula 5 - Relação Número e Quantidades</li>
                            <li>Aula 6 - Barras Vermelhas e Azuis</li>
                            <li>Aula 7 - Composição Numérica</li>

                          </ul>

                        </React.Fragment>
                        }
                />

            </ListItem>

            <Divider variant="middle" className={classes.divider}/>

            <ListItem alignItems="flex-start">
              <ListItemText
                  primary="Bônus"
                  secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Bônus para esta turma!
                          </Typography>

                          <ul>
                            <li>Apostila PDF (Para imprimir em casa) - Alfabeto Fase 1</li>
                            <li>Apostila PDF (Para imprimir em casa) - Alfabeto Fase 2</li>
                            <li>Apostila PDF (Para imprimir em casa) - Matemática</li>
                            <li>Livro Montessori (7 Níveis)</li>
                            <li>Cartões de Comando</li>
                            <li>Templates de Alfabeto Móvel</li>
                            <li>Template de Alfabeto em Lixa</li>
                            <li>Acesso a todos materiais em PDF que produzirmos ou atualizações dos materiais existentes</li>
                            <li>Acesso a todas as Lives da série "O Caminho" (versão editada)</li>
                            <li>AULA BÔNUS: Como adaptar essas atividade em Sala de Aula</li>
                            <li>AULA BÔNUS: Sobre adaptação em</li>
                          </ul>

                        </React.Fragment>
                        }
                />

            </ListItem>

            <Divider variant="middle" className={classes.divider}/>

            <Button
                href='https://pay.hotmart.com/J8041377E?off=2lnyppqp'
                variant="contained"
                color="primary"
                size="large"
                className={classes.buttonbuttonComprar}
              >COMPRAR AGORA!</Button>

          </List>

          </Grid>
        </Grid>


      </div>
    </Layout>
  )
}

export default Pagina
