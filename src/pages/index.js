import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CaseStudy from "../components/casestudy"
import ProjectInfo from "../components/projectinfo"
import Shot from "../components/shot"
import "./fonts.css"


const SampleGrid = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-gap:16px;
	margin-bottom: 4rem;

	@media only screen and (min-width: 445px) {
		grid-template-columns: 49.01960784% 49.01960784%;
	}
`


const IndexPage = props => {

	return (
		<Layout location={props.location}>

	    <SEO title="About" />

	    <Hero />
	    <a id="work"></a>
	    <CaseStudy 
			
			logo={props.data.chalkLogo.childImageSharp.fluid}
			title="Chalk"
			subtitle="Interaction and Visual Design"
			date="Summer 2019"
			image={props.data.chalkIntro.childImageSharp.fluid}
			link="/chalk"
			buttontext="Read case study"
			buttonBgColor="rgba(64,152,255,0.10)"
			buttonHoverBg="#4098FF"
			buttonAsA=""
			buttonHref=""
		/>

		<CaseStudy 
			link="experts"
			logo={props.data.expertsLogo.childImageSharp.fluid}
			title="wikiHow Expert Profiles"
			subtitle="Product and Visual Design"
			date="Summer 2018"
			image={props.data.expertsIntro.childImageSharp.fluid}
			link="/experts"
			buttontext="Read case study"
			buttonBgColor="rgba(136,207,77,0.15)"
			buttonHoverBg="#88CF4D"
			buttonAsA=""
			buttonHref=""
		/>

		<SampleGrid>
			<ProjectInfo 
				logo={props.data.visualLogo.childImageSharp.fluid}
				title="Visual Design Sample"
				subtitle="Client and Personal Work"
				date="2014 - 2020"
				text="View more"
				asA="a"
				href="https://dribbble.com/Gavin/"
			/>

			<Shot 
				image={props.data.designIcons.childImageSharp.fluid}
			/>
			<Shot 
				image={props.data.devIcons.childImageSharp.fluid}
			/>
			<Shot 
				image={props.data.mailIcons.childImageSharp.fluid}
			/>
			<Shot 
				image={props.data.Swatches.childImageSharp.fluid}
			/>
			<Shot 
				image={props.data.finderWindows.childImageSharp.fluid}
			/>
			<Shot 
				image={props.data.wh1.childImageSharp.fluid}
			/>
			<Shot 
				image={props.data.wh2.childImageSharp.fluid}
			/>
		</SampleGrid>

		<SampleGrid>
			<ProjectInfo 
				logo={props.data.illusLogo.childImageSharp.fluid}
				title="Illustration Design Sample"
				subtitle="Client and Personal Work"
				date="2018 - 2020"
				text="View more"
				asA="a"
				href="https://dribbble.com/Gavin/"
			/>

			<Shot 
				image={props.data.avatar.childImageSharp.fluid}
			/>
			<Shot 
				image={props.data.peace.childImageSharp.fluid}
			/>
			<Shot 
				image={props.data.shaka.childImageSharp.fluid}
			/>
			<Shot 
				image={props.data.draw.childImageSharp.fluid}
			/>
		</SampleGrid>

	  </Layout>
	) 
}

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
	  visualLogo: file(relativePath: {eq: "visual/visuallogo.png"}) {
	    childImageSharp {
	      fluid (maxWidth:256) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  designIcons: file(relativePath: {eq: "visual/designicons.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  devIcons: file(relativePath: {eq: "visual/devicons.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  mailIcons: file(relativePath: {eq: "visual/mailicons.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  Swatches: file(relativePath: {eq: "visual/swatches.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  finderWindows: file(relativePath: {eq: "visual/finderwindows.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  wh1: file(relativePath: {eq: "visual/whicons.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  wh2: file(relativePath: {eq: "visual/whicons2.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  illusLogo: file(relativePath: {eq: "illus/illuslogo.png"}) {
	    childImageSharp {
	      fluid (maxWidth:256) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  avatar: file(relativePath: {eq: "illus/avatar.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  peace: file(relativePath: {eq: "illus/peace.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  shaka: file(relativePath: {eq: "illus/shaka.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  draw: file(relativePath: {eq: "illus/draw.png"}) {
	    childImageSharp {
	      fluid (maxWidth:800) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },


	}
`