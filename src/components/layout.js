import React from "react"
import PropTypes from "prop-types"
import {GlobalStyle} from './globalstyle'
import Wrapper from "./wrapper"
import Header from "./header"
import Secondary from "./secondary"

const Layout = ({ children, location }) => {
  
  return (
      <>
        <GlobalStyle />
        <Header path={location.pathname} />
        <Wrapper>
          <main>{children}</main>
          <footer>
            Designed and Developed by Gavin Nelson<br></br>
            © {new Date().getFullYear()} Gavin Nelson
          </footer>
        </Wrapper>
      </>
    )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
