import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Scene5_MainReveal({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ backgroundColor: "#000000" }}
      animate={{ backgroundColor: "#180a22" }} 
      transition={{ duration: 2, ease: "easeInOut" }}
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bday-gold via-bday-pink to-bday-orange tracking-wider drop-shadow-[0_0_20px_rgba(255,105,180,0.5)]">
          Surprise!
        </h1>
      </motion.div>

      {/* Warm glow background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 3 }}
        className="absolute w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] rounded-full blur-[120px] bg-gradient-to-tr from-bday-pink/40 to-bday-gold/20 mix-blend-screen pointer-events-none"
      ></motion.div>

      {/* Particle effect could go here, but keeping it elegant and light for this transition */}
    </motion.div>
  );
}
