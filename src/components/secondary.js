import styled from "styled-components"
import { device } from "./device"

const Secondary = styled.span`
	color: #8B8F9B;
	font-size: 14px;

	@media ${device.mobile} {
		font-size: 18px;
	}
`

export default Secondary