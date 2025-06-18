import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useAnimation, useInView } from 'framer-motion';
import MiddleComp from './Components/MiddleComp';
import WelcomeMotion from './Components/WelcomeMotion';
import ThreeD from './Components/ThreeD';


const variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Body = () => {
  const ref = useRef(null);
  const inViewRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isInView = useInView(inViewRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20, bounce: 2 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20, bounce: 2 });

  const handlePointerMove = (e) => {
    if (!ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - bounds.x - bounds.width / 2);
    mouseY.set(e.clientY - bounds.y - bounds.height / 2);
  };

  return (
    <>
      <motion.div className="w-screen overflow-x-hidden overflow-y-scroll mt-2">
        <div className="grid grid-cols-6 gap-1 h-full z-0">
          {/* Left Component */}
          <motion.div
            className="col-span-1 p-4 text-red-500 rounded-lg shadow-lg shadow-cyan-500/50 border-yellow border-r-2 border-yellow-600 mr-2"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, backgroundColor: 'black' }}
            whileHover={{
              rotateX: -30,
              rotateY: -10,
              z: 100,
              scale: 1.1,
              damping: 20,
              backgroundColor : 'purple'
            }}
            transition={{
             type: "spring",
              stiffness: 150,
              damping: 12,
              mass: 0.5,
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: 1000,
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            }}
          />

          {/* Middle Content */}
          <motion.div className="col-span-4 p-4 bg-black">
            <motion.div
            className =  'animate-pulse'
            ><WelcomeMotion /></motion.div>
            <motion.div
              ref={inViewRef}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <MiddleComp />
            </motion.div>
          </motion.div>

          {/* Right Component */}
          <motion.div
            className="col-span-1 p-4 text-red-500 rounded-lg shadow-rg shadow-cyan-500/50 border-yellow border-l-2 border-yellow-600 ml-2"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, backgroundColor: 'black' }}
            whileHover={{
              rotateX: -30,
              rotateY: 10,
              z: 100,
              scale: 1.1,
              damping: 20,
              backgroundColor:'purple'
            }}
            transition={{
              rotateX: { duration: 0.3 },
              rotateY: { duration: 0.3 },
              z: { duration: 0.2 },
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: 1000,
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            }}
          >
            <motion.div
              className="x bg-pink-500 rounded-full fixed bottom-10 translate-x-1/2 z-[10]"
              animate={{ y: [0, 500, 0], scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#ff0088",
                borderRadius: "50%",
                position: "fixed",
                right: 40,
                top: 100,
                zIndex: 50,
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="h-screen"></div>
      </motion.div>
      <ThreeD/>
    </>
  );
};

export default Body;
