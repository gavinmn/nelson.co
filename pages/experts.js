import React from "react"
import Image from "next/image"
import styled from "styled-components"

import PostWrapper from "@/components/postwrapper"
import CustomImage from "@/components/customimage"
import { device } from "@/components/device"
import Caption from "@/components/caption"

const Subtitle = styled.h2`
  font-size: var(--font-xs);
  color: var(--text-secondary);
  font-weight: normal;
  margin: 0;
`

const SingleVideoContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;

  @media ${device.desktop} {
    margin: 1rem auto;
  }
`
const SingleVideo = styled.video`
  max-width: 375px;
  max-width: 100%;

  @media ${device.desktop} {
    width: 100%;
    max-width: 816px;
  }
`

const expertsPage = props => (
  <PostWrapper
    title="Expert Profiles"
    subtitle="Product and Visual Design"
    time="Summer 2018"
    og="og.png"
    description="Product and Visual Design"
  >
    <h1>Expert Profiles</h1>
    <Subtitle>Product and Visual Design</Subtitle>
    <Caption>
      <i>Summer 2018</i>
    </Caption>
    <CustomImage
      size="full"
      src="/images/expert/headerimage.png"
      width="816"
      height="400"
    />

    <h2>Project</h2>
    <p>
      I was assigned to this project as the sole product designer in the summer
      of 2018 at wikiHow. The project focused on designing an entirely new suite
      of pages (responsive web) to house credentials for our 500+ expert
      verifiers.
    </p>

    <CustomImage
      size="half"
      src="/images/expert/projectimage.png"
      width="444"
      height="222"
    />

    <h2>Role</h2>
    <p>
      The team for this project was comprised wikiHow's CEO acting as the
      primary product manager, the in house Experts Team, an engineer, and
      myself in the role of Product Designer.{" "}
    </p>

    <CustomImage
      size="half"
      src="/images/expert/teamimage.png"
      width="444"
      height="344"
    />

    <p>
      I was responsible for design ideation, iteration, prototyping, and high
      fidelity mockups throughout all stages of the project.
    </p>

    <br></br>

    <h2>Problem</h2>
    <p>
      Through community feedback, the wikiHow team learned that the expert
      verified badges on our articles were not cutting it in terms of providing
      assurance that the user could place faith in the badge and trust the
      verified content.
    </p>

    <CustomImage
      size="half"
      src="/images/expert/problemimage.png"
      width="444"
      height="290"
    />

    <p>
      The badge only linked the user to an index of experts, with no wikiHow
      page showcasing their credentials.
    </p>

    <br></br>

    <h2>Goal</h2>
    <p>
      The goal of this project was to increase the authority and trustworthiness
      of the "expert verified" seal of approval on our verified articles.
    </p>

    <CustomImage
      size="half"
      src="/images/expert/goalimage.png"
      width="444"
      height="326"
    />

    <h2>Stakeholder Constraints</h2>
    <p>
      There were many stakeholder constraints in this project that came together
      to shape many of the final design decisions. Primarily, my designs had to
      account for an engineering team with low bandwidth. To ease use of
      engineering resources, I had to repurpose many components from across
      wikiHow and stick to pre built wikiHow technologies to build this new
      custom page.
    </p>

    <CustomImage
      size="half"
      src="/images/expert/stakeholderimage.png"
      width="444"
      height="242"
    />

    <p>
      In addition to engineering constraints, I also had to account for the
      Experts team, and design a system that would accommodate them having to
      manually fill all data.
    </p>

    <br></br>

    <h2>Solution</h2>
    <p>
      My final designs focus on authority by providing details about the expert
      in a resume style format.
    </p>

    <CustomImage
      size="full"
      src="/images/expert/solutionimage1.png"
      width="816"
      height="994"
    />

    <p>
      At the top, I created a header with the experts name, photo, and job title
      to create visual consistency with the verification badge.
    </p>

    <CustomImage
      size="half"
      src="/images/expert/solutionimage2.png"
      width="444"
      height="126"
    />

    <p>
      Below this there are three specifically editable sections (“wikiText
      areas”) designed to ease engineering resources. These sections were made
      editable by using the same backend editing that the rest of our site uses.
    </p>
    <CustomImage
      size="half"
      src="/images/expert/solutionimage3.png"
      width="444"
      height="406"
    />

    <p>
      This allowed more flexibility in editing for the Experts team and less
      custom engineering from the developers. A tradeoff of using these sections
      however was the limited text formatting that came with it.
    </p>
    <br></br>
    <p>
      To help ease the load the Experts team who would be responsible for
      compiling the information of 500+ experts, the bio section was placed at
      the top of the page, and a toggle was added to show or hide the two
      sections below.
    </p>

    <SingleVideoContainer>
      <SingleVideo width="816" playsInline autoPlay muted loop>
        <source src="/images/expert/togglemovie.mp4" type="video/mp4" />
      </SingleVideo>
    </SingleVideoContainer>

    <p>
      The bio section was the only consistent piece of information that the
      Experts team had. Displaying this section first and letting the team to
      toggle the Experiences and Education section allowed us to launch the
      pages without large gaps of missing information as this would largely
      defeat our goal. As the experts team acquired experience and education
      details, this information could be seamlessly added to the pages.
    </p>
    <br></br>
    <p>
      Below the bio section lives the Experience and Education/Achievements
      sections mentioned above. My final solution included a toggle so that the
      experts team could switch this right hand column between Education and
      Achievements, depending upon the expert.{" "}
    </p>
    <CustomImage
      size="full"
      src="/images/expert/solutionimage4.png"
      width="816"
      height="384"
    />

    <p>
      Splitting the right hand section into either education or achievements was
      a data driven design decision - users reported that the sections that made
      the page most trustworthy to them depended upon the category of the
      expert. For example, when reading about a Legal Expert, users reported
      being interested in seeing where the expert went to law school, while when
      reading about a Guitar Expert, their achievements were reported to be more
      applicable.
    </p>

    <br></br>

    <h2>Context</h2>
    <p>
      To provide some context for the design process on this project -
      stakeholders at wikiHow generally like to see high fidelity iterations.
      Given wikiHow's design language and system, I will often jump quickly to a
      high fidelity stage and test and iterate from there.
    </p>
    <br></br>
    <p>
      In addition to plenty of stakeholder constraints mentioned above, wikiHow
      generally likes to move very quickly and often doesn't have much time for
      user research.
    </p>
    <br></br>
    <p>
      Regardless, I did a small bit of user outreach to gather some outside
      opinions on authority, trustworthiness, and verification and from there
      got started high fidelity iteration and prototyping.
    </p>

    <CustomImage
      size="full"
      src="/images/expert/contextimage1.png"
      width="816"
      height="320"
    />

    <p>
      A stage of my iteration process that I greatly value and find vital in
      stakeholder communications is the prototyping stage. I made a few
      prototypes of things like a drop down expansion for the experts
      information and toggling sections on and off for design critiques to be
      able to illustrate more fleshed out ideas.{" "}
    </p>

    <SingleVideoContainer>
      <SingleVideo width="320" playsInline autoPlay muted loop>
        <source src="/images/expert/prototypemovie.mp4" type="video/mp4" />
      </SingleVideo>
    </SingleVideoContainer>

    <h2>Development</h2>
    <p>
      At the end of this iteration - critique - iteration process, I had a quick
      moment to validate design decisions with various company members
      uninvolved in the project, and from there I began collaborating with the
      engineering team to have the pages built.
    </p>
    <CustomImage
      size="half"
      src="/images/expert/devimage.png"
      width="444"
      height="190"
    />

    <p>
      Unfortunately I was unable to gather quantitative data on the pages
      success before they had to be temporarily removed due to a backend
      software update. Overall, this project was a great exercise in working
      within stakeholder constraints and being flexible.
    </p>
  </PostWrapper>
)

export default expertsPage
