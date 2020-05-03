import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"
import Wrapper from "./wrapper"
import { device } from "./device"


const StyledHeader = styled.div` 
  position:fixed;
  top:0;
  width: 100%;
  padding: ${props => props.scrolled ? ".5rem 0" : "1rem 0"};
  background-color: rgba(255, 255, 255, .8);
  backdrop-filter: ${props => props.scrolled ? "blur(2px)" : ""};  
  z-index: ${props => props.scrolled ? "10" : "1"};
  transition: .4s ease-in-out;

  @media ${device.mobile} {
    padding: ${props => props.scrolled ? ".25rem 0" : ".5rem 0"};
  }
`
const Container = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const AboutLink = styled(Link)`  
  margin-left: 1.5rem;
  color: #1D1D1F;

  &:hover {
    color: #2950ff;    
  }
`
const WorkLink = styled(AnchorLink)`
  color: ${props => props.selected ? "#2950FF" : ""};
  margin-left: 1.5rem;
  padding-bottom: 0;
  margin-bottom: 0;
  color: #1D1D1F;

  &:hover {
    color: #2950ff;
  }
`
const Name = styled(Link)`
  margin-right: auto;
  margin-left: 0;
  color: #1D1D1F;

  &:hover {
    color: #2950ff;
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
      isSelected: false
    }
  }
 
  componentDidMount() {
    this.checkPage()
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 64) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  checkPage() {
    // console.log("hey")
    // alert(this.props.pathname)
      // if (this.props.pathname !== "http://localhost:8000") {
      //   alert("worked")
      //   this.setState({ isSelected: true })
      //   // alert(this.state.isSelected)
      // }
  }


  render() {

    return (
      <StyledHeader scrolled={this.state.hasScrolled}>
        <Wrapper>
          <Container>
            <Name to="/">Gavin Nelson</Name>
            <AboutLink to="/" activeStyle={{"color": "#2950FF"}}>About</AboutLink>
            <WorkLink to="/#work" stripHash selected={this.state.isSelected}>Work</WorkLink>
          </Container>
        </Wrapper> 
      </StyledHeader>
    )
  }
}

export default Header