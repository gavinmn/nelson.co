import Logo from "@/components/logo"

const Hero = props => {
  return (
    <>
      <div className="grid mt-16 md:mt-64 auto-rows-auto gap-y-4">
        <Logo />
        <div>
          <h1 className="font-sans font-medium text-primary">Gavin Nelson</h1>
          <p className="font-sans text-secondary">Product & Icon Designer</p>
        </div>
        <p className="font-sans text-primary">
          I'm currently shaping the mobile apps at GitHub and crafting beautiful
          app icons for companies and individuals. I focus on fit and finish to
          solve problems and create seamless experiences.
        </p>
      </div>
    </>
  )
}

export default Hero
