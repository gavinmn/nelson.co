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

// export const PageQuery = graphql`
//   query {
//     chalkLogo: file(relativePath: { eq: "chalk/chalklogo.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 128) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     chalkIntro: file(relativePath: { eq: "chalk/chalkintro.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     expertsLogo: file(relativePath: { eq: "expert/expertslogo.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 128) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     expertsIntro: file(relativePath: { eq: "expert/expertsintro.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     visualLogo: file(relativePath: { eq: "visual/visuallogo.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 128) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     designIcons: file(relativePath: { eq: "visual/designicons.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     devIcons: file(relativePath: { eq: "visual/devicons.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     mailIcons: file(relativePath: { eq: "visual/mailicons.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     Swatches: file(relativePath: { eq: "visual/swatches.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     finderWindows: file(relativePath: { eq: "visual/finderwindows.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     wh1: file(relativePath: { eq: "visual/whicons.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     wh2: file(relativePath: { eq: "visual/whicons2.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     blendergrapher: file(relativePath: { eq: "visual/blendergrapher.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     fitbodapollo: file(relativePath: { eq: "visual/fitbodapollo.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     illusLogo: file(relativePath: { eq: "illus/illuslogo.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 128) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     avatar: file(relativePath: { eq: "illus/avatar.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     peace: file(relativePath: { eq: "illus/peace.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     shaka: file(relativePath: { eq: "illus/shaka.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     draw: file(relativePath: { eq: "illus/draw.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `
