import React from 'react'
import {Environment, Float, GradientTexture, MeshDistortMaterial, PresentationControls, Sphere, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'


const Mac = () => {
    const computer = useGLTF('/models/model.gltf')
    const mobile = useGLTF('/models/mob_model.gltf')
    const isMobile = window.innerWidth < 769;

  return <>
    <Environment preset='city'/>
    <Sphere args={[1,100,200]} position={[isMobile ? 4: 8.5, isMobile ? -1 : -2.75, -4.5]} scale={isMobile? 2.5 : 4} wireframe>
        <MeshDistortMaterial attach="material" distort={0.4} speed={0.8} color={"#FF852C"}>
            {/* <GradientTexture stops={[0, 0.7]} colors={['#fedb60', '#ff806f']} size={100} /> */}
        </MeshDistortMaterial>
    </Sphere>
            <Float speed={1} rotationIntensity={0.4}>
                <primitive object={computer.scene} position={[isMobile? -0.5: 0.9, isMobile? -0.2: -1,0.4]} scale={isMobile? 0.3: 0.5} rotation={[-0.2,-0.2,0]}/>
            </Float>
        
            <Float speed={1.2} rotationIntensity={0.6} >
                <primitive object={mobile.scene} position={[isMobile? -0.5: 2.2, isMobile? -0.2: -1.7,1.3]} scale={isMobile? 0.2: 0.35} rotation={[1.0,-1.8,1.0]}/>
            </Float>
            
  </>
}

export default Mac