import styled from "styled-components"
import { keyframes } from "styled-components"

const scaleIn = keyframes`
  	from {
      	transform: scale(.98);
  	}
  	to {
        transform: scale(1);
  	}
`

const Scale = styled.div`
  animation: ${scaleIn} 0.6s ease-out;
`

export default Scale
