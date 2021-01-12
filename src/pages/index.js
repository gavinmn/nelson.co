import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Shot from "../components/shot"
import Wrapper from "../components/wrapper"
import { device } from "../components/device"
import Image from "next/image"
import ProjectInfoText from "../components/projectinfotext"
import ButtonInternal from "../components/buttoninternal"
import ButtonExternal from "../components/buttonexternal"

const HeroContainer = styled.div`
  margin-top: -1rem;
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media ${device.desktop} {
    margin-top: 1rem;
  }
`

const SampleGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 16px;
  margin-bottom: 4rem;

  @media only screen and (min-width: 445px) {
    grid-template-columns: 49.01960784% 49.01960784%;
  }
`

const BlankContainer = styled.div`
  width: 100%;
  height: 100%;
`

const CaseStudyContainer = styled.div`
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
const ProjectInfoContainer = styled.div`
  @media only screen and (min-width: 445px) {
    align-self: center;
  }
`

const Logo = styled(Image)`
margin-bottom: 0.5rem;
width: 4rem;
height: 4rem;

@media ${device.desktop} {
  width: 2rem;
  height: 2rem;d
}
`

const ButtonContainer = styled.div`
  margin: 1rem 0;

  @media ${device.desktop} {
    margin-bottom: 0;
  }
`

const IndexPage = props => {
  return (
    <Layout>
      <SEO title=" " />
      <Wrapper>
        <HeroContainer>
          <Hero />
        </HeroContainer>

        <a aria-label="Work" id="work" href="/#work"></a>

        <CaseStudyContainer>
          <ProjectInfoContainer>
            <Logo
              src="/images/monterey/montereylogo.png"
              alt=""
              width={64}
              height={64}
              layout="intrinsic"
            />
            <ProjectInfoText
              title="Monterey"
              subtitle="Icon Design"
              date="Summer 2020"
            />
            <ButtonContainer>
              <ButtonExternal
                href="https://gumroad.com/l/dvctd"
                text="Get Icons"
                color="var(--color-primary)"
                hoverBackground="var(--color-monterey-secondary)"
              />
            </ButtonContainer>
          </ProjectInfoContainer>
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
        </CaseStudyContainer>

        <CaseStudyContainer>
          <ProjectInfoContainer>
            <Logo
              src="/images/chalk/chalklogo.png"
              alt=""
              width={64}
              height={64}
              layout="intrinsic"
            />
            <ProjectInfoText
              title="Chalk"
              subtitle="Interaction and Visual Design"
              date="Summer 2019"
            />
            <ButtonContainer>
              <ButtonInternal
                href="/chalk"
                text="Read case study"
                color="var(--color-chalk)"
                hoverBackground="var(--color-chalk-secondary)"
              />
            </ButtonContainer>
          </ProjectInfoContainer>
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
        </CaseStudyContainer>

        {/* <CaseStudyContainer>
          <ProjectInfoContainer>
            <Logo
              src="/images/expert/expertslogo.png"
              alt=""
              width={64}
              height={64}
              layout="intrinsic"
            />
            <ProjectInfoText
              title="wikiHow Expert Profiles"
              subtitle="Product and Visual Design"
              date="Summer 2018"
            />
            <ButtonContainer>
              <ButtonInternal
                href="/experts"
                text="Read case study"
                color="var(--color-experts)"
                hoverBackground="var(--color-experts-secondary)"
              />
            </ButtonContainer>
          </ProjectInfoContainer>
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
        </CaseStudyContainer> */}

        <SampleGrid>
          <ProjectInfoContainer>
            <Logo
              src="/images/visual/visuallogo.png"
              alt=""
              width={64}
              height={64}
              layout="intrinsic"
            />
            <ProjectInfoText
              title="Visual Design Sample"
              subtitle="Client and Personal Work"
              date="2014 - 2021"
            />
            <ButtonContainer>
              <ButtonExternal
                href="https://dribbble.com/Gavin/"
                text="View more"
              />
            </ButtonContainer>
          </ProjectInfoContainer>

          <BlankContainer />
          <Shot image="/images/visual/blendergrapher.png" />
          <Shot image="/images/visual/fitbodapollo.png" />
          <Shot image="/images/visual/designicons.png" />
          <Shot image="/images/visual/devicons.png" />
          <Shot image="/images/visual/mailicons.png" />
        </SampleGrid>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
