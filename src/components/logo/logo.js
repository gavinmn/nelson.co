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
    <defs>
      <linearGradient
        x1="50%"
        y1="100%"
        x2="50%"
        y2="3.061617e-15%"
        id="linearGradient-1"
      >
        <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
        <stop stop-color="#FFFFFF" offset="100%"></stop>
      </linearGradient>
    </defs>

    <path
      d="M105,209 C134,210 158,196 178.539105,178.539105 C199.07821,161.07821 208,134 209,105 C210,76 199.07821,49.9217895 178.539105,31.4608948 C158,13 133,1.28785871e-14 105,1 C77,2 50,12 31.4608948,31.4608948 C12.9217895,50.9217895 2,76 1,105 C-1.12576615e-13,134 11,160 31.4608948,178.539105 C51.9217895,197.07821 76,208 105,209 Z"
      id="logo-bg"
      fill="var(--primary-color)"
    ></path>
    <path
      d="M125,65 C138.254834,65 149,75.745166 149,89 L149,121 C149,134.122286 138.468663,144.784846 125.396884,144.996785 L125,145 L125,65 Z M93,65 L93.3968839,65.0032153 C106.468663,65.2151543 117,75.8777143 117,89 L117,89 L117,145 L116.603116,144.996785 C103.531337,144.784846 93,134.122286 93,121 L93,121 L93,65 Z M85,65 L85,113 C71.745166,113 61,102.254834 61,89 C61,75.8777143 71.5313372,65.2151543 84.6031161,65.0032153 L85,65 Z"
      id="gbase"
      fill="#FFFFFF"
    ></path>
    <path
      d="M61,121 L85,121 L85,145 C71.745166,145 61,134.254834 61,121 L61,121 L61,121 Z"
      id="gpart"
      fill="url(#linearGradient-1)"
    ></path>
  </StyledSVG>
)

export default Logo
