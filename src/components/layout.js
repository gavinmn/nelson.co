import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "./globalstyle"
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
  margin-top: 2rem;
  padding-top: 2rem;
  background-color: var(--bg-secondary);

  @media ${device.desktop} {
    margin-top: 1rem;
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
`

const RightFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Internal = styled.div`
  font-size: var(--font-xs);
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
`
const External = styled.a`
  font-size: var(--font-xs);
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>

      <FooterContainer>
        <Wrapper size={"large"}>
          <LayoutFlex>
            <TopFlex>
              <LeftFlex>
                <Internal>
                  {" "}
                  <Link href="/">About</Link>
                </Internal>
                <Internal>
                  {" "}
                  <Link href="/#work">Work</Link>
                </Internal>
                <External
                  href="mailto:gavin@nelson.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </External>
                <External
                  href="https://twitter.com/Gavmn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </External>
              </LeftFlex>
              <RightFlex>
                {" "}
                <Internal href="">Music Thread</Internal>
                <Internal href="">Photos</Internal>
              </RightFlex>
            </TopFlex>
            <BottomFlex>
              <Internal href="">Colophon</Internal>
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
