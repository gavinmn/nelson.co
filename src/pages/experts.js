import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectInfoText from "../components/projectinfotext"

const expertsPage = (props) => (
  <Layout>
    <SEO title="Expert Profiles" />
    <div className="animation-fade">
	    <div className="portfolio-content-container">
		    <div className="small-width-container">
			    <ProjectInfoText
			    	title="wikiHow Expert Profiles"
					subtitle="Product and Visual Design"
					date="Summer 2018" 
				/>
			</div>

			
	    </div>
    </div>
  </Layout>
)

export default expertsPage

export const ImageQuery = graphql`
	query {
	  headerimage: file(relativePath: {eq: "chalk/headerimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:1632) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
    }
`
