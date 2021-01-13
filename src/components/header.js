import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styled from "styled-components"
import Wrapper from "./wrapper"
import { device } from "./device"

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${props => (props.scrolled ? ".5rem 0" : "1rem 0")};
  background-color: ${props => (props.darkBackground ? "" : "var(--bg-rgba)")};
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

const AboutLink = styled.a`
  margin-left: 1.5rem;
  color: ${props =>
    props.shouldHighlightAbout
      ? "var(--color-primary)"
      : "var(--wash-secondary)"};
  &:hover {
    cursor: pointer;
    color: var(--color-primary);
  }
`
const WorkLink = styled.a`
  color: ${props =>
    props.shouldHighlightWork
      ? "var(--color-primary)"
      : "var(--wash-secondary)"};
  margin-left: 1.5rem;
  padding-bottom: 0;
  margin-bottom: 0;

  &:hover {
    cursor: pointer;
    color: var(--color-primary);
  }
`
const Name = styled.a`
  margin-right: auto;
  margin-left: 0;
  color: var(--wash-primary);
  &:hover {
    cursor: pointer;
    color: var(--color-primary);
  }
`

const Header = props => {
  const [hasScrolled, setScroll] = useState(false)
  const [highlightWork, setHighlightWork] = useState(false)
  const [highlightAbout, setHighlightAbout] = useState(true)

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

  const router = useRouter()

  useEffect(() => {
    if (router.pathname !== "/") {
      setHighlightAbout(false)
      setHighlightWork(true)
    } else {
      setHighlightAbout(true)
      setHighlightWork(false)
    }
  }, [router.pathname])

  return (
    <StyledHeader scrolled={hasScrolled}>
      <Wrapper>
        <Container>
          <Link href="/">
            <Name>Gavin Nelson</Name>
          </Link>
          <Link href="/">
            <AboutLink shouldHighlightAbout={highlightAbout}>About</AboutLink>
          </Link>
          <Link href="/#work" passhref>
            <WorkLink stripHash shouldHighlightWork={highlightWork}>
              Work
            </WorkLink>
          </Link>
        </Container>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
