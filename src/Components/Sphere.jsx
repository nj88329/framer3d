import React from 'react';
import { useTexture } from '@react-three/drei';

const Sphere = () => {
  const texture = useTexture('/myImage.jpg'); // Make sure it's in public/

  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} color="hotpink" />
    </mesh>
  );
};

export default Sphere;
