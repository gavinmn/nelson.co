import styled from "styled-components"
import Image from "next/image"
import { device } from "./device"

const FullWidthImageContainer = styled.div`
  width: 100%;
  margin: 2rem auto;

  @media only screen and (min-width: 848px) {
    width: 200%;
    margin: 1rem -3rem;
    max-width: 816px;
  }
`

const FullWidthImage = props => (
  <FullWidthImageContainer>
    <Image
      src={props.src}
      alt=""
      width={`${props.width}`}
      height={`${props.height}`}
    />
  </FullWidthImageContainer>
)

export default FullWidthImage
