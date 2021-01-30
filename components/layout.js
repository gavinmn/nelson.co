import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { device } from "./device"
import Link from "next/link"

import Header from "./header"

const Wrapper = styled.div`
  max-width: 816px;
  margin: 0 auto;
  padding: 0 5% 0 5%;
  overflow: hidden;
`

const FooterContainer = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  background-color: var(--bg-secondary);

  @media ${device.desktop} {
    padding-top: 1rem;
    margin-top: 2rem;
  }
`

const LayoutFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TopFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

const BottomFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 36px;
`

const LeftFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.desktop} {
    flex-direction: row;
  }
`

const RightFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const ColOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.desktop} {
    margin-right: 64px;
  }
`

const ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledLink = styled.a`
  background-image: none;
  text-shadow: none;
  font-size: var(--font-xs);
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  &:hover {
    color: var(--text-primary);
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>

      <FooterContainer>
        <Wrapper size={"large"}>
          <LayoutFlex>
            <TopFlex>
              <LeftFlex>
                <ColOne>
                  <Link href="/" passhref>
                    <StyledLink>About</StyledLink>
                  </Link>

                  <Link href="/#work" passhref>
                    <StyledLink>Work</StyledLink>
                  </Link>
                </ColOne>
                <ColTwo>
                  <StyledLink
                    href="mailto:gavin@nelson.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email
                  </StyledLink>
                  <StyledLink
                    href="https://twitter.com/Gavmn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </StyledLink>
                </ColTwo>
              </LeftFlex>
              <RightFlex>
                {/* <Link href="" passhref>
                  <StyledLink>Music Thread</StyledLink>
                </Link>
                <Link href="" passhref>
                  <StyledLink>Photos</StyledLink>
                </Link> */}
              </RightFlex>
            </TopFlex>
            <BottomFlex>
              <Link href="/colophon" passhref>
                <StyledLink>Colophon</StyledLink>
              </Link>
              <footer>© {new Date().getFullYear()} Gavin Nelson</footer>
            </BottomFlex>
          </LayoutFlex>
        </Wrapper>
      </FooterContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
