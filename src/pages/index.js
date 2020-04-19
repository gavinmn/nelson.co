import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import CSGroup from "../components/csgroup/csgroup"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <CSGroup />

  </Layout>
)

export default IndexPage
