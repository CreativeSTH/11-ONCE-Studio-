import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader } from '@react-three/fiber'

const ClockTexture = () => {
    const textureClock = useLoader(
        TextureLoader, 
        "./textures/matcaps/matcap1.png" 
    )
    // textureClock.minFilter = THREE.NearestFilter
    // textureClock.magFilter = THREE.NearestFilter
  return (
    <>
      <mesh position={[-0.08, -0.05, 0.1]} scale={[0.009, 0.009, 0.009]}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial color={"black"} envMapIntensity={0.5} roughness={1} metalness={0} flatShading={true} map={textureClock}/>
      </mesh>
       <mesh position={[-2.5, 0, -2]} scale={[0.15, 0.15, 0.15]}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial color={"black"} roughness={0} metalness={0} flatShading={true} map={textureClock}/>
      </mesh>
    </>
  )
}

export default ClockTexture
