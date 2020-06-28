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
  justify-content: center;
  background-color: yellow;

  @media ${device.desktop} {
    margin-top: 1rem;
  }
`

const BackgroundImage = styled(Img)`
  width: 100vh;
`

const MontereyText = styled.p`
  font-size: 16rem;
`

const MontereyPage = props => {
  return (
    <Layout location={props.location}>
      <SEO title="Monterey Big Sur Theme - " />
      <HeroContainer>
        <BackgroundImage
          fluid={props.data.montereyBackground.childImageSharp.fluid}
          alt=""
        />
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
