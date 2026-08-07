import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Thank You ❤️",
  "For every wish.",
  "Every message.",
  "Every phone call.",
  "Every laugh.",
  "Every memory.",
  "You truly made my day special.",
  "I'm grateful to have wonderful people like you.",
  "Thank you for celebrating this journey with me."
];

export default function Scene6_MainMessage({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length) {
      const timer = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 3000); // Wait 3 seconds per message
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#180a22] font-sans text-center px-4 relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#180a22] opacity-80 z-0"
      ></motion.div>
      
      <AnimatePresence mode="wait">
        {index < messages.length && (
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`z-10 ${index === 0 ? 'text-5xl md:text-7xl font-bold text-bday-pink' : 'text-3xl md:text-5xl font-medium text-white'}`}
          >
            {messages[index]}
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
}
