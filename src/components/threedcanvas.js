import React, { Suspense, useRef, useCallback } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls, PerspectiveCamera } from "drei"
import "../pages/styles.css"
import Model from "../../herothreed"

export default function ThreeDCanvas() {
  // const mouse = useRef([0, 0])
  // const onMouseMove = useCallback(
  //   ({ clientX: x, clientY: y }) =>
  //     (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
  //   []
  // )
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  return (
    <div className="main">
      <Canvas
        // onMouseMove={onMouseMove}
        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enabled={false} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}
