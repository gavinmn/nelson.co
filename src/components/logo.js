import React from "react"
import styled from "styled-components"
import Ztext from 'react-ztext'

const StyledSVG = styled.svg`
  width: 160px;
  height: 160px;

  @media only screen and (min-width: 722px) {
    width: 224px;
    height: 224px;
  }
`
const StyledContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100%;

  @media only screen and (min-width: 722px) {
    justify-content:start;
  }
`

const Logo = props => (
  <StyledContainer>
  <Ztext
    depth='.9rem'
    direction='both'
    event='pointer'
    eventRotation='18deg'
    eventDirection='default'
    fade={false}
    layers={15}
    perspective='500px'
  >
      <StyledSVG viewBox="0 0 210 190" version="1.1">
        <path d="M154.503 0.034373C153.399 -0.00375831 152.5 0.895252 152.5 1.99982V188C152.5 189.104 153.399 190.003 154.503 189.965C185.056 188.91 209.5 163.809 209.5 133V56.9998C209.5 26.1902 185.056 1.08972 154.503 0.034373Z" fill="var(--logo-primary)"/>
    <path d="M76.5 1.99983C76.5 0.895256 77.3995 -0.00375828 78.5034 0.0343731C109.056 1.08972 133.5 26.1902 133.5 56.9998V188C133.5 189.104 132.601 190.003 131.497 189.965C100.944 188.91 76.5 163.809 76.5 133V1.99983Z" fill="var(--logo-primary)"/>
    <path d="M55.4966 0.0343731C56.6005 -0.00375828 57.5 0.895256 57.5 1.99983V112C57.5 113.104 56.6005 114.003 55.4966 113.965C24.9442 112.91 0.5 87.8095 0.5 56.9998C0.5 26.1902 24.9442 1.08972 55.4966 0.0343731Z" fill="var(--logo-primary)"/>
    <path d="M2.5 133C1.39543 133 0.496417 133.899 0.534548 135.003C1.56692 164.891 25.6091 188.933 55.4966 189.965C56.6005 190.003 57.5 189.104 57.5 188V135C57.5 133.895 56.6046 133 55.5 133H2.5Z" fill="var(--logo-primary)"/>
      </StyledSVG>
    </Ztext>
    </StyledContainer>
)



export default Logo
