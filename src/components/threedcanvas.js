import React, { Suspense, useRef, useCallback } from "react"
import { Canvas, Dom } from "react-three-fiber"
import { OrbitControls, PerspectiveCamera } from "drei"
import "../pages/styles.css"
import Model from "../../herothreed"

// function Loading() {
//   return (
//     <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[2, 2, 0]}>
//       <sphereGeometry attach="geometry" args={[1, 32, 32]} />
//       <meshStandardMaterial
//         attach="material"
//         color="black"
//         transparent
//         opacity={0.4}
//         roughness={1}
//         metalness={0}
//       />
//     </mesh>
//   )
// }

function ThreeDCanvas() {
  if (typeof window !== `undefined`) {
    var pixelRatio = window.devicePixelRatio
  }
  return (
    <Canvas pixelRatio={pixelRatio}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} aspect />
      <OrbitControls enableZoom={false} rotateSpeed={0.4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}

export default ThreeDCanvas
