import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import ProjectInfo from "./projectinfo"
import { useStaticQuery, graphql } from "gatsby"

const ProjectLink = styled(Link)`
  &:hover > div {
    transform: scale(1.05);
    cursor: pointer;
  }
`

const Container = styled.div`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: auto;
  align-items: start;
  transition: 0.2s ease-in-out;

  @media only screen and (min-width: 445px) {
    grid-template-columns: 50% 50%;
  }
`

const ChalkImage = styled(Img)`
  width: 88%;
  max-width: 285px;
  align-self: center;
  justify-self: center;

  @media only screen and (min-width: 445px) {
    margin-top: 0;
  }
`

const ExpertsImage = styled(Img)`
  width: 88%;
  max-width: 384px;
  align-self: center;
  justify-self: end;

  @media only screen and (min-width: 445px) {
    margin-top: 0;
  }
`

const ProjectBG = styled.div`
  width: 100%;
  display: grid;
  max-width: 400;
  margin-top: 8px;
  align-self: center;
  justify-self: end;
  background-color: ${props => props.projectBg};
  border-radius: 16px;
  padding: 1rem 0;

  @media only screen and (min-width: 445px) {
    margin-top: 0;
  }
`

const CaseStudy = props => {
  const images = useStaticQuery(graphql`
    query {
      chalkLogo: file(relativePath: { eq: "chalk/chalklogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chalkIntro: file(relativePath: { eq: "chalk/chalkintro.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      expertsLogo: file(relativePath: { eq: "expert/expertslogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      expertsIntro: file(relativePath: { eq: "expert/expertsintro.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <ProjectInfo
          logo={images.chalkLogo.childImageSharp.fluid}
          title="Chalk"
          subtitle="Interaction and Visual Design"
          date="Summer 2019"
          link="/chalk"
          text="Read case study"
          backgroundColor="var(--chalk-button)"
          hoverBG="#4098FF"
          asA=""
          href=""
        />
        <ProjectBG projectBg="var(--chalk-button)">
          <ChalkImage fluid={images.chalkIntro.childImageSharp.fluid} alt="" />
        </ProjectBG>
      </Container>
      <Container>
        <ProjectInfo
          logo={images.expertsLogo.childImageSharp.fluid}
          title="wikiHow Expert Profiles"
          subtitle="Product and Visual Design"
          date="Summer 2018"
          link="/experts"
          text="Read case study"
          backgroundColor="var(--experts-button)"
          hoverBG="#88CF4D"
          asA=""
          href=""
        />
        <ProjectBG projectBg="var(--experts-button)">
          <ExpertsImage
            fluid={images.expertsIntro.childImageSharp.fluid}
            alt=""
          />
        </ProjectBG>
      </Container>
    </>
  )
}

export default CaseStudy
