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

	@media ${device.mobile} {
		grid-template-columns: [left] 38% [right] auto;
		grid-template-rows: [1] auto [2] auto [end];
		max-width: 816px;
	}
`

const StyledLogo = styled(Logo)` 
		justify-self: start;

	@media ${device.mobile} {
		margin-right: 32px;
	}
`

const HeroText = styled.p`
	margin-top: 2rem;
	max-width: 506px;

	@media ${device.mobile} {
		margin-top: 0;
		justify-self: end;
	}
`




const Hero = () => (
	<Fade>
		<HeroContainer>
			<StyledLogo/>
				<HeroText>Gavin Nelson is a <Highlight><strong>product & visual designer</strong></Highlight> in the San Francisco Bay Area. He creates intuitive and clean user-centered design solutions with great attention to detail.<br></br><br></br>He is currently working as a Product Designer at wikiHow as well as on freelance projects.
				</HeroText>
				<div className = "contact-links">
					<StyledLink href="mailto:gnelsondesign@gmail.com">Email</StyledLink>
					<StyledLink href="https://dribbble.com/Gavin/">Dribbble</StyledLink>
					<StyledLink href="https://www.linkedin.com/in/gavin-nelson/">LinkedIn</StyledLink>
				</div>
		</HeroContainer>
	</Fade>
		
)

export default Hero