import React from "react"
import styled from "styled-components"
import { device } from "../device"

const Container = styled.div`
  margin: 1.5rem auto 0.25rem auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} {
    margin: 2rem auto 1.1rem auto;
  }
`

const ZContainer = props => <Container>{props.children}</Container>

export default ZContainer
