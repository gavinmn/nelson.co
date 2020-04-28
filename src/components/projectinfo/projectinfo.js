import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import ProjectInfoData from "../projectinfodata/projectinfodata"
import "./projectinfo.css"

const ProjectInfo = props => (
	<div className="project-info-container">
		<Img fluid={props.logo} className="project-logo" alt="" />
		<ProjectInfoData 
			title={props.title}
			subtitle={props.subtitle}
			date={props.date}
		/>
	</div>
)

export default ProjectInfo

