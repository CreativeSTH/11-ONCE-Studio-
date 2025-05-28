import { Stars } from "@react-three/drei"

function StarsPresets() {
  return (
    <>
      <Stars radius={10} depth={200} count={10000} factor={10} saturation={2} fade speed={0.4} />
    </>
  )
}

export default StarsPresets
