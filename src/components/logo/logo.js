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
    <circle cx="105" cy="105" r="105" fill="#7575FF" />
    <path
      d="M125 65C138.255 65 149 75.7452 149 89V121C149 134.255 138.255 145 125 145V65Z"
      fill="white"
    />
    <path
      d="M93 65V121C93 134.255 103.745 145 117 145V89C117 75.7452 106.255 65 93 65Z"
      fill="white"
    />
    <path
      d="M61 121H85V145C71.7452 145 61 134.255 61 121Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M85 65V113C71.7452 113 61 102.255 61 89C61 75.7452 71.7452 65 85 65Z"
      fill="white"
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
        <stop stop-color="white" stop-opacity="0" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
    </defs>
  </StyledSVG>
)

export default Logo
