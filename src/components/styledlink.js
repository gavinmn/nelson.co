import styled from "styled-components"
import device from "./device"

const StyledLink = styled.a`
	/*border-bottom: 1px solid;
	border-color: #DCDEE1;
	padding-bottom: 0;
	margin-bottom: 0;*/

  	padding: 4px 8px;
 	background: rgba(193,193,198,0.10);
	border-radius: 4px;
  	color: #8B8F9B;
  	font-size: 14px;

	&:hover {
		color: #6466FF;
		background: rgba(100,102,255,0.10);
		cursor: pointer;
	}

	@media only screen and (min-width: 722px) {
		font-size: 18px;
	}

`

export default StyledLink