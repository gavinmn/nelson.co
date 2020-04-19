import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import CSGroup from "../components/csgroup/csgroup"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Img fluid={props.data.file.childImageSharp.fluid} />
    <Hero />
    <CSGroup />

  </Layout>
)

export default IndexPage

export const query = graphql`
	query ChalkImgQuery {
	  file(relativePath: {eq: "chalk/chalkintro.png"}) {
	    childImageSharp {
	      fluid (maxWidth:400) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
	}
`