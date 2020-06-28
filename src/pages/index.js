import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CaseStudy from "../components/casestudy"
import ProjectInfo from "../components/projectinfo"
import Shot from "../components/shot"
import Wrapper from "../components/wrapper"
import { device } from "../components/device"
import "./fonts.css"

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
    <Layout maxWidth={"816px"} location={props.location}>
      <SEO title=" " />
      <HeroContainer>
        <Hero />
      </HeroContainer>
      <Wrapper>
        <a id="work"></a>
        <CaseStudy />

        <SampleGrid>
          <ProjectInfo
            logo={props.data.visualLogo.childImageSharp.fluid}
            title="Visual Design Sample"
            subtitle="Client and Personal Work"
            date="2014 - 2020"
            text="View more"
            asA="a"
            href="https://dribbble.com/Gavin/"
          />

          <Shot image={props.data.designIcons.childImageSharp.fluid} />
          <Shot image={props.data.devIcons.childImageSharp.fluid} />
          <Shot image={props.data.mailIcons.childImageSharp.fluid} />
          <Shot image={props.data.Swatches.childImageSharp.fluid} />
          <Shot image={props.data.finderWindows.childImageSharp.fluid} />
          <Shot image={props.data.wh1.childImageSharp.fluid} />
          <Shot image={props.data.wh2.childImageSharp.fluid} />
        </SampleGrid>

        <SampleGrid>
          <ProjectInfo
            logo={props.data.illusLogo.childImageSharp.fluid}
            title="Illustration Design Sample"
            subtitle="Client and Personal Work"
            date="2018 - 2020"
            text="View more"
            asA="a"
            href="https://dribbble.com/Gavin/"
          />

          <Shot image={props.data.avatar.childImageSharp.fluid} />
          <Shot image={props.data.peace.childImageSharp.fluid} />
          <Shot image={props.data.shaka.childImageSharp.fluid} />
          <Shot image={props.data.draw.childImageSharp.fluid} />
        </SampleGrid>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const PageQuery = graphql`
  query {
    chalkLogo: file(relativePath: { eq: "chalk/chalklogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 128) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    chalkIntro: file(relativePath: { eq: "chalk/chalkintro.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    expertsLogo: file(relativePath: { eq: "expert/expertslogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 128) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    expertsIntro: file(relativePath: { eq: "expert/expertsintro.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    visualLogo: file(relativePath: { eq: "visual/visuallogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 128) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    designIcons: file(relativePath: { eq: "visual/designicons.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    devIcons: file(relativePath: { eq: "visual/devicons.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mailIcons: file(relativePath: { eq: "visual/mailicons.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Swatches: file(relativePath: { eq: "visual/swatches.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    finderWindows: file(relativePath: { eq: "visual/finderwindows.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wh1: file(relativePath: { eq: "visual/whicons.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wh2: file(relativePath: { eq: "visual/whicons2.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    illusLogo: file(relativePath: { eq: "illus/illuslogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 128) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    avatar: file(relativePath: { eq: "illus/avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    peace: file(relativePath: { eq: "illus/peace.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    shaka: file(relativePath: { eq: "illus/shaka.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    draw: file(relativePath: { eq: "illus/draw.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
