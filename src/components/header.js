import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"
import Wrapper from "./wrapper"
import { device } from "./device"

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${props => (props.scrolled ? ".5rem 0" : "1rem 0")};
  background-color: var(--bg-rgba);
  backdrop-filter: ${props => (props.scrolled ? "blur(6px)" : "")};
  z-index: ${props => (props.scrolled ? "10" : "1")};
  transition: padding 0.4s ease-in-out;

  @media ${device.desktop} {
    padding: ${props => (props.scrolled ? ".25rem 0" : ".5rem 0")};
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const AboutLink = styled(Link)`
  margin-left: 1.5rem;
  color: var(--wash-secondary);

  &:hover {
    color: var(--color-primary);
  }
`
const WorkLink = styled(AnchorLink)`
  color: ${props =>
    props.shouldHighlight ? "var(--color-primary)" : "var(--wash-secondary)"};
  margin-left: 1.5rem;
  padding-bottom: 0;
  margin-bottom: 0;

  &:hover {
    color: var(--color-primary);
  }
`
const Name = styled(Link)`
  margin-right: auto;
  margin-left: 0;
  color: var(--wash-primary);

  &:hover {
    color: var(--color-primary);
  }
`

const Header = props => {
  const [hasScrolled, setScroll] = useState(false)
  const [highlight, setHighlight] = useState(false)

  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.pageYOffset
      if (scrollCheck > 64) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }

  useEffect(() => {
    if (props.path !== "/") {
      setHighlight(true)
    } else {
      setHighlight(false)
    }
  }, [props.path])

  return (
    <StyledHeader scrolled={hasScrolled}>
      <Wrapper>
        <Container>
          <Name to="/">Gavin Nelson</Name>
          <AboutLink to="/" activeStyle={{ color: "var(--color-primary)" }}>
            About
          </AboutLink>
          <WorkLink to="/#work" stripHash shouldHighlight={highlight}>
            Work
          </WorkLink>
        </Container>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
