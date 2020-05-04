import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {GlobalStyle} from './typography'
import Wrapper from "./wrapper"
import Header from "./header"

const Layout = ({ children, location }) => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    
  return (
      <>
        <GlobalStyle />
        <Header path={location.pathname} />
        <Wrapper>
          <main>{children}</main>
          <footer>
            <p><i>Designed and Developed by Gavin Nelson</i></p>
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
