import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "./device"


const ButtonOutter = styled.div`
	padding: .25rem;
	width: 100%;
	background-color: #2950ff;
	border-radius: 8px;
	transition: all .4s ease-in-out;
	display: flex;
  	align-items: center;
  	justify-content: center;

	&:hover {
		transform: scale(1.03);
		box-shadow: 0 2px 8px 0 rgba(15,48,198,0.35);
		cursor:pointer;
	}

	@media ${device.desktop} {
		width:6rem;
		padding: .5rem;
	}

`

const ButtonText = styled.p`
	font-size:16px;
	font-weight: bold;
	color: #ffffff;
	margin: 0 auto;

	@media ${device.desktop} {
		font-size: 18px;
	}
`

const ButtonPrimary = props => (
		<ButtonOutter>
			<ButtonText>{props.text}</ButtonText>
		</ButtonOutter>
)	

export default ButtonPrimary