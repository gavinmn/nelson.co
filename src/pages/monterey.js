import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { device } from "../components/device"
import "./fonts.css"

const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;

  @media ${device.desktop} {
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
