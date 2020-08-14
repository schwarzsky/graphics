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

function Torusses(props){
    let count = props.count;

    const TorusGroup = useRef(null)

    {/* const Torusses = [TorusGeometry1, TorusGeometry2, TorusGeometry3, TorusGeometry4, TorusGeometry5, TorusGeometry6, TorusGeometry7, TorusGeometry8, TorusGeometry9, TorusGeometry10, TorusGeometry11]; */}

    useFrame(({clock}) => {
        {/*
        var i = 0.01;

        Torusses.forEach((torus, index) => {
            torus.current.rotation.z = Math.sin(clock.getElapsedTime()) * Math.PI/4 * index;

            i += 1;

            if(i = 11){
                i = 0;
            }
        });
        */}   

        if(TorusGroup.current){
            TorusGroup.current.children.forEach((child, i) => {
                child.rotation.z = (Math.sin(clock.getElapsedTime()) * Math.PI/4 * i);
            })
        }
      });

    return(
    <group ref={TorusGroup}>
        {/*
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
        */}
        {Array(count)
            .fill()
            .map((item, i) => (
                <Torus key={i} args={[10, 0.1]} position={[0, 0, (i + 1) * -5]} />
            ))}
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
            <Torusses count={100}/>
            <Effects />
        </Canvas>
    )
}

export default Spinning;