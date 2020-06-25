import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Seo from "./seo"
import Footer from "./footer"
import SignupForm from "./SignupForm"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
