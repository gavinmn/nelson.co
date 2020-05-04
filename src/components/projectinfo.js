import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import ProjectInfoText from "./projectinfotext"

const Container = styled.p`
	@media only screen and (min-width: 445px) {
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