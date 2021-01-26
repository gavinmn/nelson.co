import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "next/link"
import { device } from "../components/device"
import TextLink from "../components/textlink"

const TextContainer = styled.div`
  margin-top: -1rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: start;
  justify-content: center;

  max-width: 624px;
  margin: 0 auto;
  padding: 0 5% 0 5%;

  @media ${device.desktop} {
    margin-top: 1rem;
  }
`

const Colophon = props => (
  <Layout>
    <SEO
      title="Colophon"
      og="colophonog.png"
      description="The making of nelson.co"
    />

    <TextContainer>
      <h1>Colophon</h1>

      <p>
        This website is designed and developed by Gavin Nelson in San Francisco,
        California. <br></br>
        <br></br>It is built using{" "}
        <TextLink href="https://nova.app" target="_blank" rel="noopener noreferrer">
          Nova
        </TextLink>{" "}
        by Panic, statically generated through{" "}
        <TextLink href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Next.js
        </TextLink>, and deployed using{" "}
        <TextLink href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Vercel
        </TextLink>
        . It is designed in both{" "}
        <TextLink
          href="https://www.sketch.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sketch
        </TextLink>{" "}
        and{" "}
        <TextLink
          href="https://www.figma.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </TextLink>{" "}
        and the type is set in Söhne by{" "}
        <TextLink href="https://klim.co.nz" target="_blank" rel="noopener noreferrer">
          Klim Type Foundry
        </TextLink>
        .<br></br>
        <br></br>
        The source code that powers it can be found on{" "}
        <TextLink
          href="https://github.com/gavinmn/nelson.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </TextLink>
        . The content on this website is copyrighted.
      </p>
    </TextContainer>
  </Layout>
)

export default Colophon
