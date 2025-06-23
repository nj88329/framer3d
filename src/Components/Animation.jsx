import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'


function Item({ url, scale, ...props }) {
  const imageRef = useRef()
  const visible = useRef(false)
  const [hovered, hover] = useState(false)

  const intersectRef = useIntersect((isVisible) => {
    visible.current = isVisible
  })

  const { height } = useThree((state) => state.viewport)

  useFrame((state, delta) => {
    if (!imageRef.current) return

    imageRef.current.position.y = THREE.MathUtils.damp(
      imageRef.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    )

    imageRef.current.material.zoom = THREE.MathUtils.damp(
      imageRef.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    )

    imageRef.current.material.grayscale = THREE.MathUtils.damp(
      imageRef.current.material.grayscale,
      hovered ? 1 : 0,
      4,
      delta
    )

    // Add this in useFrame
imageRef.current.rotation.x = THREE.MathUtils.damp(
  imageRef.current.rotation.x,
  hovered ? 0.1 : 0,
  4,
  delta
)

imageRef.current.rotation.y = THREE.MathUtils.damp(
  imageRef.current.rotation.y,
  hovered ? -0.2 : 0,
  4,
  delta
)

  })

  return (
    <group {...props}>
      <Image
        url={url}
        scale={scale}
          ref={(el) => {
      imageRef.current = el
      intersectRef.current = el // ✅ CORRECT
    }}

        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      />
    </group>
  )
}

function Items(){
  const { width: w, height: h } = useThree((state) => state.viewport)

  return (
    <Scroll>
      <Item url="/bike.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]}  />
      <Item url="/bikesports.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url="/Cruiser.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url="lambo.jpg" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url="mikebirdy.jpg" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url="hyundai.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url="whitebike.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url="lambo.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} /> 
       <Item url="lamborg.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </Scroll>
  )
}

const Animation = () => {
  return (
  // <motion.div className="w-full h-full overflow-y-auto mt-2">
    <Canvas orthographic camera={{zoom : 80}} 
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}
    >
       <color attach="background" args={['grey']} />
    <ScrollControls damping={6} pages={5}>
      <Items/>
         <Scroll html style={{ width: '100%' }}>
            <h1
              style={{
                position: 'absolute',
                top: '100vh',
                right: '10%',
                fontSize: 'clamp(2rem, 10vw, 10rem)',
                transform: 'translate3d(0, -100%, 0)',
                whiteSpace: 'nowrap',
              }}
            >
              Sassy
            </h1>

            <h1
              style={{
                position: 'absolute',
                top: '180vh',
                left: '10%',
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                whiteSpace: 'nowrap',
              }}
            >
              Comfort
            </h1>

            <h1
              style={{
                position: 'absolute',
                top: '260vh',
                right: '10%',
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                whiteSpace: 'nowrap',
              }}
            >
              Smooth
            </h1>

            <h1
              style={{
                position: 'absolute',
                top: '350vh',
                left: '10%',
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                whiteSpace: 'nowrap',
              }}
            >
              Safe
            </h1>

            <h1
              style={{
                position: 'absolute',
                top: '450vh',
                right: '10%',
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
              }}
            >
              Shimmery<br />
            </h1>
          </Scroll>

    </ScrollControls>    
    </Canvas>
    // </motion.div>
  )
}

export default Animation 