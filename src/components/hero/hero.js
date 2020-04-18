import React from "react"
import "./hero.css"

import Logo from "../../svg/logo.svg"

const Hero = () => (
	<div className= "hero-container">
		<Logo />
		<p>Gavin Nelson is a product & visual designer in the San Francisco Bay Area. He creates intuitive and clean user-centered design solutions with great attention to detail. He is currently working as a Product Designer at wikiHow as well as on freelance projects.</p>
		<div className = "contact-links">
			<a href="mailto:gnelsondesign@gmail.com" className = "email">Email</a>
			<a href="https://dribbble.com/Gavin/" className = "dribbble">Dribbble</a>
			<a href="https://www.linkedin.com/in/gavin-nelson/" className = "linkedin">LinkedIn</a>
		</div>
	</div>
)

export default Hero