import Link from "next/link"
import { useRouter } from "next/router"
import { Logo } from "./svg"
import Box from "./threeDMesh"
import { Canvas, useFrame } from "@react-three/fiber"

const Header = () => {
  const router = useRouter()

  let justLogo = false
  if (router.pathname !== "/") {
    justLogo = true
  }

  return (
    <div className="flex flex-col items-start">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>

      <Link href="/" passhref>
        <a className="mb-4">
          <Logo />
        </a>
      </Link>
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
