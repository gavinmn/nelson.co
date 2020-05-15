import React from "react"
import styled from "styled-components"

const StyledArrow = styled.p`
  display: inline;
  font-size: 18px;
  opacity: 80%;

  &:hover {
    opacity: 100%;
    margin-left: 2px;
  }
`

const Arrow = props => <StyledArrow>→</StyledArrow>
export default Arrow
