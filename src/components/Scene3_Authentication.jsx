import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Scene3_Authentication({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black font-cyber text-cyber-cyan relative">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-8 md:p-12 w-[90%] max-w-lg relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-cyber-blue shadow-[0_0_15px_#00f3ff]"></div>
        
        <h2 className="text-2xl md:text-3xl mb-6 text-center text-glow-blue tracking-widest">VISITOR DETECTED</h2>
        
        <div className="space-y-4 text-sm md:text-lg">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-between border-b border-cyber-cyan/30 pb-2">
            <span className="text-gray-400">Status:</span>
            <span className="text-cyber-cyan">Friendly</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex justify-between border-b border-cyber-cyan/30 pb-2">
            <span className="text-gray-400">Threat Level:</span>
            <span className="text-cyber-cyan">0%</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex justify-between border-b border-cyber-cyan/30 pb-2">
            <span className="text-gray-400">Purpose:</span>
            <span className="text-cyber-cyan">Birthday Wishes</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 2.5 }}
          className="mt-8 text-center text-cyber-blue animate-glow-pulse"
        >
          <div className="text-xl md:text-2xl mb-2 font-bold tracking-widest">Authentication Successful</div>
          <div className="text-lg md:text-xl text-cyber-cyan font-bold tracking-[0.2em] bg-cyber-blue/20 py-2">ACCESS GRANTED</div>
        </motion.div>

        {/* Scanning Line */}
        <motion.div
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 1.5, repeat: 2, ease: "linear" }}
          className="absolute left-0 w-full h-0.5 bg-cyber-cyan shadow-[0_0_10px_#00ffcc] pointer-events-none"
        ></motion.div>
      </motion.div>
    </div>
  );
}
