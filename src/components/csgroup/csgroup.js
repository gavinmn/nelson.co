import React from "react"
import "./csgroup.css"
import { useStaticQuery, graphql } from "gatsby"

import CaseStudy from "../casestudy/CaseStudy"
import chalkImage from "../../images/chalk/chalkintro.png"
import chalkLogo from "../../images/chalk/chalklogo.svg"

const CSGroup = props => (
	<div className = "csgroup-container">
		<CaseStudy 
			link=""
			logosrc=""
			title="Chalk"
			subtitle="Interaction and Visual Design"
			date="Summer 2019"
			image={chalkImage}
		/>

	</div>
)

export default CSGroup