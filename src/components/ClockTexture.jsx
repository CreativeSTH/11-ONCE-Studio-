import React from 'react'
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader } from '@react-three/fiber'
import * as THREE from "three"

const ClockTexture = () => {
    const textureClock = useLoader(
        TextureLoader, 
        "./textures/matcaps/matcap1.png" 
    )
    // textureClock.minFilter = THREE.NearestFilter
    // textureClock.magFilter = THREE.NearestFilter
  return (
    <mesh>
        <torusKnotGeometry args={[1, 0.3, 100, 100]} />
        <meshStandardMaterial flatShading={true} map={textureClock}/>
    </mesh>
  )
}

export default ClockTexture
