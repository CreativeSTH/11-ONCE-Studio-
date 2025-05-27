import React from 'react'

const Lights = () => {
  return (
    <>
        <directionalLight  castShadow
          intensity={1}
          position={[1, 1, 1]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ambientLight color={'#ffffff'} intensity={0.2}/>
    </>
  )
}

export default Lights
