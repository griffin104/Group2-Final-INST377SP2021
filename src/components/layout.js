import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./styles.css"


//children refers to the direct children elements of the layout (refer to comment at the end)
const Layout = ({ children }) => {

  //If you want to do any normal JS, do it before the return
  //Additionally, this console.log() helps with debugging and getting a better understanding of props
  console.log({children})

  return (
    //JSX elements need a parent, empty tags are the way to go if you have nothing else to surround it with
    <>
      <Header siteTitle={`INST377 Group 2 UMD Basketball`} />
      <div>
        <main>{children}</main>
      </div>

    {/*If a bunch of text after this closing tag looks weird disable the Babel ES6/ES7 extension.
    If the syntax coloring of the following code looks fine, disregard this*/}
    </>
  )
}

//This defines what the proptypes are 'node' means rendered element, 'isRequired' means a warning will show if not provided
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
