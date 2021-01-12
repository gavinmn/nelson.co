import React, { useRef } from "react"
import styled from "styled-components"
import Logo from "./logo"
import Fade from "./fade"
import Scale from "./scale"
import { device } from "./device"
import StyledLink from "./styledlink"
import Image from "next/image"

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: [1] auto [2] auto [3] auto [end];
  align-items: start;

  @media ${device.desktop} {
    grid-template-columns: [left] 38% [right] auto;
    grid-template-rows: [1] auto [2] auto [end];
    max-width: 816px;
  }
`

const StyledLogo = styled(Logo)`
  justify-self: start;

  @media ${device.desktop} {
    margin-right: 32px;
  }
`

const HeroText = styled.p`
  margin-top: 2rem;
  max-width: 506px;

  @media ${device.desktop} {
    margin-top: 0;
    justify-self: end;
    max-width: 816px;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
  grid-row: 3;

  @media only screen and (min-width: 445px) {
    justify-content: start;
  }

  @media ${device.desktop} {
    margin-top: 0.75rem;
    grid-row: 2;
    grid-column: right;
  }
`

const Email = styled(StyledLink)`
  &:hover {
    text-decoration-color: var(--color-primary);
  }
`
const Dribbble = styled(StyledLink)`
  &:hover {
    color: #ea4c89;
    text-decoration-color: #ea4c89;
  }

  @media only screen and (min-width: 445px) {
    margin-left: 1.5rem;
  }
`
const LinkedIn = styled(StyledLink)`
  &:hover {
    color: #0a66c2;
    text-decoration-color: #0a66c2;
  }

  @media only screen and (min-width: 445px) {
    margin-left: 1.5rem;
  }
`

const Twitter = styled(StyledLink)`
  &:hover {
    color: #1da1f2;
    text-decoration-color: #0a66c2;
  }

  @media only screen and (min-width: 445px) {
    margin-left: 1.5rem;
  }
`
const GitHub = styled(StyledLink)`
  &:hover {
    color: var(--github-text);
    text-decoration-color: var(--github-text);
  }

  @media only screen and (min-width: 445px) {
    margin-left: 1.5rem;
  }

  &:hover {
    color: var(--github-text);
    /* background: var(--github-bg); */
  }
`

const Hero = props => {
  return (
    <Fade>
      <Scale>
        <HeroContainer>
          <StyledLogo />
          <HeroText>
            Gavin Nelson is a <strong>product & visual designer </strong>
            in the San Francisco Bay Area. He creates intuitive and clean
            human-centered design solutions with great attention to detail.
            <br></br>
            <br></br>He currently works at Fitbod, and previously worked at
            wikiHow.
          </HeroText>
          <LinkContainer>
            <Email
              href="mailto:gavin@gnelson.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </Email>
            <Twitter
              href="https://twitter.com/Gavmn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Twitter>
            <Dribbble
              href="https://dribbble.com/Gavin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </Dribbble>
            <GitHub
              href="https://github.com/gavinmn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </GitHub>
          </LinkContainer>
        </HeroContainer>
      </Scale>
    </Fade>
  )
}

export default Hero
