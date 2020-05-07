import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import ProjectInfo from "./projectinfo"


const ProjectLink = styled(Link)`
	&:hover > div {
		transform: scale(1.05);
		cursor:pointer;
	}
`

const Container = styled.div`
	margin-bottom: 4rem;
	display: grid;
	grid-template-columns: auto;
	align-items: start;
	transition: .2s ease-in-out;

	@media only screen and (min-width: 445px) {
		grid-template-columns: 50% 50%;
	}
`

const ProjectImage = styled(Img)`
	width: 100%;
	max-width: 285px;
	align-self: center;
	justify-self: center;

	@media only screen and (min-width: 445px) {
		margin-top: 0;
	}
`

const ProjectBG = styled.div`
	width: 100%;
	display: grid;
	max-width: 400;
	margin-top: 8px;
	align-self: center;
	justify-self: end;
	background-color: ${props => props.projectBg};
	border-radius: 16px;
	padding: 1rem 0;

	@media only screen and (min-width: 445px) {
		margin-top: 0;
	}
`

const CaseStudy = props => (
	// <ProjectLink to={props.link}>
		<Container>
			<ProjectInfo 
				logo={props.logo}
				title={props.title}
				subtitle={props.subtitle}
				date={props.date}
				link={props.link}
				text={props.buttontext}
				backgroundColor={props.buttonBgColor}
				hoverBG={props.buttonHoverBg}
				asA={props.buttonAsA}
				href={props.buttonHref}
			/>
			<ProjectBG projectBg={props.projectBg}>
				<ProjectImage fluid={props.image} alt="" />
			</ProjectBG>
		</Container>
	// </ProjectLink>	
)

export default CaseStudy

