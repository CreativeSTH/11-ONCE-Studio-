
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Nav from "./components/nav/Nav"
import Camera from "./components/Camera"
import Lights from "./components/Lights"
import Orbit from "./components/Orbit"
import StarsPresets from "./components/StarsPresets"
import EnvironmentPresets from "./components/EnvironmentPresets"
import ClockTexture from "./components/ClockTexture"
import TextxPrueba from "./components/TextxPrueba"
import { Giratiempo } from "./components/Giratiemp"

function App() {
  return (
    <div style={{width:'100%', height:'100vh'}}>
      <Nav />
      <Canvas shadows>
        <color attach="background" args={['black']} />
        <EnvironmentPresets />
        <Camera/>
        <Lights/>
        <Suspense fallback={null}>
          <Giratiempo />
          <ClockTexture />
          <TextxPrueba />
        </Suspense>
        <Orbit/>
        <StarsPresets />
      </Canvas>
    </div>
  )
}

export default App
