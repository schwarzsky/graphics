/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/steve.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-1.9, 12, 0]} rotation={[0.17, -0.01, -0.03]}>
        <group position={[1.9, -12, 0]}>
          <mesh material={nodes.mesh_0_0.material} geometry={nodes.mesh_0_0.geometry} />
          <mesh material={nodes.mesh_0_1.material} geometry={nodes.mesh_0_1.geometry} />
          <mesh material={nodes.mesh_0_2.material} geometry={nodes.mesh_0_2.geometry} />
          <mesh material={nodes.mesh_0_3.material} geometry={nodes.mesh_0_3.geometry} />
          <mesh material={nodes.mesh_0_4.material} geometry={nodes.mesh_0_4.geometry} />
          <mesh material={nodes.mesh_0_5.material} geometry={nodes.mesh_0_5.geometry} />
        </group>
        <group position={[1.9, -12, 0]}>
          <mesh material={nodes.mesh_1_0.material} geometry={nodes.mesh_1_0.geometry} />
          <mesh material={nodes.mesh_1_1.material} geometry={nodes.mesh_1_1.geometry} />
          <mesh material={nodes.mesh_1_2.material} geometry={nodes.mesh_1_2.geometry} />
          <mesh material={nodes.mesh_1_3.material} geometry={nodes.mesh_1_3.geometry} />
          <mesh material={nodes.mesh_1_4.material} geometry={nodes.mesh_1_4.geometry} />
          <mesh material={nodes.mesh_1_5.material} geometry={nodes.mesh_1_5.geometry} />
        </group>
      </group>
      <group position={[1.9, 12, 0]} rotation={[-0.19, -0.01, 0.03]}>
        <group position={[-1.9, -12, 0]}>
          <mesh material={nodes.mesh_2_0.material} geometry={nodes.mesh_2_0.geometry} />
          <mesh material={nodes.mesh_2_1.material} geometry={nodes.mesh_2_1.geometry} />
          <mesh material={nodes.mesh_2_2.material} geometry={nodes.mesh_2_2.geometry} />
          <mesh material={nodes.mesh_2_3.material} geometry={nodes.mesh_2_3.geometry} />
          <mesh material={nodes.mesh_2_4.material} geometry={nodes.mesh_2_4.geometry} />
          <mesh material={nodes.mesh_2_5.material} geometry={nodes.mesh_2_5.geometry} />
        </group>
        <group position={[-1.9, -12, 0]}>
          <mesh material={nodes.mesh_3_0.material} geometry={nodes.mesh_3_0.geometry} />
          <mesh material={nodes.mesh_3_1.material} geometry={nodes.mesh_3_1.geometry} />
          <mesh material={nodes.mesh_3_2.material} geometry={nodes.mesh_3_2.geometry} />
          <mesh material={nodes.mesh_3_3.material} geometry={nodes.mesh_3_3.geometry} />
          <mesh material={nodes.mesh_3_4.material} geometry={nodes.mesh_3_4.geometry} />
          <mesh material={nodes.mesh_3_5.material} geometry={nodes.mesh_3_5.geometry} />
        </group>
      </group>
      <group position={[-5, 22, 0]} rotation={[-0.21, 0, 0]}>
        <group position={[5, -22, 0]}>
          <mesh material={nodes.mesh_4_0.material} geometry={nodes.mesh_4_0.geometry} />
          <mesh material={nodes.mesh_4_1.material} geometry={nodes.mesh_4_1.geometry} />
          <mesh material={nodes.mesh_4_2.material} geometry={nodes.mesh_4_2.geometry} />
          <mesh material={nodes.mesh_4_3.material} geometry={nodes.mesh_4_3.geometry} />
          <mesh material={nodes.mesh_4_4.material} geometry={nodes.mesh_4_4.geometry} />
          <mesh material={nodes.mesh_4_5.material} geometry={nodes.mesh_4_5.geometry} />
        </group>
        <group position={[5, -22, 0]}>
          <mesh material={nodes.mesh_5_0.material} geometry={nodes.mesh_5_0.geometry} />
          <mesh material={nodes.mesh_5_1.material} geometry={nodes.mesh_5_1.geometry} />
          <mesh material={nodes.mesh_5_2.material} geometry={nodes.mesh_5_2.geometry} />
          <mesh material={nodes.mesh_5_3.material} geometry={nodes.mesh_5_3.geometry} />
          <mesh material={nodes.mesh_5_4.material} geometry={nodes.mesh_5_4.geometry} />
          <mesh material={nodes.mesh_5_5.material} geometry={nodes.mesh_5_5.geometry} />
        </group>
      </group>
      <group position={[5, 22, 0]} rotation={[0.17, 0, 0]}>
        <group position={[-5, -22, 0]}>
          <mesh material={nodes.mesh_6_0.material} geometry={nodes.mesh_6_0.geometry} />
          <mesh material={nodes.mesh_6_1.material} geometry={nodes.mesh_6_1.geometry} />
          <mesh material={nodes.mesh_6_2.material} geometry={nodes.mesh_6_2.geometry} />
          <mesh material={nodes.mesh_6_3.material} geometry={nodes.mesh_6_3.geometry} />
          <mesh material={nodes.mesh_6_4.material} geometry={nodes.mesh_6_4.geometry} />
          <mesh material={nodes.mesh_6_5.material} geometry={nodes.mesh_6_5.geometry} />
        </group>
        <group position={[-5, -22, 0]}>
          <mesh material={nodes.mesh_7_0.material} geometry={nodes.mesh_7_0.geometry} />
          <mesh material={nodes.mesh_7_1.material} geometry={nodes.mesh_7_1.geometry} />
          <mesh material={nodes.mesh_7_2.material} geometry={nodes.mesh_7_2.geometry} />
          <mesh material={nodes.mesh_7_3.material} geometry={nodes.mesh_7_3.geometry} />
          <mesh material={nodes.mesh_7_4.material} geometry={nodes.mesh_7_4.geometry} />
          <mesh material={nodes.mesh_7_5.material} geometry={nodes.mesh_7_5.geometry} />
        </group>
      </group>
      <group position={[0, 24, 0]}>
        <group position={[0, -24, 0]}>
          <mesh material={nodes.mesh_8_0.material} geometry={nodes.mesh_8_0.geometry} />
          <mesh material={nodes.mesh_8_1.material} geometry={nodes.mesh_8_1.geometry} />
          <mesh material={nodes.mesh_8_2.material} geometry={nodes.mesh_8_2.geometry} />
          <mesh material={nodes.mesh_8_3.material} geometry={nodes.mesh_8_3.geometry} />
          <mesh material={nodes.mesh_8_4.material} geometry={nodes.mesh_8_4.geometry} />
          <mesh material={nodes.mesh_8_5.material} geometry={nodes.mesh_8_5.geometry} />
        </group>
        <group position={[0, -24, 0]}>
          <mesh material={nodes.mesh_9_0.material} geometry={nodes.mesh_9_0.geometry} />
          <mesh material={nodes.mesh_9_1.material} geometry={nodes.mesh_9_1.geometry} />
          <mesh material={nodes.mesh_9_2.material} geometry={nodes.mesh_9_2.geometry} />
          <mesh material={nodes.mesh_9_3.material} geometry={nodes.mesh_9_3.geometry} />
          <mesh material={nodes.mesh_9_4.material} geometry={nodes.mesh_9_4.geometry} />
          <mesh material={nodes.mesh_9_5.material} geometry={nodes.mesh_9_5.geometry} />
        </group>
      </group>
      <group position={[0, 24, 0]} rotation={[0.11, -0.09, 0.01]}>
        <group position={[0, -24, 0]}>
          <mesh material={nodes.mesh_10_0.material} geometry={nodes.mesh_10_0.geometry} />
          <mesh material={nodes.mesh_10_1.material} geometry={nodes.mesh_10_1.geometry} />
          <mesh material={nodes.mesh_10_2.material} geometry={nodes.mesh_10_2.geometry} />
          <mesh material={nodes.mesh_10_3.material} geometry={nodes.mesh_10_3.geometry} />
          <mesh material={nodes.mesh_10_4.material} geometry={nodes.mesh_10_4.geometry} />
          <mesh material={nodes.mesh_10_5.material} geometry={nodes.mesh_10_5.geometry} />
        </group>
        <group position={[0, -24, 0]}>
          <mesh material={nodes.mesh_11_0.material} geometry={nodes.mesh_11_0.geometry} />
          <mesh material={nodes.mesh_11_1.material} geometry={nodes.mesh_11_1.geometry} />
          <mesh material={nodes.mesh_11_2.material} geometry={nodes.mesh_11_2.geometry} />
          <mesh material={nodes.mesh_11_3.material} geometry={nodes.mesh_11_3.geometry} />
          <mesh material={nodes.mesh_11_4.material} geometry={nodes.mesh_11_4.geometry} />
          <mesh material={nodes.mesh_11_5.material} geometry={nodes.mesh_11_5.geometry} />
        </group>
      </group>
    </group>
  )
}