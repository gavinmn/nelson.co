import React from "react"
import Image from "next/image"
import styled from "styled-components"

const ShotImg = styled(Image)`
  max-width: 400px;
  width: 100%;
`

const Shot = props => <ShotImg src={props.image} alt="" layout="fill" />

export default Shot
