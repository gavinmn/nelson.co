import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Shot from "../components/shot"
import Wrapper from "../components/wrapper"
import { device } from "../components/device"
import Image from "next/image"
import ProjectInfoText from "../components/projectinfotext"
import ButtonInternal from "../components/buttoninternal"
import ButtonExternal from "../components/buttonexternal"
import Card from "../components/card"

const HeroContainer = styled.div`
  margin-top: -1rem;
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media ${device.desktop} {
    margin-top: 1rem;
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 16px;
  margin-bottom: 4rem;

  @media ${device.desktop} {
    grid-template-columns: 49.01960784% 49.01960784%;
  }
`

const IndexPage = props => {
  return (
    <Layout>
      <SEO title=" " />
      <Wrapper>
        <HeroContainer>
          <Hero />
        </HeroContainer>

        <a aria-label="Work" id="work" href="/#work"></a>

        <CardGrid>
          <Card
            width="single"
            imageSrc="/images/index/chalkimage.png"
            imageWidth="326"
            imageHeight="294"
            title="Chalk"
            subtitle="Interaction and Visual Design"
            time="Summer 2019"
          ></Card>
          <Card
            width="single"
            imageSrc="/images/index/chalkimage.png"
            imageWidth="326"
            imageHeight="294"
            title="Chalk"
            subtitle="Interaction and Visual Design"
            time="Summer 2019"
          ></Card>
          <Card
            width="double"
            imageSrc="/images/index/montereyimage.png"
            imageWidth="816"
            imageHeight="294"
            title="Chalk"
            subtitle="Interaction and Visual Design"
            time="Summer 2019"
          ></Card>
        </CardGrid>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
