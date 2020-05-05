import React from "react"
import styled from "styled-components"
import Logo from "./logo/logo"
import Fade from "./fade"
import { device } from "./device"
import Highlight from "./highlight"
import StyledLink from "./styledlink"

const HeroContainer = styled.div`
	margin-top: 12rem;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: [1] auto [2] auto [3] auto [end];
	align-items: start;

	@media ${device.desktop} {
		grid-template-columns: [left] 38% [right] auto;
		grid-template-rows: [1] auto [2] auto [end];
		max-width: 816px;
	}
`

const StyledLogo = styled(Logo)` 
		justify-self: start;

	@media ${device.desktop} {
		margin-right: 32px;
	}
`

const HeroText = styled.p`
	margin-top: 2rem;
	max-width: 506px;

	@media ${device.desktop} {
		margin-top: 0;
		justify-self: end;
	}
`

const LinkContainer = styled.div`
	display: flex;
	flex-direction:row;
	max-width:100%;
	justify-content: space-between;
	margin-top: 1rem;
	margin-bottom: 8rem;
	grid-row: 3;

	@media only screen and (min-width: 445px) {
		justify-content: start;
	}

	@media ${device.desktop} {
		margin-top: .75rem;
		grid-row: 2;
		grid-column: right;
	}
`

const Email = styled(StyledLink)`

`
const Dribbble = styled(StyledLink)`
	&:hover {
		color: #EA4C89;
		background: rgba(234,76,137,0.10);
	}

	@media only screen and (min-width: 445px) {
		margin-left: 1.5rem;
	}
`
const LinkedIn = styled(StyledLink)`
	&:hover {
		color: #0A66C2;
		background: rgba(10,102,194,0.10);
	}

	@media only screen and (min-width: 445px) {
		margin-left: 1.5rem;
	}
`
const GitHub = styled(StyledLink)`
	&:hover {
		color: #24292E;
		background: rgba(36,41,46,0.10);
	}

	@media only screen and (min-width: 445px) {
		margin-left: 1.5rem;
	}
`

const Hero = () => (
	<Fade>
		<HeroContainer>
			<StyledLogo/>
				<HeroText>Gavin Nelson is a <Highlight><strong>product & visual designer</strong></Highlight> in the San Francisco Bay Area. He creates intuitive and clean human-centered design solutions with great attention to detail.<br></br><br></br>He is currently working as a Product Designer at wikiHow as well as on freelance projects.
				</HeroText>
				<LinkContainer>
					<Email href="mailto:gnelsondesign@gmail.com">Email</Email>
					<LinkedIn href="https://www.linkedin.com/in/gavin-nelson/">LinkedIn</LinkedIn>
					<Dribbble href="https://dribbble.com/Gavin/">Dribbble</Dribbble>
					<GitHub href="https://github.com/gavinmn">GitHub</GitHub>
				</LinkContainer>
		</HeroContainer>
	</Fade>
)

export default Hero