import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "./device"

const ButtonStyle = styled(Link)`
  padding: 1rem;
  max-width: 100%;
  background: ${props => props.backgroundColor || "var(--button-bg)"};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.hoverBackground || "var(--primary-color)"};

  &:hover {
    background: ${props => props.hoverBackground || "var(--primary-color)"};
    color: #ffffff;
    cursor: pointer;
  }

  @media only screen and (min-width: 445px) {
    max-width: 10rem;
  }

  @media ${device.desktop} {
    padding: 0.5rem;
    font-size: 18px;
    max-width: 6rem;
  }
`

const ButtonPrimary = props => (
  <ButtonStyle
    as={props.asA}
    href={props.href}
    to={props.link}
    backgroundColor={props.color}
    hoverBackground={props.hoverBackground}
  >
    {props.text}
  </ButtonStyle>
)
export default ButtonPrimary
