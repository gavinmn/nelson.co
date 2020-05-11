import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ProjectInfoText from "../components/projectinfotext"
import FullWidthImage from "../components/fullwidthimage"
import HalfWidthImage from "../components/halfwidthimage"
import Fade from "../components/fade"
import PortfolioContainer from "../components/portfoliocontainer"
import SmallWrapper from "../components/smallwrapper"
import StyledLink from "../components/styledlink"
import { device } from "../components/device"

import togglemovie from "../images/expert/togglemovie.mp4"
import prototypemovie from "../images/expert/prototypemovie.mp4"

const SingleVideoContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;

  @media ${device.desktop} {
    margin: 1rem auto;
  }
`
const SingleVideo = styled.video`
  max-width: 375px;

  @media ${device.desktop} {
    max-width: 816px;
  }
`

const expertsPage = props => (
  <Layout location={props.location}>
    <SEO title="Expert Profiles - " />
    <Fade>
      <PortfolioContainer>
        <SmallWrapper>
          <ProjectInfoText
            title="wikiHow Expert Profiles"
            subtitle="Product and Visual Design"
            date="Summer 2018"
          />
        </SmallWrapper>

        <FullWidthImage
          fluid={props.data.headerimage.childImageSharp.fluid}
          alt=""
        />

        <SmallWrapper>
          <h3>Project</h3>
          <p>
            I was assigned to this project as the sole product designer in the
            summer of 2018 at wikiHow. The project focused on designing an
            entirely new suite of pages (responsive web) to house credentials
            for our 500+ expert verifiers.
          </p>

          <HalfWidthImage
            fluid={props.data.projectimage.childImageSharp.fluid}
            alt=""
          />

          <h3>Role</h3>
          <p>
            The team for this project was comprised wikiHow's CEO acting as the
            primary product manager, the in house Experts Team, an engineer, and
            myself in the role of Product Designer.{" "}
          </p>

          <HalfWidthImage
            fluid={props.data.teamimage.childImageSharp.fluid}
            alt=""
          />

          <p>
            I was responsible for design ideation, iteration, prototyping, and
            high fidelity mockups throughout all stages of the project.
          </p>

          <br></br>

          <h3>Problem</h3>
          <p>
            Through community feedback, the wikiHow team learned that the expert
            verified badges on our articles were not cutting it in terms of
            providing assurance that the user could place faith in the badge and
            trust the verified content.
          </p>

          <HalfWidthImage
            fluid={props.data.problemimage.childImageSharp.fluid}
            alt=""
          />

          <p>
            The badge only linked the user to an index of experts, with no
            wikiHow page showcasing their credentials.
          </p>

          <br></br>

          <h3>Goal</h3>
          <p>
            The goal of this project was to increase the authority and
            trustworthiness of the "expert verified" seal of approval on our
            verified articles.
          </p>

          <HalfWidthImage
            fluid={props.data.goalimage.childImageSharp.fluid}
            alt=""
          />

          <h3>Stakeholder Constraints</h3>
          <p>
            There were many stakeholder constraints in this project that came
            together to shape many of the final design decisions. Primarily, my
            designs had to account for an engineering team with low bandwidth.
            To ease use of engineering resources, I had to repurpose many
            components from across wikiHow and stick to pre built wikiHow
            technologies to build this new custom page.
          </p>

          <HalfWidthImage
            fluid={props.data.stakeholderimage.childImageSharp.fluid}
            alt=""
          />

          <p>
            In addition to engineering constraints, I also had to account for
            the Experts team, and design a system that would accommodate them
            having to manually fill all data.
          </p>

          <br></br>

          <h3>Solution</h3>
          <p>
            My final designs focus on authority by providing details about the
            expert in a resume style format.
          </p>
        </SmallWrapper>

        <FullWidthImage
          fluid={props.data.solutionimage1.childImageSharp.fluid}
          alt=""
        />

        <SmallWrapper>
          <p>
            At the top, I created a header with the experts name, photo, and job
            title to create visual consistency with the verification badge.
          </p>
          <HalfWidthImage
            fluid={props.data.solutionimage2.childImageSharp.fluid}
            alt=""
          />
          <p>
            Below this there are three specifically editable sections (“wikiText
            areas”) designed to ease engineering resources. These sections were
            made editable by using the same backend editing that the rest of our
            site uses.
          </p>
          <HalfWidthImage
            fluid={props.data.solutionimage3.childImageSharp.fluid}
            alt=""
          />
          <p>
            This allowed more flexibility in editing for the Experts team and
            less custom engineering from the developers. A tradeoff of using
            these sections however was the limited text formatting that came
            with it.
          </p>
          <br></br>
          <p>
            To help ease the load the Experts team who would be responsible for
            compiling the information of 500+ experts, the bio section was
            placed at the top of the page, and a toggle was added to show or
            hide the two sections below.
          </p>

          <SingleVideoContainer>
            <SingleVideo width="816" playsInline autoPlay muted loop>
              <source src={togglemovie} type="video/mp4" />
            </SingleVideo>
          </SingleVideoContainer>

          <p>
            The bio section was the only consistent piece of information that
            the Experts team had. Displaying this section first and letting the
            team to toggle the Experiences and Education section allowed us to
            launch the pages without large gaps of missing information as this
            would largely defeat our goal. As the experts team acquired
            experience and education details, this information could be
            seamlessly added to the pages.
          </p>
          <br></br>
          <p>
            Below the bio section lives the Experience and
            Education/Achievements sections mentioned above. My final solution
            included a toggle so that the experts team could switch this right
            hand column between Education and Achievements, depending upon the
            expert.{" "}
          </p>
        </SmallWrapper>

        <FullWidthImage
          fluid={props.data.solutionimage4.childImageSharp.fluid}
          alt=""
        />

        <SmallWrapper>
          <p>
            Splitting the right hand section into either education or
            achievements was a data driven design decision - users reported that
            the sections that made the page most trustworthy to them depended
            upon the category of the expert. For example, when reading about a
            Legal Expert, users reported being interested in seeing where the
            expert went to law school, while when reading about a Guitar Expert,
            their achievements were reported to be more applicable.
          </p>

          <br></br>

          <h3>Context</h3>
          <p>
            To provide some context for the design process on this project -
            stakeholders at wikiHow generally like to see high fidelity
            iterations. Given wikiHow's design language and system, I will often
            jump quickly to a high fidelity stage and test and iterate from
            there.
          </p>
          <br></br>
          <p>
            In addition to plenty of stakeholder constraints mentioned above,
            wikiHow generally likes to move very quickly and often doesn't have
            much time for user research.
          </p>
          <br></br>
          <p>
            Regardless, I did a small bit of user outreach to gather some
            outside opinions on authority, trustworthiness, and verification and
            from there got started high fidelity iteration and prototyping.
          </p>
        </SmallWrapper>

        <FullWidthImage
          fluid={props.data.contextimage1.childImageSharp.fluid}
          alt=""
        />

        <SmallWrapper>
          <p>
            A stage of my iteration process that I greatly value and find vital
            in stakeholder communications is the prototyping stage. I made a few
            prototypes of things like a drop down expansion for the experts
            information and toggling sections on and off for design critiques to
            be able to illustrate more fleshed out ideas.{" "}
          </p>
        </SmallWrapper>
        <SingleVideoContainer>
          <SingleVideo width="320" playsInline autoPlay muted loop>
            <source src={prototypemovie} type="video/mp4" />
          </SingleVideo>
        </SingleVideoContainer>
        <SmallWrapper>
          <h3>Development</h3>
          <p>
            {" "}
            At the end of this iteration - critique - iteration process, I had a
            quick moment to validate design decisions with various company
            members uninvolved in the project, and from there I began
            collaborating with the engineering team to have the pages built.
          </p>
          <HalfWidthImage
            fluid={props.data.devimage.childImageSharp.fluid}
            alt=""
          />
          <p>
            Unfortunately I was unable to gather quantitative data on the pages
            success before they had to be temporarily removed due to a backend
            software update. Overall, this project was a great exercise in
            working within stakeholder constraints and being flexible.
          </p>
        </SmallWrapper>
      </PortfolioContainer>
    </Fade>
  </Layout>
)

export default expertsPage

export const ImageQuery = graphql`
  query {
    headerimage: file(relativePath: { eq: "expert/headerimage.png" }) {
      childImageSharp {
        fluid(maxWidth: 1632) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectimage: file(relativePath: { eq: "expert/projectimage.png" }) {
      childImageSharp {
        fluid(maxWidth: 888) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    teamimage: file(relativePath: { eq: "expert/teamimage.png" }) {
      childImageSharp {
        fluid(maxWidth: 888) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    problemimage: file(relativePath: { eq: "expert/problemimage.png" }) {
      childImageSharp {
        fluid(maxWidth: 888) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    goalimage: file(relativePath: { eq: "expert/goalimage.png" }) {
      childImageSharp {
        fluid(maxWidth: 888) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stakeholderimage: file(
      relativePath: { eq: "expert/stakeholderimage.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 888) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    solutionimage1: file(relativePath: { eq: "expert/solutionimage1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1632) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    solutionimage2: file(relativePath: { eq: "expert/solutionimage2.png" }) {
      childImageSharp {
        fluid(maxWidth: 888) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    solutionimage3: file(relativePath: { eq: "expert/solutionimage3.png" }) {
      childImageSharp {
        fluid(maxWidth: 888) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    solutionimage4: file(relativePath: { eq: "expert/solutionimage4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1632) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contextimage1: file(relativePath: { eq: "expert/contextimage1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1632) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    devimage: file(relativePath: { eq: "expert/devimage.png" }) {
      childImageSharp {
        fluid(maxWidth: 888) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
