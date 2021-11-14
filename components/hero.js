import Logo from "@/components/logo"

const Hero = props => {
  return (
    <>
      <div className="grid mt-16 md:mt-64 auto-rows-auto gap-y-4">
        <Logo />
        <div>
          <h1 className="font-medium ">Gavin Nelson</h1>
          <h2>Product & Icon Designer</h2>
        </div>
        <p>
          I'm currently shaping the mobile apps at GitHub and crafting beautiful
          app icons for companies and individuals. I focus on fit and finish to
          solve problems and create seamless experiences.
        </p>
      </div>
    </>
  )
}

export default Hero
