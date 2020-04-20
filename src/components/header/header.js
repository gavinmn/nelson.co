import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./header.css"

const Header = ({ siteTitle }) => (
  <div className = "header">
  	<div className = "width-container">
  		<div className = "header-flex"> 
  			<p className="secondary-text">Gavin Nelson</p>
  			<Link to="/" className="secondary-text link-text">About</Link>
  			<AnchorLink to="/#work" stripHash className="secondary-text link-text">Work</AnchorLink>
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
