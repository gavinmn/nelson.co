import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import "./layout.css"

const Layout = ({ children }) => {
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
    <div className="animation">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className = "width-container">
          <main>{children}</main>
          <footer>
            <p className = "tertiary-text"><i>Designed and Developed by Gavin Nelson</i></p>
            © {new Date().getFullYear()} Gavin Nelson
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
