import Link from "next/link"
import { useRouter } from "next/router"
import { LogoInverted } from "./svg"
import LogoShader from "./webgl"

const Header = () => {
  const router = useRouter()

  let justLogo = false
  if (router.pathname !== "/") {
    justLogo = true
  }

  return (
    <div className="flex flex-col items-start">
      <div className="grid items-center mb-2 grid-cols-auto grid-rows-auto justify-items-center">
        <div className=" col-1 row-1">
          {/* <LogoShader /> */}
          <div className="w-8 h-8 gradient animate-gradient" />
        </div>
        <div className="z-10 col-1 row-1">
          <Link href="/" passhref>
            <a className="mb-4 ">
              <LogoInverted />
            </a>
          </Link>
        </div>
      </div>
      <div className={justLogo ? "hidden" : ""}>
        <h1 className="text-base">Gavin Nelson</h1>
        <h2 className="text-tertiary dark:text-darkTertiary">
          Product & Icon Designer
        </h2>
      </div>
    </div>
  )
}

export default Header
