import Link from "next/link"
import { useRouter } from "next/router"
import { LogoInverted } from "./svg"
import Canvas from "./canvas"

const Header = () => {
  const router = useRouter()

  let justLogo = false
  if (router.pathname !== "/") {
    justLogo = true
  }

  return (
    <div className="flex flex-col items-start">
      <div className="grid items-center mb-4 grid-cols-auto grid-rows-auto justify-items-center ">
        <div className="col-1 row-1">
          <Canvas />
        </div>
        <div className="z-10 col-1 row-1">
          <Link href="/" passhref className="mb-4 ">

            <LogoInverted />

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
  );
}

export default Header
