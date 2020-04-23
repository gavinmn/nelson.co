import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import ProjectInfo from "../projectinfo/projectinfo"
import "./casestudy.css"

const CaseStudy = props => (
	<Link to={props.link} id={props.linkid}>
		<div className="cs-container">
			<ProjectInfo 
				logo={props.logo}
				title={props.title}
				subtitle={props.subtitle}
				date={props.date}
			/>
			<Img fluid={props.image} className="cs-img" alt="" />
		</div>
	</Link>	
)

export default CaseStudy

