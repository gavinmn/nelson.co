import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { device } from "../components/device"
import Wrapper from "../components/wrapper"
import "./fonts.css"
import bgimage from "../images/monterey/montereybackground.jpg"

const BGImage = styled.div`
  background-image: url(${bgimage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`

const FullView = styled.div`
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const CenterContainer = styled.div`
  width: 100%;
  align-self: center;
  justify-self: center;
  grid-row: 1;
  grid-column: 1;
`

const IconContainer = styled.div`
  width: 100%;
  max-width: 816px;
  display: flex;
  justify-content: space-around;
`

const IconImage = styled(Img)`
  width: 4rem;
  height: 4rem;
  pointer-events: none;
`

const MontereyText = styled.p`
  font-size: 4rem;
  font-weight: bold;
  color: #ffffff;
`

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  justify-self: center;
  align-self: end;
  grid-row: 1;
  grid-column: 1;
  margin-bottom: 1rem;
`
// const SecondaryContent = styled.div`
//   width: 100%;
//   height: 100%;
//   grid-column: 1;
//   grid-row: 2;
//   display: grid;
//   grid-template-columns: auto;
//   grid-template-rows: auto auto;
// `

const DetailHeader = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  max-width: 630px;
  margin-top: 4rem;
  margin-bottom: 1rem;
`

const DetailText = styled.p`
  margin: 0 auto 4rem auto;
  text-align: center;
  max-width: 630px;
`
const Twitter = styled.a`
  font-size: 1rem;
  &:hover {
    color: #1da1f2;
    text-decoration-color: #0a66c2;
  }
  @media ${device.desktop} {
    font-size: 22px;
  }
`

const MontereyPage = props => {
  return (
    <BGImage>
      <Layout location={props.location}>
        <SEO title="Monterey Big Sur Theme - " />
        <Wrapper>
          <FullView>
            <CenterContainer>
              <IconContainer>
                <IconImage
                  fluid={props.data.notes.childImageSharp.fluid}
                  alt=""
                />
                <IconImage
                  fluid={props.data.notes.childImageSharp.fluid}
                  alt=""
                />
                <IconImage
                  fluid={props.data.notes.childImageSharp.fluid}
                  alt=""
                />
              </IconContainer>
              <MontereyText>Monterey</MontereyText>
              <IconContainer>
                <IconImage
                  fluid={props.data.notes.childImageSharp.fluid}
                  alt=""
                />
                <IconImage
                  fluid={props.data.notes.childImageSharp.fluid}
                  alt=""
                />
                <IconImage
                  fluid={props.data.notes.childImageSharp.fluid}
                  alt=""
                />
              </IconContainer>
            </CenterContainer>
            <DescriptionText>A macOS Big Sur icon theme</DescriptionText>
          </FullView>
          <DetailHeader>Coming Soon</DetailHeader>
          <DetailText>
            Follow Gavin on{" "}
            <Twitter href="https://twitter.com/Gavmn">Twitter </Twitter>to be
            notified of release.
          </DetailText>
        </Wrapper>
      </Layout>
    </BGImage>
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
    notes: file(relativePath: { eq: "monterey/Notes.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
