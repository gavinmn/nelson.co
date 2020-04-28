import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/chalk.css"
import ProjectInfoData from "../components/projectinfodata/projectinfodata"
import CSText from "../components/cstext/cstext"
import CSHeader from "../components/csheader/csheader"
import chalkflow from "../images/chalk/chalkflow.mp4"

const chalkPage = (props) => (
  <Layout>
    <SEO title="Chalk" />
    <div className="animation-container">
	    <div className="portfolio-content-container">
		    <div className="small-width-container">
			    <ProjectInfoData
			    	title="Chalk"
					subtitle="Interaction and Visual Design"
					date="Summer 2019" 
				/>
			</div>

			<Img fluid={props.data.headerimage.childImageSharp.fluid} className="full-width-img" alt="" />

			<CSHeader 
				text="Project"
			/>
			<CSText 
				text="I worked with Chalk during the spring and summer of 2019 to design the core user experience and brand identity for their upcoming messaging iOS application."
			/>

			<Img fluid={props.data.projectimage.childImageSharp.fluid} className="half-width-img" alt="" />
			<CSHeader 
				text="Problem"
			/>
			<CSText 
				text="The core user experience was powerful but overly complicated, and the app lacked any branding and logo to tie everything together. I was brought on to solve the messaging and mode switching UX issue, and to create an identity for Chalk."
			/>
			<br></br>
			<CSHeader 
				text="Role"
			/>
			<CSText 
				text="I assumed the role of a freelance product designer for this challenge, often meeting in person and over the phone with one of the CEO's of Chalk as well as with their lead developer."
			/>

			<Img fluid={props.data.roleimage.childImageSharp.fluid} className="half-width-img" alt="" />

			<CSText 
				text="I was responsible for design ideation, iteration, prototyping, and high fidelity mockups throughout all stages of the project, and worked both in collaborative settings as well as on my own."
			/>
			<br></br>
			<CSHeader 
				text="Solution"
			/>
			<CSText 
				text="There are three core modes to Chalk's group chat functionality. A text mode where the app functions as any regular messaging service, a voice mode that can be entered to connect with your friends with direct voice communication, and a listen mode where you can hear your friends talking but your microphone is not turned on. "
			/>
			<div className="video-container">
				<Img fluid={props.data.iphonebezel.childImageSharp.fluid} className="bezel" alt="" />
				<video className="video" width="375" autoPlay muted loop>
	    			<source src={chalkflow} type="video/mp4" />
	  			</video>
  			</div>


	    </div>
    </div>

  </Layout>
)

export default chalkPage

export const ImageQuery = graphql`
	query {
	  headerimage: file(relativePath: {eq: "chalk/headerimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:1632) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  projectimage: file(relativePath: {eq: "chalk/projectimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  roleimage: file(relativePath: {eq: "chalk/roleimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	   iphonebezel: file(relativePath: {eq: "chalk/iphonebezel.png"}) {
	    childImageSharp {
	      fluid (maxWidth:750) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
	}
`
