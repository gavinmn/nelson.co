import React from "react"
import styled from "styled-components"
import { device } from "./device"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Fade from "../components/fade"
import Wrapper from "../components/wrapper"
import Caption from "../components/caption"

const Container = styled.div`
  margin: 8rem 0 0rem 0;

  @media ${device.desktop} {
    margin: 4rem 0 0rem 0;
  }
`

const Subtitle = styled.h3`
  font-size: var(--font-xs);
  font-style: normal;
  margin: 0;
`

const Feedback = styled.div`
  margin-top: 4rem;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-radius: 8px;
`
const FeedbackTitle = styled.h3`
  margin-top: 0;
`
const Email = styled.a`
  &:hover {
    text-decoration-color: var(--color-primary);
  }
`

const Twitter = styled.a`
  &:hover {
    color: #1da1f2;
    text-decoration-color: #1da1f2;
  }
`

const PostWrapper = props => (
  <Layout>
    <SEO title={`${props.title} - `} og={props.og} />
    <Wrapper size="large">
      <Fade>
        <Container>
          <Wrapper size="small">
            <h1>{props.title}</h1>
            <Subtitle>{props.subtitle}</Subtitle>
            <Caption>
              <i>{props.time}</i>
            </Caption>
            {props.children}
            <Feedback>
              <FeedbackTitle>Feedback</FeedbackTitle>
              <p>
                Do you have comments or questions about something I wrote? Send
                them my way on{" "}
                <Twitter
                  href="https://twitter.com/Gavmn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Twitter>{" "}
                or over{" "}
                <Email
                  href="mailto:gavin@gnelson.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  email
                </Email>
                .
              </p>
            </Feedback>
          </Wrapper>
        </Container>
      </Fade>
    </Wrapper>
  </Layout>
)

export default PostWrapper
