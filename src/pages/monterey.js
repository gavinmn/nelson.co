import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import MontereyData from "../components/montereydata"
import { device } from "../components/device"
import Wrapper from "../components/wrapper"
import "./fonts.css"
import BackgroundImage from "gatsby-background-image"

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
  @media only screen and (max-height: 662px) {
    width: 3rem;
    height: 3rem;
  }
`

const MontereyText = styled.p`
  margin: 1rem 0;
  font-size: 4rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  @media only screen and (max-height: 662px) {
    margin: 0;
  }
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
const DetailHeader = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  max-width: 630px;
  margin-top: 4rem;
  margin-bottom: 1rem;
`

const DetailText = styled.p`
  color: #ffffff;
  margin: 0 auto 4rem auto;
  text-align: center;
  max-width: 630px;
`
const Twitter = styled.a`
  font-size: 1rem;
  &:hover {
    color: #1da1f2;
    text-decoration-color: #1da1f2;
  }
  @media ${device.desktop} {
    font-size: 22px;
  }
`
const Gumroad = styled.a`
  font-size: 1rem;
  &:hover {
    color: #5ba9af;
    text-decoration-color: #5ba9af;
  }
  @media ${device.desktop} {
    font-size: 22px;
  }
`

const MontereyPage = props => {
  return (
    <BackgroundImage
      fluid={props.data.montereyBackground.childImageSharp.fluid}
    >
      <Layout location={props.location}>
        <MontereyData title="Monterey Big Sur Theme - " />
        <Wrapper>
          <FullView>
            <CenterContainer>
              <IconContainer>
                <IconImage
                  fluid={props.data.finder.childImageSharp.fluid}
                  alt=""
                />
                <IconImage
                  fluid={props.data.safari.childImageSharp.fluid}
                  alt=""
                />
                <IconImage
                  fluid={props.data.messages.childImageSharp.fluid}
                  alt=""
                />
              </IconContainer>
              <MontereyText>Monterey</MontereyText>
              <IconContainer>
                <IconImage
                  fluid={props.data.xcode.childImageSharp.fluid}
                  alt=""
                />
                <IconImage
                  fluid={props.data.music.childImageSharp.fluid}
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
            <Twitter href="https://twitter.com/Gavmn">Twitter </Twitter> or{" "}
            <Gumroad href="https://gumroad.com/gnelsondesign">Gumroad </Gumroad>
            to be notified of release.
          </DetailText>
        </Wrapper>
      </Layout>
    </BackgroundImage>
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
    finder: file(relativePath: { eq: "monterey/Finder.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    safari: file(relativePath: { eq: "monterey/Safari.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    messages: file(relativePath: { eq: "monterey/Messages.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    music: file(relativePath: { eq: "monterey/Music.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    xcode: file(relativePath: { eq: "monterey/Xcode.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
