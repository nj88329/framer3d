import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo , useEffect} from 'react';
import { useLoader } from '@react-three/fiber';


export function Scene(props) {
  const { nodes, materials } = useGLTF('/scene.glb');


  //  const texturedMaterials = useMemo(() => {
  //   const loadedMaterials = {};

 useEffect(() => {
  Object.entries(nodes).forEach(([name, node]) => {
    if (node.isMesh || node.type === 'Mesh') {
      console.log(`Mesh: ${name}`);
      console.log('Material:', node.material);
      if (node.material && node.material.map) {
        console.log('Texture MAP:', node.material.map);
      } else {
        console.log('❌ NO texture assigned');
      }
    }
  });
}, []);


 
  return (
    // <group {...props} dispose={null}>
    //   {nodes.Object_3?.geometry && (
    //     <mesh  castShadow receiveShadow
    //       geometry={nodes.Object_3.geometry}
    //       material={materials["Aston_Martin_V8_Vantage_V600_1998_by_Alex_Ka"]
    //          ?? Object.values(materials)[0]
    //         }
    //     />
    //         //  <mesh geometry={nodes.Object_4.geometry} material={materials["Vantage600"]} />
    //         // <mesh geometry={nodes.Object_3.geometry} material={materials["Aston_Martin_V8_Vantage_V600_1998_by_Alex_Ka"]} />,
    //         // <mesh geometry={nodes.Object_4.geometry} material={materials["Vantage600"]} />
    //   )}
    // </group>
        <group {...props} dispose={null}>
      {Object.entries(nodes).map(([name, node]) => {
        
        if (node.type === 'Mesh' && node.geometry) {
          return (
           <mesh
              key={name}
              geometry={node.geometry}
              material={ materials[node.material]}
              // castShadow
              // receiveShadow
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload('/scene.glb')

// ThreeD.jsx
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Suspense } from 'react';
// import * as THREE from 'three';

// function ThreeD() {
//   return (
//     <div style={{ height: '100vh', width: '100vw' }}>
//       <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
//         <ambientLight intensity={1} />
//         <directionalLight position={[10, 10, 10]} intensity={2} />
//         <Suspense fallback={null}>
//           {/* <Scene /> */}
//           <Cube/>
//         </Suspense>
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

// function Scene(props) {
//   const { nodes, materials } = useGLTF('/scene.gltf');

//   return (
//     <group {...props} scale={[0.01, 0.01, 0.01]} position={[0, -1, 0]}>
//       {nodes.Object_3?.geometry && (
//         <mesh geometry={nodes.Object_3.geometry}>
//           <meshStandardMaterial color="lime" side={THREE.DoubleSide} />
//         </mesh>
//       )}
//     </group>
//   );
// }


// function Cube(props) {
//   return <>
//   <group {...props} scale={[0.01, 0.01, 0.01]} position={[0, -1, 0]}>
//     <mesh>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="hotpink" />
//       </mesh>
//     </group>
//   </>
// }

// export default ThreeD;
