
// src/Scene

import { Canvas } from '@react-three/fiber';
import { 
Environment,
Center, 
} from '@react-three/drei';
import { Model } from './Model';
import { CameraRig } from './CameraRig';










export const App = ({position = [0,0,200], fov = 40 }) => {
 

  return (
    
    <Canvas 
    shadows
    camera={{position, fov}}
    eventSource={document.getElementById('root')}
    eventPrefix='client' >
      <ambientLight intensity={0.1} />
      <Environment preset="city" />
      <directionalLight
          castShadow
          position={[2,2, 2]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
       
        <CameraRig>
        <Center>
          <Model/>
          
        </Center>
        </CameraRig>
    </Canvas>
    
  );
}
        
        
        

        
      
        
        
        
        
        
        
          
          
        
          
        
          
              
          
         
        
           
        
        


