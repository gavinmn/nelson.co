import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-component"
import ProjectInfoText from "./projectinfotext"
import { device } from "./device"

const Container = styled.p`
	@media ${device.mobile} {
		align-self: center;
	}
`

const Logo = styled(Img)`
	width: 4rem;
	height: 4rem;
	margin-bottom: .5rem;
`

const ProjectInfo = props => (
	<Container>
		<Logo fluid={props.logo} alt="" />
		<ProjectInfoText
			title={props.title}
			subtitle={props.subtitle}
			date={props.date}
		/>
	</Container>
)

export default ProjectInfo