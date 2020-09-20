import * as THREE from "three"
import React, { useRef } from "react"
import lerp from "lerp"
import { useLoader, useFrame, useThree } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { draco } from "drei"
import matcap from "./public/matcap.png"

export default function Model({ props }) {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/Logo.gltf",
    draco("/draco-gltf/")
  )
  const [map] = useLoader(THREE.TextureLoader, [matcap])

  const ref = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(time / 2) * 0.08
    ref.current.rotation.y = Math.cos(time / 2) * -0.08
    ref.current.position.x = Math.cos(time / 2) * 0.08
    ref.current.position.y = Math.sin(time / 2) * -0.08
  })
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Logo.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[8, 8, 8]}
      >
        <meshMatcapMaterial attach="material" matcap={map} />
      </mesh>
    </group>
  )
}
