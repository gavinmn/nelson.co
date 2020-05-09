import styled from "styled-components"
import Img from "gatsby-image"
import { device } from "./device"

const HalfWidthImage = styled(Img)`
  width: 100%;
  margin: 2rem auto;
  max-width: 444px;

  @media ${device.desktop} {
    margin: 1rem auto;
  }
`

export default HalfWidthImage
