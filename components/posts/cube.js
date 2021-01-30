import React from "react"
import styled from "styled-components"
import { device } from "@/components/device"

const Cube = styled.svg`
  width: 80px;
  height: 80px;
  @media ${device.desktop} {
    width: 160px;
    height: 160px;
  }
`
export default Cube
