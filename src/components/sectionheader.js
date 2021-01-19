import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { device } from "../components/device"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 4rem 0 1rem 0;

  @media ${device.desktop} {
    margin: 2rem 0 0.5rem 0;
  }
`

const SectionHeader = props => (
  <FlexContainer>
    <h1>{props.section}</h1>
    {props.children}
  </FlexContainer>
)

export default SectionHeader
