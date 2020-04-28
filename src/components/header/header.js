import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./header.css"

const Header = ({ siteTitle }) => (
  <div className = "header">
    <div className = "width-container">
      <div className = "header-flex"> 
        <Link to="/" className="secondary-text name">Gavin Nelson</Link>
        <Link to="/" className="secondary-text link-text link" activeClassName="active">About</Link>
        <AnchorLink to="/#work" stripHash className="secondary-text link-text link">Work</AnchorLink>
    </div>
   </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header