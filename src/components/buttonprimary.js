import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "./device"

const ButtonStyle = styled(Link)`
	padding: .5rem;
	max-width: 100%;
	background: ${props => props.backgroundColor || "rgba(100,102,255,0.10)"};
	border-radius: 8px;
	transition: all .4s ease-in-out;
	display: flex;
  	align-items: center;
  	justify-content: center;
  	font-size:16px;
	font-weight: bold;
	color: ${props => props.hoverBackground || "#6466FF"};

	&:hover {
		background: ${props => props.hoverBackground || "#6466FF"};
		color:white;
		cursor:pointer;
	}

	@media only screen and (min-width: 445px) {
		max-width: 10rem;
	}

	@media ${device.desktop} {
		font-size: 18px;
		max-width: 6rem;
	}

`

const ButtonPrimary = props => (
		<ButtonStyle as={props.asA} href={props.href} to={props.link} backgroundColor={props.color} hoverBackground={props.hoverBackground}>{props.text}</ButtonStyle>
)	
export default ButtonPrimary