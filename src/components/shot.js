import React from "react"
import Image from "next/image"
import styled from "styled-components"

const ShotImg = styled(Image)`
  max-width: 400px;
  width: 100%;
`

const Shot = props => <ShotImg fluid={props.image} alt="" />

export default Shot
