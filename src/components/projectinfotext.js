import React from "react"
import styled from "styled-components"
import Secondary from "./secondary"
import { device } from "./device"


const Info = styled.p`
	color: #1d1d1f;
	line-height: 1.25;
`

const ProjectInfoText = props => (
	<div>
		<h1>{props.title}</h1>
		<Info><Secondary>{props.subtitle}</Secondary></Info>
		<Info><Secondary><i>{props.date}</i></Secondary></Info>
	</div>
)

export default ProjectInfoText

