import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./projectinfo.css"

const ProjectInfo = props => (
	<div className="project-info-container">
		<Img fluid={props.logo} className="project-logo" alt="" />
		<p className="project-title headline-text">{props.title}</p>
		<p className="project-description secondary-text">{props.subtitle}</p>
		<p className="project-date secondary-text"><i>{props.date}</i></p>
	</div>
)

export default ProjectInfo

