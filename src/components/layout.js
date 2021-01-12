import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "./globalstyle"
import styled from "styled-components"

import Header from "./header"

const Wrapper = styled.div`
  max-width: 816px;
  margin: 0 auto;
  padding: 0 5% 0 5%;
  overflow: hidden;
`

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Wrapper>
        <footer>
          Designed and Developed by Gavin Nelson<br></br>©{" "}
          {new Date().getFullYear()} Gavin Nelson
        </footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
