// WelcomeMotion.jsx
import { motion } from "framer-motion";

export default function WelcomeMotion() {
  return (
    <div className=" bg-black overflow-hidden">
      <motion.h4
        className="text-[40px] text-red-500 font-serif z-10"
        animate={{ x: "100vw" }}
        initial={{ x: "-100%" }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        WELCOME
      </motion.h4>
    </div>
  );
}
