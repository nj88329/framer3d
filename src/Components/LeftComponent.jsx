 import {  useFrame } from '@react-three/fiber';
    import { useRef, useState } from 'react';

const LeftComponent = () => {
 const mesh = useRef();
      const [progress, setProgress] = useState(0);

      useFrame(() => {
        if (progress < 1) {
          setProgress(progress + 0.02);
          mesh.current.position.x = -5 + progress * 5;
        }
      });

      return (
        <mesh ref={mesh} position={[-5, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="red" />
        </mesh>
      );
    }

export default LeftComponent
