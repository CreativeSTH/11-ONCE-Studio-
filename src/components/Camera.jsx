import { PerspectiveCamera } from "@react-three/drei"

const Camera = () => {
  return (
    <PerspectiveCamera 
        makeDefault
        position={[1, 0, 1]}
        fov={7}
    />
  )
}

export default Camera
