import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CaseStudy from "../components/casestudy"
import ProjectInfo from "../components/projectinfo"
import Shot from "../components/shot"
import Wrapper from "../components/wrapper"
import { device } from "../components/device"

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

const SampleGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 16px;
  margin-bottom: 4rem;

  @media only screen and (min-width: 445px) {
    grid-template-columns: 49.01960784% 49.01960784%;
  }
`

const IndexPage = props => {
  return (
    <Layout location={props.location}>
      <SEO title=" " />
      <Wrapper>
        <HeroContainer>
          <Hero />
        </HeroContainer>

        <a id="work"></a>
        <CaseStudy />

        <SampleGrid>
          <ProjectInfo
            logo="/../images/visual/visuallogo.png"
            title="Visual Design Sample"
            subtitle="Client and Personal Work"
            date="2014 - 2020"
            text="View more"
            asA="a"
            href="https://dribbble.com/Gavin/"
            target="blank"
            rel="noopener noreferrer"
          />

          <Shot image="/../images/visual/blendergrapher.png" />
          <Shot image="/../images/visual/fitbodapollo.png" />
          <Shot image="/../images/visual/designicons.png" />
          <Shot image="/../images/visual/devicons.png" />
          <Shot image="/../images/visual/mailicons.png" />
        </SampleGrid>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
