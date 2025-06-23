
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Environment, Effects , useGLTF , CameraControls} from '@react-three/drei';

// import { Suspense } from 'react'

// const ThreeD = () => {

//   return (
//     <div className='m-10'>
//          <Canvas camera={{ position: [0, 1, 5], fov: 50 }} >
//             <Sphere/>
//                <ambientLight intensity={1 } />
//                <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[15, 15, 1]} />
//               <directionalLight color="red" position={[5, 5, 5]} />
//               <OrbitControls makeDefault />
//                 <Suspense fallback={null}>
//                    <Scene scale={[0.01, 0.01, 0.01]} position={[0, -1, 0]}/>
//                 </Suspense>
             
            
             
//          </Canvas>
//     </div>
//   )
// }



// function Scene(props) {
//   const { nodes, materials } = useGLTF('/scene.gltf');

//   return (
//     <group {...props} dispose={null}>
//         {/* <mesh geometry={nodes.Object_2.geometry} material={materials["material"]} />
//         <mesh geometry={nodes.Object_3.geometry} material={materials["Aston_Martin_V8_Vantage_V600_1998_by_Alex_Ka"]} />
//         <mesh geometry={nodes.Object_4.geometry} material={materials["Vantage600"]} /> */}
//         <mesh geometry={nodes.Object_3.geometry} material={materials["Aston_Martin_V8_Vantage_V600_1998_by_Alex_Ka"]} />

//     </group>
//   );
// }


// export default ThreeD


// import { Canvas } from '@react-three/fiber'
// import { OrbitControls , Environment } from '@react-three/drei';
// import Sphere from './Sphere' 
// import { Suspense } from 'react';
// import { Scene } from './Scene';
// const ThreeD = () => {
//   return (
//   <div className = "h-screen w-screen" >
//      {/* <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
//         <ambientLight intensity={1} />
//         <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[15, 15, 1]} />
//        <directionalLight position={[10, 10, 10]} intensity={5} />
//       <Environment preset="city" background />
//       <OrbitControls enableZoom={true} />

//         <Suspense fallback={null}>
         
//           <Scene scale={[1, 1, 1]} position={[0, -1, 0]} />
//         </Suspense>
//       </Canvas> */}
//       <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
//   <ambientLight intensity={1} />
//   <directionalLight position={[10, 10, 10]} intensity={1.5} />
//   <Environment preset="city" background />
//   {/* <Suspense fallback={null}>
//     <primitive object={Scene} scale={[1, 1, 1]}  position={[0, -1, 0]} />
//   </Suspense> */}
//      <Suspense fallback={null}>
//           <Scene scale={[1, 1, 1]} position={[0, -1, 0]} />
//         </Suspense>
//   <OrbitControls />
// </Canvas>

//   </div>
//   )
// }




// export default ThreeD;



// ThreeD.jsx
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useEffect } from 'react';
 import Sphere from './Sphere' ;
 import ScrollComponent from './ScrollComponent';

function SceneModel() {
  const { scene } = useGLTF('/scene.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        // Force material to be double-sided
        child.material.side = THREE.DoubleSide;
        child.material.needsUpdate = true;

        // Log materials & textures
        console.log(`Mesh: ${child.name}`);
        console.log(`→ Material: ${child.material.name}`);
        console.log(`→ Texture map:`, child.material.map);
      }
    });
  }, [scene]);
  return <primitive object={scene} scale={[2.4, 2.4,2.4]}     
  />;
}

useGLTF.preload('/scene.glb');

export default function ThreeD() {
  return (
    <div 
    // style={{ height: '100vh', width: '100vw' }}
    className = 'w-screen h-screen' 
    >
      <Canvas
           // Start off-screen to the left
        camera={{ position: [1, 2, 5], fov: 45 }}
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
      >

      {/* <SceneModel position={[0, 0, 0.85]} />
      <SceneModel position={[0, 0, -0.85]} rotation={[0, 0.5, Math.PI]} scale={-1} /> */}
        {/* Lights */}

        <ambientLight intensity={2} />
        <directionalLight position={[3, 3, 3]} intensity={2.5} castShadow />

        {/* Load 3D model */}
        <Suspense fallback={null}>
          {/* <SceneModel /> */}
          <ScrollComponent/>
           <Sphere/>
        </Suspense>
        {/* Camera controls */}
        <OrbitControls makeDefault />
        
      </Canvas>
    </div>
  );
}
