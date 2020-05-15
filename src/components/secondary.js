import styled from "styled-components"
import { device } from "./device"

const Secondary = styled.span`
  color: var(--wash-secondary);
  font-size: 14px;

  @media ${device.desktop} {
    font-size: 18px;
  }
`

export default Secondary
