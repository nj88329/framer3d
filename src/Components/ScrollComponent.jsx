
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TransformControls, ScrollControls , Scroll } from '@react-three/drei';
import { Suspense, useEffect } from 'react';


const ScrollComponent = () => {
  return (
 <Suspense fallback={null}>
  <ScrollControls damping={6} pages={5}>
    <Scroll>
      
    </Scroll>
  </ScrollControls>
</Suspense>
  )
}

export default ScrollComponent
