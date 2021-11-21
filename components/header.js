import Link from "next/link"
import { useRouter } from "next/router"
import Logo from "@/components/logo"

const Header = props => {
  const router = useRouter()

  let justLogo = false
  if (router.pathname !== "/") {
    justLogo = true
  }

  return (
    <div className="flex flex-col">
      <Link href="/" passhref>
        <a className="mb-4">
          <Logo />
        </a>
      </Link>
      <div className={justLogo ? "hidden" : ""}>
        <h1 className="text-base">Gavin Nelson</h1>
        <h2 className="text-tertiary">Product & Icon Designer</h2>
      </div>
    </div>
  )
}

export default Header
