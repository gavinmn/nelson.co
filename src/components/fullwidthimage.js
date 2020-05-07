import styled from "styled-components"
import Img from "gatsby-image"
import { device } from "./device"

const FullWidthImage = styled(Img)`
	width: 100%;
	margin: 2rem auto;
	max-width: 816px;

	@media ${device.desktop} {
		margin: 1rem auto;
	}
`

export default FullWidthImage