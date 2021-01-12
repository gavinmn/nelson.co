import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "next/link"

const Container = styled.div`
  display: flex;
  max-width: 816px;
  margin: 0 auto;
  padding: 0 5% 0 5%;
  overflow: hidden;
  height: 100vh;
  justify-content: start;
  align-content: center;
`
const StyledText = styled.p`
  font-family: monospace;
  align-self: center;
  justify-self: start;
  font-size: 16px;
`

const HereLink = styled(Link)`
  color: var(--wash-secondary);
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`

const NotFoundPage = props => (
  <Layout location={props.location}>
    <SEO title="404: Not found" />
    <Container>
      <StyledText>
        404.<br></br> Why don&#8217t you go <HereLink href="/">here.</HereLink>
      </StyledText>
    </Container>
  </Layout>
)

export default NotFoundPage
