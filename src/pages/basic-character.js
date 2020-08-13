import React, {Suspense} from 'react';

import {Canvas} from 'react-three-fiber';
import './styles/basic-character.css';
import {usePlane, Physics} from 'use-cannon';
import { softShadows, OrbitControls } from 'drei';

import Character from '../models/character';

softShadows();

function Plane(props) {
    const [ref] = usePlane(() => ({ mass: 0, ...props }))

    return (
      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[50, 50]}/>
        <meshPhongMaterial attach="material" color="#172017" />
      </mesh>
    )
}

const BasicCharacter = () => {
    return(
        <Canvas shadowMap colorManagement camera={{ position: [0, 0, 50], fov: 60 }}>
            <Suspense fallback='null'>
            <ambientLight />
            <pointLight position={[0, 0, 5]} />
            <OrbitControls />
                <Physics>
                    <color attach="background" args={["#ccbdff"]} />
                    <Plane position={[ 0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}/>
                    <Character />
                </Physics>
            </Suspense>
        </Canvas>
    )
}

export default BasicCharacter;