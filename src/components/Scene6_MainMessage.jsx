import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "System Override Initiated...",
  "Decrypting Core Protocol: Gratitude.",
  "Thank You.",
  "Every message, every call, every shared laugh...",
  "You didn't just wish me a happy birthday.",
  "You reminded me how incredibly lucky I am.",
  "Thank you for being a part of my story."
];

export default function Scene6_MainMessage({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(messages[index]);
        
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Female') || v.name.includes('Natural') || v.name.includes('Samantha')));
        if (preferredVoice) utterance.voice = preferredVoice;
        
        utterance.rate = 0.9;
        utterance.pitch = index < 2 ? 0.7 : 1.1; // Robotic for the first two
        
        window.speechSynthesis.speak(utterance);
      }

      const timer = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 3500); 
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Pre-load voices
      window.speechSynthesis.getVoices();
    }
    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#180a22] font-sans text-center px-4 relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#180a22] opacity-80 z-0"
      ></motion.div>
      
      <AnimatePresence mode="wait">
        {index < messages.length && (
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`z-10 px-4 max-w-4xl ${index === 2 ? 'text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bday-gold via-bday-pink to-bday-orange drop-shadow-[0_0_25px_rgba(255,105,180,0.6)]' : 'text-3xl md:text-5xl font-medium text-white/90 drop-shadow-lg'}`}
          >
            {messages[index]}
          </motion.h2>
        )}
      </AnimatePresence>

      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 z-[-1] opacity-30 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,105,180,0.4) 0%, transparent 50%)',
          backgroundSize: '100% 100%'
        }}
      ></motion.div>
    </div>
  );
}
