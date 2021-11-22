import { Canvas } from "react-three-fiber"
import ThreeDMesh from "./threeDMesh"

const ThreeDCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
      <ThreeDMesh />
    </Canvas>
  )
}

export default ThreeDCanvas
