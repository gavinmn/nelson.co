import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "./device"
import ProjectInfoText from "./projectinfotext"
import ButtonPrimary from "./buttonprimary"

const Container = styled.div`
	@media only screen and (min-width: 445px) {
		align-self: center;
	}
`

const Logo = styled(Img)`
	margin-bottom: .5rem;
	width: 4rem;
	height: 4rem;

	@media ${device.desktop} {
		width: 2rem;
		height: 2rem;
	}

`

const ButtonContainer = styled.div`
	margin: 1rem 0;

	@media ${device.desktop} {
		margin-bottom: 0;
	}
`

const ProjectInfo = props => (
	<Container>
		<Logo fluid={props.logo} alt="" />
		<ProjectInfoText
			title={props.title}
			subtitle={props.subtitle}
			date={props.date}
		/>
		<ButtonContainer>
			<ButtonPrimary 
				asA={props.asA}
				href={props.href}
				link={props.link}
				text={props.text}
				color={props.backgroundColor}
				hoverBackground={props.hoverBG}
			/>
		</ButtonContainer>
	</Container>
)

export default ProjectInfo