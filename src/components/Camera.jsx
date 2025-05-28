import React from 'react'
import { PerspectiveCamera } from "@react-three/drei"

const Camera = () => {
  return (
    <PerspectiveCamera 
        makeDefault
        position={[1, 0, 1]}
        fov={5}
    />
  )
}

export default Camera
