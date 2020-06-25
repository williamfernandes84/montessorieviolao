exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
            }
          }
        }
        landingpages: allStrapiLp {
          edges {
            node {
              strapiId
              titulo
            }
          }
        }
        paginas: allStrapiPaginas {
          edges {
            node {
              strapiId
            }
          }
        }
        confirmacoes: allStrapiConfirmacao {
          edges {
            node {
              strapiId
              titulo
            }
          }
        }
        links: allStrapiLink {
          edges {
            node {
              strapiId
            }
          }
        }



      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges
  const paginas = result.data.paginas.edges
  const landingpages = result.data.landingpages.edges
  const confirmacoes = result.data.confirmacoes.edges
  const links = result.data.links.edges

  createPage({
      path: `/links`,
      component: require.resolve("./src/templates/links.js"),
    })

  confirmacoes.forEach((confirmacao, index) => {
    createPage({
      path: `/confirmacao/${confirmacao.node.titulo}`,
      component: require.resolve("./src/templates/confirmacao.js"),
      context: {
        id: confirmacao.node.strapiId,
      },
    })
  })

  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.node.strapiId}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        id: article.node.strapiId,
      },
    })
  })

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.strapiId}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        id: category.node.strapiId,
      },
    })
  })

  paginas.forEach((pagina, index) => {
    createPage({
      path: `/pagina/${pagina.node.strapiId}`,
      component: require.resolve("./src/templates/pagina.js"),
      context: {
        id: pagina.node.strapiId,
      },
    })
  })

  landingpages.forEach((landingpage, index) => {
    createPage({
      path: `/lp/${landingpage.node.titulo}`,
      component: require.resolve("./src/templates/lp.js"),
      context: {
        id: landingpage.node.strapiId,
      },
    })
  })


}
