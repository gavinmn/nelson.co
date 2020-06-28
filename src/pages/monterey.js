import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { device } from "../components/device"
import Wrapper from "../components/wrapper"
import "./fonts.css"

const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  margin-bottom: 4rem;

  @media ${device.desktop} {
    margin-bottom: 2rem;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
`

const BackgroundImage = styled(Img)`
  width: 100vw;
  grid-column: 1;
  grid-row: 1;
`

const MontereyText = styled.p`
  font-size: 5rem;
  font-weight: bold;
  color: #ffffff;
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: center;
  z-index: 2;
`
const Twitter = styled.a`
  ${"" /* color: var(--wash-primary); */}
  font-size: 1rem;
  &:hover {
    color: #1da1f2;
    text-decoration-color: #0a66c2;
  }
  @media ${device.desktop} {
    font-size: 22px;
  }
`

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  padding-bottom: 2rem;
  grid-column: 1;
  grid-row: 1;
  align-self: end;
  justify-self: center;
  z-index: 2;
`
const DetailHeader = styled.p`
  margin: 0 auto;
  text-align: center;
  max-width: 630px;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const DetailText = styled.p`
  margin: 0 auto;
  text-align: center;
  max-width: 630px;
  margin-bottom: 4rem;
`

const MontereyPage = props => {
  return (
    <Layout location={props.location}>
      <SEO title="Monterey Big Sur Theme - " />
      <HeroContainer>
        <Grid>
          <MontereyText>Monterey</MontereyText>
          <DescriptionText>
            A macOS Big Sur icon theme by Gavin Nelson
          </DescriptionText>
          <BackgroundImage
            fluid={props.data.montereyBackground.childImageSharp.fluid}
            alt=""
          />
        </Grid>
      </HeroContainer>
      <DetailHeader>Coming Soon</DetailHeader>
      <DetailText>
        Follow Gavin on{" "}
        <Twitter href="https://twitter.com/Gavmn">Twitter </Twitter>to be
        notified of release.
      </DetailText>
    </Layout>
  )
}

export default MontereyPage

export const PageQuery = graphql`
  query {
    montereyBackground: file(
      relativePath: { eq: "monterey/montereybackground.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 6010) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
