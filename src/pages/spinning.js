import React, {useRef, useState} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';

import Effects from '../effects/postprocess';
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

    useFrame(({clock}) => { 

        if(TorusGroup.current){
            TorusGroup.current.children.forEach((child, i) => {
                child.rotation.z = (Math.sin(clock.getElapsedTime()) * Math.PI/4 * i);
            })
        }
      });

    return(
    <group ref={TorusGroup}>
        {Array(count)
            .fill()
            .map((item, i) => (
                <Torus key={i} args={[10, 0.1]} position={[0, 0, (i + 1) * -5.1]} />
            ))}
    </group>);
}

const Spinning = () => {
    return(
        <>
        <Canvas>
            <color attach="background" args={["black"]} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box />
            <Torusses count={20}/>
            <Effects />
        </Canvas>
        </>
    )
}

export default Spinning;