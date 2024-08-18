import { useAnimations, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import React, { useEffect, useState } from 'react'

const Fox = () => {
    // const fox = useGLTF('/models/gltf/Fox.gltf')
    const fox = useGLTF('/models/glTF/Fox.gltf')
    const animations = useAnimations(fox.animations, fox.scene)
    const [currentAnimation, setCurrentAnimation] = useState('Survey');
    const animationNames = ['Survey', 'Walk'];


    // const { positionX, positionY, positionZ} = useControls('contact shadows', {
    //     positionX: { value: 0, min: -10, max: 10, step: 0.1 },
    //     positionY: { value: 0, min: -10, max: 10, step: 0.1 },
    //     positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
    // })
    
    useEffect(()=> {
        const action = animations.actions[currentAnimation];
        action.reset().fadeIn(1).play();

        return () => {
            action.fadeOut(1);
        };
    },[currentAnimation, animations.actions])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAnimation(prev => {
                const currentIndex = animationNames.indexOf(prev);
                const nextIndex = (currentIndex + 1) % animationNames.length;
                return animationNames[nextIndex];
            });
        }, 8000); 

        return () => clearInterval(interval);
    }, [animationNames]);
    
  return <>
    <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04}/>
        <ambientLight intensity={ 0.5 } />

        <primitive 
            object={ fox.scene }
            scale={0.035}
            position={[-0.3, -1.2, -0.3]}
            rotation-y={-0.1}
            />
  </>
}

export default Fox