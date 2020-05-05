import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ProjectInfoText from "../components/projectinfotext"
import FullWidthImage from "../components/fullwidthimage"
import HalfWidthImage from "../components/halfwidthimage"
import Fade from '../components/Fade'
import PortfolioContainer from "../components/PortfolioContainer"
import SmallWrapper from '../components/smallwrapper'
import StyledLink from '../components/StyledLink'
import { device } from '../components/device'

import chalkflow from "../images/chalk/chalkflow.mp4"
import listenmode from "../images/chalk/listenmode.mp4"
import talkmode from "../images/chalk/talkmode.mp4"
import avatarswipe from "../images/chalk/avatarswipe.mp4"
import colorchange from "../images/chalk/colorchange.mp4"
import swipe1 from "../images/chalk/swipe1.mp4"
import swipe2 from "../images/chalk/swipe2.mp4"
import volumeslider from "../images/chalk/volumeslider.mp4"
import actionbutton from "../images/chalk/actionbutton.mp4"

const SingleVideoContainer = styled.div `
	margin: 1rem 0;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto;
	justify-items: center;
	align-items: center;
`

const PhoneBezel = styled(Img)`
	width: 100%;
	max-width: 432px;
	pointer-events: none;
	grid-column: 1;
	grid-row: 1;
	z-index: 2;
`

const SingleVideo = styled.video`
	width: 86.80555556%;
	max-width: 375px;
	grid-column: 1;
	grid-row: 1;
`

const LinkContainer = styled.div`
	text-align: center;
	margin-bottom: 1rem;
`

const DualVideoContainer = styled.div`
	grid-template-columns: auto auto;
	margin: 1rem 0;
	display: grid;
	max-width: 816px;
	grid-gap:16px;
	background-color: #F7FAFC;
	border-radius: 16px;
	padding: 16px;
`

const MultiVideo = styled.video`
	width: 100%;
  	height: auto;
  	border-radius: 8px;
`

const QuadVideoContainer = styled.div`
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
	margin: 1rem 0;
	display: grid;
	max-width: 816px;
	grid-gap:16px;
	background-color: #F7FAFC;
	border-radius: 16px;
	padding: 16px;

	@media ${device.mobile} {
		grid-template-columns: auto auto auto auto;
		grid-template-rows: auto;
	}
`


const chalkPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Chalk" />
    <Fade>
	    <PortfolioContainer>
		    <SmallWrapper>
			    <ProjectInfoText
			    	title="Chalk"
					subtitle="Interaction and Visual Design"
					date="Summer 2019" 
				/>
			</SmallWrapper>

			<FullWidthImage fluid={props.data.headerimage.childImageSharp.fluid} alt="" />

			<SmallWrapper>
				<h3>Project</h3>
				<p>I worked with Chalk during the spring and summer of 2019 to design the core user experience for their upcoming iOS application over the course of roughly three months.</p>

				<HalfWidthImage fluid={props.data.projectimage.childImageSharp.fluid} alt="" />
				<h3>Role</h3>
				<p>The team for this project was comprised of Chalk's Co-Founder/product manager, an iOS engineer, and myself - assuming the role of product designer.</p>

				<HalfWidthImage fluid={props.data.roleimage.childImageSharp.fluid} alt="" />

				<p>I was responsible for design ideation, iteration, prototyping, and high fidelity mockups throughout all stages of the project, and worked both independently and with the team in their SF office.</p>
				<br></br>
				<h3>Problem</h3>
				<p>The core messaging user experience was powerful but overly complicated, proving difficult for new users to learn and tricky for power users to control. This was something that Chalk found in their initial user testing, and I was able to confirm as I tried to understand the app.</p>

				<HalfWidthImage fluid={props.data.problemimage.childImageSharp.fluid} alt="" />

				<h3>Goal</h3>
				<p>The goal of this project was to simplify and make this core user experience component more intuitive to learn and more efficient to control.</p>

				<HalfWidthImage fluid={props.data.goalimage.childImageSharp.fluid} alt="" />

				<h3>Solution</h3>
				<p>Chalk's value proposition was found in the three core modes of communication in the app.</p>

				<HalfWidthImage fluid={props.data.solutionimage.childImageSharp.fluid} alt="" />

				<p>In <i>Text</i> mode, the app functions similarly to your standard messaging application. Users can send and receive text messages.<br></br><br></br>In <i>Listen</i> mode the user still sends text messages, but can hear their friends speaking via the phone's speaker or headphones.<br></br><br></br>In <i>Talk</i> mode the users microphone is on and they can communicate via voice for rapid fire group conversation.<br></br><br></br>In addition to these three modes, there is an <i>anchoring</i> setting that allows the user to lock the app in listen mode for a set period of time, even while in the background.<br></br><br></br>My final solution reworked the interaction model to feature a primary action button in the bottom left corner of the screen that served as a method of accessing the modes of communication.</p>
				

				<SingleVideoContainer>
					<PhoneBezel fluid={props.data.iphonebezel.childImageSharp.fluid} alt="" />
					<SingleVideo width="375" playsInline autoPlay muted loop>
		    			<source src={chalkflow} type="video/mp4" />
		  			</SingleVideo>
	  			</SingleVideoContainer>
	  			
	  			<LinkContainer>
		  			<StyledLink href="https://www.sketch.com/s/302c35c6-30ae-47dc-a561-ac47d7d7e144/a/DOVAlW/play">View Interactive Prototype</StyledLink>
	  			</LinkContainer>
	  			<p>When a new mode is entered, a contextual button would appear next to the action button to let the user control settings specific to the current mode such as anchoring time in listen mode and muting in talk mode.</p> 
			</SmallWrapper>

			<DualVideoContainer>
				<MultiVideo playsInline autoPlay muted loop>
	    			<source src={listenmode} type="video/mp4" />
	  			</MultiVideo>
				<MultiVideo playsInline autoPlay muted loop>
	    			<source src={talkmode} type="video/mp4" />
	  			</MultiVideo>
  			</DualVideoContainer>

  			<SmallWrapper>
	  			<p>Other data driven details of the reworked UI/UX include rings around the group avatars to indicate other users’ active modes, colored message bubbles to further provide context on what mode the user is currently in, as well as a redesigned header to better comply with mobile design standards.</p>
			</SmallWrapper>

			<DualVideoContainer>
				<MultiVideo playsInline autoPlay muted loop>
	    			<source src={avatarswipe} type="video/mp4" />
	  			</MultiVideo>
				<MultiVideo playsInline autoPlay muted loop>
	    			<source src={colorchange} type="video/mp4" />
	  			</MultiVideo>
  			</DualVideoContainer>

  			<SmallWrapper>
	  			<p>My design decisions were arrived at largely through qualitative user testing data and you can read more about my process below.</p>
				<br></br>
				<h3>Process</h3>
				<p>Through discussions with Chalk, I learned that the most important user to design for was the late teenager/early 20 something group chat user who was always attached to their phone.</p>

				<HalfWidthImage fluid={props.data.personaimage.childImageSharp.fluid} className="half-width-img" alt="" />

				<h3>Ideation</h3>
				<p>I began making some quick sketches with a “no idea is too crazy” type mindset and through discussions with Chalk, narrowed the ideas down to a more practical set.</p>

			</SmallWrapper>

			<FullWidthImage fluid={props.data.sketchesimage.childImageSharp.fluid} alt="" />

			<SmallWrapper>
				<p>The primary interaction models I would focus on from here were the action button model, full screen swipe model, and volume slider model that you can see above.</p>
				<br></br>
				<h3>Prototypes</h3>
				<p>From these sketches I quickly jumped into some higher fidelity interactive prototypes to gather qualitative user testing data and better communicate ideas to stakeholders.</p>
			</SmallWrapper>

			<QuadVideoContainer>
				<MultiVideo playsInline autoPlay muted loop>
	    			<source src={swipe1} type="video/mp4" />
	  			</MultiVideo>
				<MultiVideo playsInline autoPlay muted loop>
	    			<source src={swipe2} type="video/mp4" />
	  			</MultiVideo>
	  			<MultiVideo playsInline autoPlay muted loop>
	    			<source src={volumeslider} type="video/mp4" />
	  			</MultiVideo>
				<MultiVideo playsInline autoPlay muted loop>
	    			<source src={actionbutton} type="video/mp4" />
	  			</MultiVideo>
  			</QuadVideoContainer>

  			<SmallWrapper>
	  			<p>User testing these prototypes brought some important learnings to the forefront. The volume slider model was discoverable, but was initially a bit confusing to users. The full screen swipe was not highly discoverable and conflicted with many common iOS gestures already ingrained in users. Finally the action button model had decent discoverability, but would require some tweaking to have better usability.</p>

				<br></br>
				<h3>Decision Making</h3>

				<p>From these prototypes I lead the team in a decision making graph.</p>

				<HalfWidthImage fluid={props.data.graphimage.childImageSharp.fluid} alt="" />

				<p>This graph plotted each idea in terms of how easy it would be for users to adopt against how well it would fit in Chalk’s development timeline. From my user testing and the teams best estimates, the action button model was show to be the winner.</p>

				<br></br>
				<h3>High Fidelity Detailss</h3>
				<p>From here I began developing some high fidelity mockups and working on details such as the icons for the modes.</p>

			</SmallWrapper>

			<FullWidthImage fluid={props.data.finaliconsimage.childImageSharp.fluid} alt="" />
			<FullWidthImage fluid={props.data.finalimage.childImageSharp.fluid} alt="" />

			<SmallWrapper>
				<p>Through a handful of iterations these details came together to form the final product discussed in detail above.</p>
			</SmallWrapper>
	    </PortfolioContainer>
    </Fade>

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
	  },
	  goalimage: file(relativePath: {eq: "chalk/goalimage.png"}) {
	    childImageSharp {
	      fluid (maxWidth:888) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
	}
`
