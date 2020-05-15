import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { device } from "../components/device"

const Container = styled.div`
  display: grid;
  height: 100vh;
  justify-content: end;
  align-content: center;
`

const FourOhFour = styled.p`
  font-family: monospace;
  font-weight: 900;
  font-size: 2rem;
  color: var(--wash-primary);
  text-align: right;
`
const NotFound = styled.p`
  font-family: monospace;
  font-size: 1rem;
  color: var(--wash-secondary);
  text-align: right;
  margin-bottom: 8px;
`

const WhyDontYou = styled.p`
  font-family: monospace;
  font-size: 1rem;
  color: var(--wash-secondary);
  text-align: right;
`

const HereLink = styled(Link)`
  font-family: monospace;
  font-size: 1rem;
  color: var(--color-primary);
  text-align: right;

  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--color-primary);
  }
`

const NotFoundPage = props => (
  <Layout location={props.location}>
    <SEO title="404: Not found" />
    <Container>
      <FourOhFour>404.</FourOhFour>
      <NotFound>page not found.</NotFound>
      <WhyDontYou>
        why don't you go <HereLink to="/">here.</HereLink>
      </WhyDontYou>
    </Container>
  </Layout>
)

export default NotFoundPage
