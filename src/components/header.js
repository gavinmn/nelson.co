import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"
import Wrapper from "./wrapper"


const StyledHeader = styled.div` 
  position:fixed;
  top:0;
  width: 100%;
  padding: ${props => props.scrolled ? ".5rem 0" : "1rem 0"};
  background-color: rgba(255, 255, 255, .8);
  backdrop-filter: ${props => props.scrolled ? "blur(2px)" : ""};  
  border-bottom: ${props => props.scrolled ? " 1px solid rgba(0, 0, 0, .05)" : "0"};
  z-index: ${props => props.scrolled ? "10" : "1"};

  @media only screen and (min-width: 722px) {
    padding: ${props => props.scrolled ? ".25rem 0" : ".5rem 0"};
  }
`
const HeaderContainer = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const NavLink = styled(Link)`
  margin-left: 1.5rem;
  border-bottom: 1px solid;
  border-color: #DCDEE1;
  padding-bottom: 0;
  margin-bottom: 0;

  &.active {
    border-color: #2950FF;
  }

  &:hover {
    color: #2950ff;
    border-color: #2950FF;
  }

`
const StyledAnchorLink = styled(AnchorLink)`
  margin-left: 1.5rem;
`
const Name = styled(Link)`
  margin-right: auto;
  margin-left: 0;

  &:hover {
    color: #2950ff;
  }
`

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
      <StyledHeader scrolled={this.state.hasScrolled}>
        <Wrapper>
          <HeaderContainer>
            <Name to="/">Gavin Nelson</Name>
            <NavLink to="/" activeStyle={{"border-color": "#2950FF"}}>About</NavLink>
            <StyledAnchorLink to="/#work" stripHash>Work</StyledAnchorLink>
          </HeaderContainer>
        </Wrapper> 
      </StyledHeader>
    )
  }
}

export default Header