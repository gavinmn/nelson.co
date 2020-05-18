import React from "react"
import styled from "styled-components"
import "./logo.css"

const StyledSVG = styled.svg`
  width: 96px;
  height: 96px;

  @media only screen and (min-width: 722px) {
    width: 224px;
    height: 224px;
  }
`

const Logo = props => (
  <StyledSVG viewBox="0 0  210 210" version="1.1">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M105 210C162.99 210 210 162.99 210 105C210 47.0101 162.99 0 105 0C47.0101 0 0 47.0101 0 105C0 162.99 47.0101 210 105 210ZM149 89C149 75.7452 138.255 65 125 65V145C138.255 145 149 134.255 149 121V89ZM93 65V121C93 134.255 103.745 145 117 145V89C117 75.7452 106.255 65 93 65ZM85 113V65C71.7452 65 61 75.7452 61 89C61 102.255 71.7452 113 85 113Z"
      fill="var(--color-primary)"
    />
    <path
      d="M61 121H85V145C71.7452 145 61 134.255 61 121Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="73"
        y1="145"
        x2="73"
        y2="121"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--bg-hex)" stop-opacity="0" />
        <stop offset="1" stop-color="var(--bg-hex)" />
      </linearGradient>
    </defs>
  </StyledSVG>
)

export default Logo
