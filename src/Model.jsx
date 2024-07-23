// src/Model
import React from 'react';
import {  PerspectiveCamera, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { state } from './store';
 

export const Model =(props) => {
  const { nodes, materials } = useGLTF('/EscenarioCompleto.glb');
  

  const snap = useSnapshot(state)

 
  useFrame((state, delta) =>
    easing.dampC(
      materials['PBR'].color,
      snap.selectedColor,
      0.25,
      delta
    )
  );
  return (
    
   
    <group {...props } position={[60,0,-90]} scale={0.50} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={10000000000}
        near={0.01}
        fov={20.2}
        position={[22, -30, 1040]}
        
      />
      <group position={[-128, 68, -91]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Escenario.geometry}
          material={materials['Leather 05']}
          position={[124, 230, -181]}
          scale={1.2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AK.geometry}
          material={materials.AK}
          position={[-136.825, -12.031, 72.71]}
        />
        <group position={[119.981, -20.992, -47.65]} rotation={[0, 0, 0.035]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['_PATILLA_DCHA-PBR'].geometry}
            material={materials.PBR}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['_PATILLA_DCHA-bandera'].geometry}
            material={materials.bandera}
          />
        </group >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._PATILLA_IZQUI.geometry}
          material={materials.PBR}
          position={[-91.32, -23.173, -31.203]}
          rotation={[-0.022, -0.571, -0.041]}
        />
        <group position={[-15.863, -13.826, 70.474]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['OJOS_COMPLETOS-PBR'].geometry}
            material={materials.PBR}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['OJOS_COMPLETOS-Tinted_Glass'].geometry}
            material={materials['Tinted Glass']}
          />
        </group>
      </group>
      <group position={[-140, 68.117, -91.971]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AK_1.geometry}
          material={materials.AK}
          position={[174.047, 25.581, -71.534]}
          rotation={[0, -1.359, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._PATILLA_DCHA_1.geometry}
          material={materials.PBR}
          position={[345.62, 16.619, 154.296]}
          rotation={[0, -1.359, 0.035]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._PATILLA_IZQUI_1.geometry}
          material={materials.PBR}
          position={[285.196, 14.438, -48.849]}
          rotation={[-3.088, -1.211, -3.121]}
        />
        <group position={[201.618, 23.785, 46.266]} rotation={[0, -1.359, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['OJOS_COMPLETOS-PBR_1'].geometry}
            material={materials.PBR}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['OJOS_COMPLETOS-Glass'].geometry}
            material={materials.Glass}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/EscenarioCompleto.glb')

  
  
  
      

