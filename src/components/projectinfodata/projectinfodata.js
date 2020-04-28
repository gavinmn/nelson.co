import React from "react"
import "./projectinfodata.css"

const ProjectInfoData = props => (
	<div className="project-info-container">
		<p className="project-title headline-text">{props.title}</p>
		<p className="project-description secondary-text">{props.subtitle}</p>
		<p className="project-date secondary-text"><i>{props.date}</i></p>
	</div>
)

export default ProjectInfoData

