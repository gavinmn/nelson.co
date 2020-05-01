import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { device } from "./device"
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

	@media ${device.mobile} {
		.cs-container {
			grid-template-columns: 50% 50%;
		}
	}
`

const ProjectImage = styled(Img)`
	width: 100%;
	max-width: 400px;
	margin-top: 8px;
	align-self: center;
	justify-self: end;

	@media ${device.mobile} {
		margin-top: 0;
	}
`

const CaseStudy = props => (
	<ProjectLink to={props.link}>
		<Container>
			<ProjectInfo 
				logo={props.logo}
				title={props.title}
				subtitle={props.subtitle}
				date={props.date}
			/>
			<ProjectImage fluid={props.image} alt="" />
		</Container>
	</ProjectLink>	
)

export default CaseStudy

