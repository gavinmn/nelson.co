import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./casestudy.css"



const CaseStudy = props => (
	<Link to={props.link} id={props.linkid}>
		<div className="cs-container">
			<div className="cs-info-container">
				<Img fluid={props.logo} className="cs-logo" alt="" />
				<p className="cs-title headline-text">{props.title}</p>
				<p className="cs-description secondary-text">{props.subtitle}</p>
				<p className="cs-date secondary-text"><i>{props.date}</i></p>
			</div>
			<Img fluid={props.image} className="cs-img" alt="" />
		</div>
	</Link>	
)

export default CaseStudy

