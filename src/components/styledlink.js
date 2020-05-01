import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  border-bottom: 1px solid;
  border-color: #DCDEE1;
  padding-bottom: 0;
  margin-bottom: 0;

  &:hover {
    color: #2950ff;
    border-color: #2950FF;
    cursor: pointer;
  }
`

export default StyledLink