import { OrbitControls } from "@react-three/drei"

function Orbit() {
  return (
    <>
      <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={3}
          enablePan={false}

          minAzimuthAngle={1}
          maxAzimuthAngle={2}

          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 4}
          rotateSpeed={0.2}
        />
    </>
  )
}

export default Orbit
