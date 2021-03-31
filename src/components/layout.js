import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./styles.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={`INST377 Group 2 UMD Basketball`} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
