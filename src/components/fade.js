import styled from "styled-components"
import { keyframes } from "styled-components"

const fadeIn = keyframes`
  	from {
      	opacity: 0;
  	}
  	to {
  		opacity: 1;
  	}
`

const Fade = styled.div`
  animation: ${fadeIn} 0.6s ease-out;
`

export default Fade
