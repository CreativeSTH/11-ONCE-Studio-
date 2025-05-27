
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Nav from "./components/nav/Nav"
import Camera from "./components/Camera"
import Lights from "./components/Lights"
import { Giratiempo } from "./components/Giratiemp"
import { Suspense } from "react"
function App() {
  return (
    <div style={{width:'100%', height:'100vh'}}>
      <Nav />
      <Canvas shadows>
        <color attach="background" args={['black']} />
        <Camera/>
        <Lights/>
        <Suspense fallback={null}>
          <Giratiempo />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={3}
          enablePan={false}

          minAzimuthAngle={1}
          maxAzimuthAngle={2}

          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default App
