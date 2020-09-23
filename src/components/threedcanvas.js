import React, { Suspense, useRef, useCallback } from "react"
import { Canvas, Dom } from "react-three-fiber"
import { OrbitControls, PerspectiveCamera } from "drei"
import "../pages/styles.css"
import Model from "../../herothreed"

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
