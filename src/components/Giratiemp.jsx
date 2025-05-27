import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useLoader } from '@react-three/fiber'
import { MeshMatcapMaterial, MeshStandardMaterial } from 'three'

export function Giratiempo(props) {
  const textureClock = useLoader(
      TextureLoader, 
      "./textures/matcaps/matcap1.png" 
  )
   const matcapMaterial = React.useMemo(
    () => new MeshMatcapMaterial({ matcap: textureClock, flatShading: true }),
    [textureClock]
  )

  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/giratiemp.glb')
  const { actions } = useAnimations(animations, group)

  // ▶️ Play animation
  React.useEffect(() => {
    const firstAction = actions[Object.keys(actions)[0]]
    if (firstAction) {
      firstAction.play()
    }
    const secondAction = actions[Object.keys(actions)[1]]
    if (secondAction) {
      secondAction.play()
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="transform1" />
        <group name="transform2" />
        <mesh name="pCylinder1" geometry={nodes.pCylinder1.geometry} material={matcapMaterial} receiveShadow  rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
        <mesh name="pCylinder2" geometry={nodes.pCylinder2.geometry} material={matcapMaterial} receiveShadow  rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
        <mesh name="pCylinder3" geometry={nodes.pCylinder3.geometry} material={matcapMaterial} receiveShadow  rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
        <mesh name="svgMesh1" geometry={nodes.svgMesh1.geometry} material={matcapMaterial} receiveShadow  position={[0.002, -0.017, 0.02]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.003}>
          <group name="transform1001" />
          <group name="transform2001" />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/giratiemp.glb')
