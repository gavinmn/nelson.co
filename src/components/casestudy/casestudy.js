import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "./casestudy.css"



const CaseStudy = props => (
	<Link to={props.link}>
		<div className="cs-info-container">
			<img src={props.logo} className="cs-logo" />
			<p className="cs-title headline-text">{props.title}</p>
			<p className="cs-description secondary-text">{props.subtitle}</p>
			<p className="cs-date secondary-text"><i>{props.date}</i></p>
		</div>
		<img src={props.image} className="cs-img" alt=""/>
	</Link>
)

export default CaseStudy

export const query = graphql`
	query MyQuery {
	  file(relativePath: {eq: "chalk/chalkintro.png"}) {
	    childImageSharp {
	      fluid (maxWidth:400) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
	}
`