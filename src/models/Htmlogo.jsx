import React from 'react'
import { Float, useGLTF } from "@react-three/drei";


const Htmlogo = () => {
    const logo = useGLTF('/models/')
    const isMobile = window.innerWidth < 769;

    console.log(logo.scene);

  return (
    // <Float position={[0, 0.65, 0]} rotation={[0, 0.6, 0]} speed={2} >
    <primitive
        object={logo.scene}
        position={[0]}
        scale={10}
        rotation={[0, 0, 0]}
      />
      // </Float>
  )
}

export default Htmlogo