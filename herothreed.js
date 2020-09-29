import * as THREE from "three"
import React, { useRef, useContext } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import matcap from "./static/matcap.png"

export default function Model(props) {
  const ref = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, "/LogoExport.glb")
  const [map] = useLoader(THREE.TextureLoader, [matcap])

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(time / 4) * 0.18
    ref.current.rotation.y = Math.cos(time / 4) * -0.18
    ref.current.rotation.z = Math.sin(time / 4) * -0.08
    ref.current.position.x = Math.cos(time / 2) * 0.1
    ref.current.position.y = Math.sin(time / 2) * -0.1
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        material={materials.Material}
        geometry={nodes.Right.geometry}
        scale={[1.5, 1.5, 1.5]}
      >
        <meshMatcapMaterial attach="material" matcap={map} />
      </mesh>
      <mesh
        material={materials.Material}
        geometry={nodes.Middle.geometry}
        scale={[1.5, 1.5, 1.5]}
      >
        <meshMatcapMaterial attach="material" matcap={map} />
      </mesh>
      <mesh
        material={materials.Material}
        geometry={nodes.Left.geometry}
        scale={[1.5, 1.5, 1.5]}
      >
        <meshMatcapMaterial attach="material" matcap={map} />
      </mesh>
      <mesh
        material={materials.Material}
        geometry={nodes.Bottom.geometry}
        scale={[1.5, 1.5, 1.5]}
      >
        <meshMatcapMaterial attach="material" matcap={map} />
      </mesh>
    </group>
  )
}
