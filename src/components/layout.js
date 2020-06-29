import React from "react"
import PropTypes from "prop-types"
import CookieConsent from 'react-cookie-consent';
import Divider from '@material-ui/core/Divider';

import Seo from "./seo"
import Footer from "./footer"



const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <main>{children}</main>
      <CookieConsent
        buttonText="Ok, eu concordo!"
        cookieName="gatsby-gdpr-google-tagmanager"
        acceptOnScroll={true}
      >
      Este site utiliza Cookies para analisar a qualidade do site e para manter o conteúdo e os anúncios relevantes para você. Ao usar o site você indicar que concorda com isso.
      </CookieConsent>
      <Divider variant="middle" />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
