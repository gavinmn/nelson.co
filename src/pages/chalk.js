import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/chalk.css"
import ProjectInfoData from "../components/projectinfodata/projectinfodata"
import CSText from "../components/cstext/cstext"
import CSHeader from "../components/csheader/csheader"
import chalkflow from "../images/chalk/chalkflow.mp4"
import listenmode from "../images/chalk/listenmode.mp4"
import talkmode from "../images/chalk/talkmode.mp4"
import avatarswipe from "../images/chalk/avatarswipe.mp4"
import colorchange from "../images/chalk/colorchange.mp4"
import swipe1 from "../images/chalk/swipe1.mp4"
import swipe2 from "../images/chalk/swipe2.mp4"
import volumeslider from "../images/chalk/volumeslider.mp4"
import actionbutton from "../images/chalk/actionbutton.mp4"

const chalkPage = (props) => (
  <Layout>
    <SEO title="Chalk" />
    <div className="animation-fade">
	    <div className="portfolio-content-container">
		    <div className="small-width-container">
			    <ProjectInfoData
			    	title="Chalk"
					subtitle="Interaction and Visual Design"
					date="Summer 2019" 
				/>
			</div>

			<Img fluid={props.data.headerimage.childImageSharp.fluid} className="full-width-img" alt="" />

			<CSHeader 
				text="Project"
			/>
			<CSText 
				text="I worked with Chalk during the spring and summer of 2019 to design the core user experience for their upcoming iOS application over the course of roughly three months."
			/>

			<Img fluid={props.data.projectimage.childImageSharp.fluid} className="half-width-img" alt="" />
			<CSHeader 
				text="Role"
			/>
			<CSText 
				text="The team for this project was comprised of Chalk's Co-Founder/product manager, an iOS engineer, and myself - assuming the role of product designer."
			/>

			<Img fluid={props.data.roleimage.childImageSharp.fluid} className="half-width-img" alt="" />

			<CSText 
				text="I was responsible for design ideation, iteration, prototyping, and high fidelity mockups throughout all stages of the project, and worked both independently and with the team in their SF office."
			/>
			<br></br>
			<CSHeader 
				text="Problem"
			/>
			<CSText 
				text="The core messaging user experience was powerful but overly complicated, proving difficult for new users to learn and tricky for power users to control. This was something that Chalk found in their initial user testing, and I was able to confirm as I tried to understand the app."
			/>

			<Img fluid={props.data.problemimage.childImageSharp.fluid} className="half-width-img" alt="" />

			<CSHeader 
				text="Goal"
			/>
			<CSText 
				text="The goal of this project was to simplify and make this core user experience component more intuitive to learn and more efficient to control."
			/>
			<br></br>
			<CSHeader 
				text="Solution"
			/>
			<CSText 
				text="Chalk's value proposition was found in the three core modes of communication in the app."
			/>
			<Img fluid={props.data.solutionimage.childImageSharp.fluid} className="half-width-img" alt="" />

			<div className="small-width-container">
				<p> In <i>Text</i> mode, the app functions similarly to your standard messaging application. Users can send and receive text messages.<br></br><br></br>
	In <i>Listen</i> mode the user still sends text messages, but can hear their friends speaking via the phone's speaker or headphones.<br></br><br></br>
	In <i>Talk</i> mode the users microphone is on and they can communicate via voice for rapid fire group conversation.<br></br><br></br>
	In addition to these three modes, there is an <i>anchoring</i> setting that allows the user to lock the app in listen mode for a set period of time, even while in the background.<br></br><br></br>
	My final solution reworked the interaction model to feature a primary action button in the bottom left corner of the screen that served as a method of accessing the modes of communication.
				</p>
			</div>

			<div className="video-container">
				<Img fluid={props.data.iphonebezel.childImageSharp.fluid} className="bezel" alt="" />
				<video className="video" width="375" autoPlay muted loop>
	    			<source src={chalkflow} type="video/mp4" />
	  			</video>
  			</div>
  			<div className="small-width-container">
	  			<div className="caption-container">
		  			<a className="secondary-text link-text prototype-link" href="https://sketch.cloud/s/z5pO4/a/DOVAlW/play">View Interactive Prototype</a>
	  			</div>
  			</div>

  			<CSText 
				text="When a new mode is entered, a contextual button would appear next to the action button to let the user control settings specific to the current mode such as anchoring time in listen mode and muting in talk mode."
			/>

			<div className="multivideo-container">
				<video className="multivideo" autoPlay muted loop>
	    			<source src={listenmode} type="video/mp4" />
	  			</video>
				<video className="multivideo" autoPlay muted loop>
	    			<source src={talkmode} type="video/mp4" />
	  			</video>
  			</div>

  			<CSText 
				text="Other data driven details of the reworked UI/UX include rings around the group avatars to indicate other users’ active modes, colored message bubbles to further provide context on what mode the user is currently in, as well as a redesigned header to better comply with mobile design standards."
			/>

			<div className="multivideo-container">
				<video className="multivideo" autoPlay muted loop>
	    			<source src={avatarswipe} type="video/mp4" />
	  			</video>
				<video className="multivideo" autoPlay muted loop>
	    			<source src={colorchange} type="video/mp4" />
	  			</video>
  			</div>

  			<CSText 
				text="My design decisions were arrived at largely through qualitative user testing data and you can read more about my process below."
			/>
			<br></br>
			<CSHeader 
				text="Process"
			/>
			<CSText 
				text="Through discussions with Chalk, I learned that the most important user to design for was the late teenager/early 20 something group chat user who was always attached to their phone."
			/>
			<Img fluid={props.data.personaimage.childImageSharp.fluid} className="half-width-img" alt="" />

			<CSHeader 
				text="Ideation"
			/>
			<CSText 
				text="I began making some quick sketches with a “no idea is too crazy” type mindset and through discussions with Chalk, narrowed the ideas down to a more practical set."
			/>
			<Img fluid={props.data.sketchesimage.childImageSharp.fluid} className="full-width-img" alt="" />
			<CSText 
				text="The primary interaction models I would focus on from here were the action button model, full screen swipe model, and volume slider model that you can see above."
			/>
			<br></br>
			<CSHeader 
				text="Prototypes"
			/>
			<CSText 
				text="From these sketches I quickly jumped into some higher fidelity interactive prototypes to gather qualitative user testing data and better communicate ideas to stakeholders."
			/>
			<div className="quadvideo-container">
				<video className="multivideo" autoPlay muted loop>
	    			<source src={swipe1} type="video/mp4" />
	  			</video>
				<video className="multivideo" autoPlay muted loop>
	    			<source src={swipe2} type="video/mp4" />
	  			</video>
	  			<video className="multivideo" autoPlay muted loop>
	    			<source src={volumeslider} type="video/mp4" />
	  			</video>
				<video className="multivideo" autoPlay muted loop>
	    			<source src={actionbutton} type="video/mp4" />
	  			</video>
  			</div>

  			<CSText 
				text="User testing these prototypes brought some important learnings to the forefront. The volume slider model was discoverable, but was initially a bit confusing to users. The full screen swipe was not highly discoverable and conflicted with many common iOS gestures already ingrained in users. Finally the action button model had decent discoverability, but would require some tweaking to have better usability."
			/>
			<br></br>
			<CSHeader 
				text="Decision Making"
			/>
			<CSText 
				text="From these prototypes I lead the team in a decision making graph."
			/>
			<Img fluid={props.data.graphimage.childImageSharp.fluid} className="half-width-img" alt="" />
			<CSText 
				text="This graph plotted each idea in terms of how easy it would be for users to adopt against how well it would fit in Chalk’s development timeline. From my user testing and the teams best estimates, the action button model was show to be the winner."
			/>
			<br></br>
			<CSHeader 
				text="High Fidelity Details"
			/>
			<CSText 
				text="From here I began developing some high fidelity mockups and working on details such as the icons for the modes."
			/>
			<Img fluid={props.data.finaliconsimage.childImageSharp.fluid} className="full-width-img" alt="" />
			<Img fluid={props.data.finalimage.childImageSharp.fluid} className="full-width-img" alt="" />
			<CSText 
				text="Through a handful of iterations these details came together to form the final product discussed in detail above."
			/>
	    </div>
    </div>

  </Layout>
)

export default chalkPage

export const ImageQuery = graphql`
	query {
	  headerimage: file(relativePath: {eq: "chalk/headerimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:1632) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  projectimage: file(relativePath: {eq: "chalk/projectimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  roleimage: file(relativePath: {eq: "chalk/roleimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	   iphonebezel: file(relativePath: {eq: "chalk/iphonebezel.png"}) {
	    childImageSharp {
	      fluid (maxWidth:750) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  devicesimage: file(relativePath: {eq: "chalk/devicesimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:1632) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  problemimage: file(relativePath: {eq: "chalk/problemimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  sketchesimage: file(relativePath: {eq: "chalk/sketchesimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:1632) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  solutionimage: file(relativePath: {eq: "chalk/solutionimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  personaimage: file(relativePath: {eq: "chalk/personaimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  graphimage: file(relativePath: {eq: "chalk/graphimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  finalimage: file(relativePath: {eq: "chalk/finalimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:1632) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  },
	  finaliconsimage: file(relativePath: {eq: "chalk/finaliconsimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:1632) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
	}
`
