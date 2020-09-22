import React, { Suspense, useRef, useCallback } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls, PerspectiveCamera } from "drei"
import "../pages/styles.css"
import Model from "../../herothreed"

export default function ThreeDCanvas() {
  return (
    <Canvas pixelRatio={window.devicePixelRatio}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} aspect />
      <OrbitControls enabled={false} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}
