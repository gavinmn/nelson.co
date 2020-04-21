import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import CaseStudy from "../components/casestudy/CaseStudy"


const IndexPage = (props) => (
  <Layout>

    <SEO title="About" />

    <Hero />
    <a id="work"></a>
    <div className="animation-container">
	    <CaseStudy 
			link="/chalk"
			logo={props.data.chalkLogo.childImageSharp.fluid}
			title="Chalk"
			subtitle="Interaction and Visual Design"
			date="Summer 2019"
			image={props.data.chalkIntro.childImageSharp.fluid}
		/>

		<CaseStudy 
			link=""
			logo={props.data.expertsLogo.childImageSharp.fluid}
			title="wikiHow Expert Profiles"
			subtitle="Product and Visual Design"
			date="Summer 2018"
			image={props.data.expertsIntro.childImageSharp.fluid}
		/>

		<CaseStudy 
			link=""
			logo={props.data.slapdashLogo.childImageSharp.fluid}
			title="Slapdash"
			subtitle="Brand Design"
			date="Fall 2019"
			image={props.data.slapdashIntro.childImageSharp.fluid}
		/>

		<CaseStudy 
			link=""
			logo={props.data.carabinerLogo.childImageSharp.fluid}
			title="Spring Gate Carabiner"
			subtitle="Industrial Design and Prototyping"
			date="Spring 2016"
			image={props.data.carabinerIntro.childImageSharp.fluid}
		/>
	</div>
  </Layout>
)

export default IndexPage

export const ImageQuery = graphql`
	query {
	  chalkLogo: file(relativePath: {eq: "chalk/chalklogo.png"}) {
	    childImageSharp {
	      fluid (maxWidth:256) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  chalkIntro: file(relativePath: {eq: "chalk/chalkintro.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  expertsLogo: file(relativePath: {eq: "expert/expertslogo.png"}) {
	    childImageSharp {
	      fluid (maxWidth:256) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  expertsIntro: file(relativePath: {eq: "expert/expertsintro.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  slapdashLogo: file(relativePath: {eq: "slapdash/slapdashlogo.png"}) {
	    childImageSharp {
	      fluid (maxWidth:256) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  slapdashIntro: file(relativePath: {eq: "slapdash/slapdashintro.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  carabinerLogo: file(relativePath: {eq: "carabiner/carabinerlogo.png"}) {
	    childImageSharp {
	      fluid (maxWidth:256) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  carabinerIntro: file(relativePath: {eq: "carabiner/carabinerintro.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	}
`