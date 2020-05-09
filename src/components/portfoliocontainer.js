import styled from "styled-components"
import { device } from "./device"

const PortfolioContainer = styled.div`
  margin: 8rem 0 4rem 0;

  @media ${device.desktop} {
    margin: 4rem 0 4rem 0;
  }
`

export default PortfolioContainer
