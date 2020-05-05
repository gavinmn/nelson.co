import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import ProjectInfoText from "./projectinfotext"
import ButtonPrimary from "./buttonprimary"

const Container = styled.div`
	display: grid;
	align-items: center;
	grid-gap: 16px;
	grid-template-columns: 3rem auto;
	grid-template-rows: auto auto;

	@media only screen and (min-width: 445px) {
		align-self: center;
	}
`

const Logo = styled(Img)`
	grid-column: 1;
	align-self: center;
	width: 3rem;
	height: 3rem;
`

const InfoContainer = styled.div`
	grid-column: 2;
	align-self: center;
`

const ButtonContainer = styled.div`
	grid-column: span 2;
`

const ProjectInfo = props => (
	<Container>
		<Logo fluid={props.logo} alt="" />
		<InfoContainer>
			<ProjectInfoText
				title={props.title}
				subtitle={props.subtitle}
				date={props.date}
			/>
		</InfoContainer>
		<ButtonContainer>
			<ButtonPrimary 
				link={props.butotnlink}
				text={props.buttontext}
			/>
		</ButtonContainer>
	</Container>
)

export default ProjectInfo