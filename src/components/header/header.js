import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className = "header">
  	<div className = "width-container">
  		<div className = "header-flex"> 
  			<p className="secondary-text">Gavin Nelson</p>
  			<Link to="/" className="secondary-text link-text">About</Link>
  			<Link to="/" className="secondary-text link-text">Work</Link>
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
