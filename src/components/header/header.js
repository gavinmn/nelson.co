import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 48) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'header header-scrolled' : 'header'}>
        <div className = "header-container">
           <div className = "width-container">
             <div className = "header-flex"> 
                <Link to="/" className="secondary-text name">Gavin Nelson</Link>
                <Link to="/" className="secondary-text link-text link" activeClassName="active"> About</Link>
                <AnchorLink to="/#work" stripHash className="secondary-text link-text link">Work</AnchorLink>
              </div>
            </div>
         </div>
      </div>
    )
  }
}

export default Header