import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const ShotImg = styled(Img)`
  max-width: 400px;
  width: 100%;
`

const Shot = props => <ShotImg fluid={props.image} alt="" />

export default Shot
