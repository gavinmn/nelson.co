import React from "react"
import styled from "styled-components"
import { device } from "@/components/device"

const Caption = styled.p`
  font-size: var(--font-xs);
  line-height: var(--lh-xs);
  font-weight: normal;
  font-style: italic;
  margin-bottom: 1rem;
  color: var(--text-secondary);

  @media ${device.desktop} {
    font-size: var(--font-xs);
    line-height: var(--lh-xs);
    font-weight: normal;
    font-style: italic;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }
`

export default Caption
