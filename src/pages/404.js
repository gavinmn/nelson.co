import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "next/link"
import Wrapper from "../components/wrapper"
import { device } from "../components/device"

const TextContainer = styled.div`
  margin-top: -1rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: start;
  justify-content: center;

  @media ${device.desktop} {
    margin-top: 1rem;
  }
`
const HereLink = styled(Link)`
  color: var(--text-secondary);
  font-size: var(--font-s);

  &:hover {
    text-decoration: underline;
  }
`

const NotFoundPage = props => (
  <Layout>
    <SEO title="404: Not found " />
    <Wrapper>
      <TextContainer>
        <h1>404</h1>
        <p>
          This is not the page you are looking for. <br></br>Why don't you go{" "}
          <HereLink href="/">here.</HereLink>
        </p>
      </TextContainer>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
