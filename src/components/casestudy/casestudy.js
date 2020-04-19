import React from "react"
import { Link } from "gatsby"
import "./casestudy.css"



const CaseStudy = props => (
	<Link to={props.link}>
		<div className="cs-info-container">
			<img src={props.logo} className="cs-logo" />
			<p className="cs-title headline-text">{props.title}</p>
			<p className="cs-description secondary-text">{props.subtitle}</p>
			<p className="cs-date secondary-text"><i>{props.date}</i></p>
		</div>
		<img src={props.image} className="cs-img" />
	</Link>
)

export default CaseStudy