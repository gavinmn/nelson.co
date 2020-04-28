import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/chalk.css"
import ProjectInfoData from "../components/projectinfodata/projectinfodata"

const chalkPage = () => (
  <Layout>
    <SEO title="Chalk" />
    <div className="small-width-container">
	    <ProjectInfoData
	    	title="Chalk"
			subtitle="Interaction and Visual Design"
			date="Summer 2019" 
		/>
    </div>

  </Layout>
)

export default chalkPage
