import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import MontereyData from "../components/montereydata"
import { device } from "../components/device"
import Wrapper from "../components/wrapper"
import MontereyButton from "../components/montereybutton"
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
  max-width: 564px;
  display: flex;
  justify-content: center;
`

const IconImage = styled(Img)`
  width: 100%;
  pointer-events: none;
`
const AllIcons = styled(Img)`
  margin-top: 2rem;
  width: 100%;
  pointer-events: none;
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

const ButtonContainer = styled.div`
  margin-top: 2rem;
`
const DetailHeader = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  max-width: 630px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const DetailText = styled.p`
  color: #ffffff;
  margin: 2rem auto 4rem auto;
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
                  fluid={props.data.icons1.childImageSharp.fluid}
                  alt=""
                />
              </IconContainer>
              <MontereyText>Monterey</MontereyText>
              <IconContainer>
                <IconImage
                  fluid={props.data.icons2.childImageSharp.fluid}
                  alt=""
                />
              </IconContainer>
            </CenterContainer>
            <DescriptionText>A macOS Big Sur icon theme</DescriptionText>
          </FullView>
          <AllIcons fluid={props.data.allicons.childImageSharp.fluid} alt="" />
          <ButtonContainer>
            <MontereyButton
              text="Get Icons"
              href="https://gumroad.com/l/dvctd"
              color="#ffffff"
              hoverBG="var(--color-monterey-secondary)"
            />
          </ButtonContainer>
          {/* <DetailHeader>Coming Soon</DetailHeader> */}
          <DetailText>
            Follow Gavin on{" "}
            <Twitter href="https://twitter.com/Gavmn">Twitter </Twitter> or{" "}
            <Gumroad href="https://gumroad.com/gnelsondesign">Gumroad </Gumroad>
            for future updates.
          </DetailText>
        </Wrapper>
      </Layout>
    </BackgroundImage>
  )
}

export default MontereyPage

export const ImageQuery = graphql`
  query {
    montereyBackground: file(
      relativePath: { eq: "monterey/montereybackground.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 6016) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icons1: file(relativePath: { eq: "monterey/icon1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1128) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icons2: file(relativePath: { eq: "monterey/icon2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1128) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allicons: file(relativePath: { eq: "monterey/allicons.png" }) {
      childImageSharp {
        fluid(maxWidth: 2272) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
