import React from "react"
import styled from "styled-components"
import { device } from "./device"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Fade from "../components/fade"
import Wrapper from "../components/wrapper"

const Container = styled.div`
  margin: 8rem 0 4rem 0;

  @media ${device.desktop} {
    margin: 4rem 0 4rem 0;
  }
`

const ArticleWrapper = props => (
  <Layout>
    <SEO title={`${props.title} - `} />
    <Wrapper size="large">
      <Fade>
        <Container>
          <Wrapper size="small">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h2>
              <i>{props.time}</i>
            </h2>
            {props.children}
          </Wrapper>
        </Container>
      </Fade>
    </Wrapper>
  </Layout>
)

export default ArticleWrapper
