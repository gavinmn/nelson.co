import React from "react"
import Image from "next/image"
import styled from "styled-components"

const ShotImg = styled(Image)`
  max-width: 400px;
  width: 100%;
  max-height: 300px;
  height: 100%;
`

const Shot = props => (
  <ShotImg src={props.image} alt="" width={400} height={300} />
)

export default Shot
