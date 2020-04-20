// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"

// import CaseStudy from "../casestudy/CaseStudy"

// const CSGroup = props => {
// 	const data =useStaticQuery(graphql`
// 		query ChalkImgQuery {
// 		  chalkIntro: file(relativePath: {eq: "chalk/chalkintro.png"}) {
// 		    childImageSharp {
// 		      fluid (maxWidth:800) {
// 		        ...GatsbyImageSharpFluid
// 		      }
// 		    }
// 		  },
// 		  chalkLogo: file(relativePath: {eq: "chalk/chalklogo.png"}) {
// 		    childImageSharp {
// 		      fluid (maxWidth:256) {
// 		        ...GatsbyImageSharpFluid
// 		      }
// 		    }
// 		  }
// 		}
// 	`)

// 	return (
// 		<CaseStudy 
// 			link=""
// 			logo={data.chalkLogo.childImageSharp.fluid}
// 			title="Chalk"
// 			subtitle="Interaction and Visual Design"
// 			date="Summer 2019"
// 			image={data.chalkIntro.childImageSharp.fluid}
// 		/>
// 	)

// }

// export default CSGroup