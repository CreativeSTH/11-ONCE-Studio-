import { Text } from '@react-three/drei'

function TextxPrueba() {
  return (
    <>
    <Text
        position={[-0.5, 0, -0.3]} // detrás del objeto
        rotation={[0, 0.3, 0]}
        fontSize={0.08}
        color="#4A90E2"
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/Covered.ttf" // opcional: fuente personalizada
        >
        MAKING IT REAL
    </Text>
    </>
  )
}

export default TextxPrueba
