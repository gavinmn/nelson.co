import React from "react"
import Image from "next/image"
import styled from "styled-components"
import ProjectInfo from "./projectinfo"

const Container = styled.div`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: auto;
  align-items: start;
  transition: 0.2s ease-in-out;

  @media only screen and (min-width: 445px) {
    grid-template-columns: 50% 50%;
  }
`

const ImageContainer = styled.div`
  width: 88%;
  max-width: 285px;
  align-self: center;
  justify-self: center;
  pointer-events: none;
  background-color: red;

  @media only screen and (min-width: 445px) {
    margin-top: 0;
  }
`

const ExpertImageContainer = styled.div`
  width: 88%;
  max-width: 384px;
  align-self: center;
  justify-self: end;

  @media only screen and (min-width: 445px) {
    margin-top: 0;
  }
`

const MontereyImage = styled(Image)`
  width: 88%;
  max-width: 285px;
  align-self: center;
  justify-self: center;
  pointer-events: none;

  @media only screen and (min-width: 445px) {
    margin-top: 0;
  }
`

const ChalkImage = styled(Image)`
  width: 88%;
  max-width: 285px;
  align-self: center;
  justify-self: center;

  @media only screen and (min-width: 445px) {
    margin-top: 0;
  }
`

const ExpertsImage = styled(Image)`
  width: 88%;
  max-width: 384px;
  align-self: center;
  justify-self: end;

  @media only screen and (min-width: 445px) {
    margin-top: 0;
  }
`

const ProjectBG = styled.div`
  width: 100%;
  display: grid;
  max-width: 400;
  margin-top: 8px;
  align-self: center;
  justify-self: end;
  background: ${props => props.projectBg};
  border-radius: 16px;
  padding: 1rem 0;

  @media only screen and (min-width: 445px) {
    margin-top: 0;
  }
`

const CaseStudy = props => (
  <>
    <Container>
      <ProjectInfo
        logo="/images/monterey/montereylogo.png"
        title="Monterey"
        subtitle="Icon Design"
        date="Summer 2020"
        text="Get Icons"
        backgroundColor="var(--color-primary)"
        hoverBG="var(--color-monterey-secondary)"
        asA="a"
        href="https://gumroad.com/l/dvctd"
      />
      <ProjectBG projectBg="linear-gradient(180deg, rgba(132, 159, 255, 0.2) 0%, rgba(36, 84, 255, 0) 100%);">
        <ImageContainer>
          <MontereyImage
            src="/images/monterey/montereyimage.png"
            alt=""
            width={285}
            height={569}
          />
        </ImageContainer>
      </ProjectBG>
    </Container>
    <Container>
      <ProjectInfo
        logo="/images/chalk/chalklogo.png"
        title="Chalk"
        subtitle="Interaction and Visual Design"
        date="Summer 2019"
        text="Read case study"
        backgroundColor="var(--color-chalk)"
        hoverBG="var(--color-chalk-secondary)"
        asA=""
        href="/chalk"
      />
      <ProjectBG projectBg="var(--color-chalk-secondary)">
        <ImageContainer>
          <ChalkImage
            src="/images/chalk/chalkintro.png"
            alt=""
            width={285}
            height={569}
          />
        </ImageContainer>
      </ProjectBG>
    </Container>
    <Container>
      <ProjectInfo
        logo="/images/expert/expertslogo.png"
        title="wikiHow Expert Profiles"
        subtitle="Product and Visual Design"
        date="Summer 2018"
        text="Read case study"
        backgroundColor="var(--color-experts)"
        hoverBG="var(--color-experts-secondary)"
        asA=""
        href="/experts"
      />
      <ProjectBG projectBg="var(--color-experts-secondary)">
        <ExpertImageContainer>
          <ExpertsImage
            src="/images/expert/expertsintro.png"
            alt=""
            width={359}
            height={490}
          />
        </ExpertImageContainer>
      </ProjectBG>
    </Container>
  </>
)

export default CaseStudy
