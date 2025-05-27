import React from 'react'
import { PerspectiveCamera } from "@react-three/drei"

const Camera = () => {
  return (
    <PerspectiveCamera 
        makeDefault
        position={[5, 1, 1]}
        fov={3}
    />
  )
}

export default Camera
