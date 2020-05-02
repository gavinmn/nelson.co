import React from "react"
import styled from "styled-components"
import Secondary from "./secondary"
import { device } from "./device"

const Info = styled.p`
	margin-left: .5rem;
	color: #1d1d1f;
	line-height: 1.25;


	@media ${device.mobile} {
		margin-left: 0;
	}
`

const ProjectInfoText = props => (
	<div>
		<Info><strong>{props.title}</strong></Info>
		<Info><Secondary>{props.subtitle}</Secondary></Info>
		<Info><Secondary><i>{props.date}</i></Secondary></Info>
	</div>
)

export default ProjectInfoText

