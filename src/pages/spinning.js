import React, {useRef, useState, useMemo} from 'react';

import * as THREE from 'three';

import {Canvas, useFrame} from 'react-three-fiber';

import Effects from '../effects/postprocess'
import {Torus} from 'drei';

function Box(props) {
    const mesh = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
  
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
}

function Torusses(){

    const TorusGeometry1 = useRef(null);
    const TorusGeometry2 = useRef(null);
    const TorusGeometry3 = useRef(null);
    const TorusGeometry4 = useRef(null);
    const TorusGeometry5 = useRef(null);
    const TorusGeometry6 = useRef(null);
    const TorusGeometry7 = useRef(null);
    const TorusGeometry8 = useRef(null);
    const TorusGeometry9 = useRef(null);
    const TorusGeometry10 = useRef(null);
    const TorusGeometry11 = useRef(null);

    useFrame(() => {
        TorusGeometry1.current.rotation.z = TorusGeometry1.current.rotation.z += 0.10;
        TorusGeometry2.current.rotation.z = TorusGeometry2.current.rotation.z += 0.09;
        TorusGeometry3.current.rotation.z = TorusGeometry3.current.rotation.z += 0.08;
        TorusGeometry4.current.rotation.z = TorusGeometry4.current.rotation.z += 0.07;
        TorusGeometry5.current.rotation.z = TorusGeometry5.current.rotation.z += 0.06;
        TorusGeometry6.current.rotation.z = TorusGeometry6.current.rotation.z += 0.05;
        TorusGeometry7.current.rotation.z = TorusGeometry7.current.rotation.z += 0.04;
        TorusGeometry8.current.rotation.z = TorusGeometry8.current.rotation.z += 0.03;
        TorusGeometry9.current.rotation.z = TorusGeometry9.current.rotation.z += 0.02;
        TorusGeometry10.current.rotation.z = TorusGeometry10.current.rotation.z += 0.01;
        TorusGeometry11.current.rotation.z = TorusGeometry11.current.rotation.z += 0.01;
      });

    return(
    <group>
        <Torus ref={TorusGeometry1} args={[10, 0.2]} rotation={[0, 0, 0]} position={[0, 0, -5]} />
        <Torus ref={TorusGeometry2} args={[10, 0.2]} rotation={[0, 0, 3]} position={[0, 0, -10]} />
        <Torus ref={TorusGeometry3} args={[10, 0.2]} rotation={[0, 0, 6]} position={[0, 0, -15]} />
        <Torus ref={TorusGeometry4} args={[10, 0.2]} rotation={[0, 0, 9]} position={[0, 0, -20]} />
        <Torus ref={TorusGeometry5} args={[10, 0.2]} rotation={[0, 0, 12]} position={[0, 0, -25]} />
        <Torus ref={TorusGeometry6} args={[10, 0.2]} rotation={[0, 0, 15]} position={[0, 0, -30]} />
        <Torus ref={TorusGeometry7} args={[10, 0.1]} rotation={[0, 0, 18]} position={[0, 0, -35]} />
        <Torus ref={TorusGeometry8} args={[10, 0.1]} rotation={[0, 0, 21]} position={[0, 0, -40]} />
        <Torus ref={TorusGeometry9} args={[10, 0.1]} rotation={[0, 0, 24]} position={[0, 0, -45]} />
        <Torus ref={TorusGeometry10} args={[10, 0.1]} rotation={[0, 0, 27]} position={[0, 0, -50]} />
        <Torus ref={TorusGeometry11} args={[10, 0.1]} rotation={[0, 0, 30]} position={[0, 0, -55]} />
    </group>);
}

const Spinning = () => {
    return(
        <Canvas
        >
            <color attach="background" args={["black"]} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box />
            <Torusses />
            <Effects />
        </Canvas>
    )
}

export default Spinning;