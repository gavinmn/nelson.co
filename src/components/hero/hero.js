import React from "react"
import "./hero.css"
import Logo from "../logo/logo"
import Contact from "../contact/contact"

const Hero = () => (
	<div className="animation-container">
		<div className= "hero-container">
			<Logo 
				id="logo"
			/>
			<p>Gavin Nelson is a <span className="blue-text"><strong>product </strong></span><span className="ampersand">&</span> <span className="blue-text"><strong>visual designer</strong></span> in the San Francisco Bay Area. He creates intuitive and clean user-centered design solutions with great attention to detail.<br></br><br></br>He is currently working as a Product Designer at wikiHow as well as on freelance projects.</p>
			<div className = "contact-links">
				<Contact
					class="email secondary-text link-text"
					href="mailto:gnelsondesign@gmail.com"
					link="Email"
				/>
				<Contact className = "dribbble"
					class="dribbble secondary-text link-text"
					href="https://dribbble.com/Gavin/"
					link="Dribbble"
				/>
				<Contact
					class="linkedin secondary-text link-text"
					href="https://www.linkedin.com/in/gavin-nelson/"
					link="LinkedIn"
				/>
			</div>
		</div>
	</div>
)

export default Hero