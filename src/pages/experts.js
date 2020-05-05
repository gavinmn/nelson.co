import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ProjectInfoText from "../components/projectinfotext"
import FullWidthImage from "../components/fullwidthimage"
import HalfWidthImage from "../components/halfwidthimage"
import Fade from '../components/Fade'
import PortfolioContainer from "../components/PortfolioContainer"
import SmallWrapper from '../components/smallwrapper'
import StyledLink from '../components/StyledLink'
import { device } from '../components/device'

const expertsPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Expert Profiles" />
    <Fade>
	    <PortfolioContainer>
		    <SmallWrapper>
			    <ProjectInfoText
			    	title="wikiHow Expert Profiles"
					subtitle="Product and Visual Design"
					date="Summer 2018" 
				/>
			</SmallWrapper>

			<FullWidthImage fluid={props.data.headerimage.childImageSharp.fluid} alt="" />

			<SmallWrapper>
				<h3>Project</h3>
				<p>I was assigned to this project as the sole product designer in the summer of 2018 at wikiHow. The project focused on designing an entirely new suite of pages (responsive web) to house credentials for our 500+ expert verifiers.</p>

				<HalfWidthImage fluid={props.data.projectimage.childImageSharp.fluid} alt="" />

				<h3>Role</h3>
				<p>The team for this project was comprised wikiHow's CEO acting as the primary product manager, the in house Experts Team, an engineer, and myself in the role of Product Designer. </p>

				<HalfWidthImage fluid={props.data.teamimage.childImageSharp.fluid} alt="" />

				<p>I was responsible for design ideation, iteration, prototyping, and high fidelity mockups throughout all stages of the project.</p>

				<br></br>

				<h3>Problem</h3>
				<p>Through community feedback, the wikiHow team learned that the expert verified badges on our articles were not cutting it in terms of providing assurance that the user could place faith in the badge and trust the verified content.</p>

				<HalfWidthImage fluid={props.data.problemimage.childImageSharp.fluid} alt="" />

				<p>The badge only linked the user to an index of experts, with no wikiHow page showcasing their credentials.</p>

				<br></br>

				<h3>Goal</h3>
				<p>The goal of this project was to increase the authority and trustworthiness of the "expert verified" seal of approval on our verified articles.</p>

				<HalfWidthImage fluid={props.data.goalimage.childImageSharp.fluid} alt="" />

			</SmallWrapper>


		</PortfolioContainer>
	</Fade>
  </Layout>
)

export default expertsPage

export const ImageQuery = graphql`
	query {
	  headerimage: file(relativePath: {eq: "expert/headerimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:1632) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  projectimage: file(relativePath: {eq: "expert/projectimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  teamimage: file(relativePath: {eq: "expert/teamimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  problemimage: file(relativePath: {eq: "expert/problemimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  goalimage: file(relativePath: {eq: "expert/goalimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
    }
`
