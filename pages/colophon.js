import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"

const Colophon = () => (
  <Layout>
    <SEO
      title="Colophon"
      og="colophonog.png"
      description="The making of nelson.co"
    />

    <div className="flex flex-col items-start justify-center h-screen -mt-16 md:-mt-32">
      <h1 className="mb-4">Colophon</h1>

      <p className="mb-4">
        This website is designed and developed by Gavin Nelson in San Diego,
        California.
      </p>
      <p className="mb-4">
        It is built using{" "}
        <a
          href="https://code.visualstudio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          VS Code
        </a>
        , statically generated through{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        , and deployed using{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Vercel
        </a>
        . It is designed in both{" "}
        <a
          href="https://www.sketch.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sketch
        </a>{" "}
        and{" "}
        <a
          href="https://www.figma.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </a>{" "}
        and the type is set in Söhne by{" "}
        <a href="https://klim.co.nz" target="_blank" rel="noopener noreferrer">
          Klim Type Foundry
        </a>
        .
      </p>
      <p className="mb-4">
        The source code that powers it can be found on{" "}
        <a
          href="https://github.com/gavinmn/nelson.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . The content on this website is copyrighted.
      </p>
    </div>
  </Layout>
)

export default Colophon
