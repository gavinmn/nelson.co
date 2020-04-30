import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import CaseStudy from "../components/casestudy/CaseStudy"
import ProjectInfo from "../components/projectinfo/projectinfo"
import Shot from "../components/shot/shot"
import "../styles/index.css"

const IndexPage = (props) => (
  <Layout>

    <SEO title="About" />

    <Hero />
    <a id="work"></a>
    <CaseStudy 
		link="chalk"
		logo={props.data.chalkLogo.childImageSharp.fluid}
		title="Chalk"
		subtitle="Interaction and Visual Design"
		date="Summer 2019"
		image={props.data.chalkIntro.childImageSharp.fluid}
	/>

	<CaseStudy 
		link="experts"
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

	<div className="sample-grid">
		<ProjectInfo 
			logo={props.data.visualLogo.childImageSharp.fluid}
			title="Visual Design Sample"
			subtitle="Client and Personal Work"
			date="2014 - 2020"
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
	</div>

	<div className="sample-grid">
		<ProjectInfo 
			logo={props.data.illusLogo.childImageSharp.fluid}
			title="Illustration Design Sample"
			subtitle="Client and Personal Work"
			date="2018 - 2020"
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