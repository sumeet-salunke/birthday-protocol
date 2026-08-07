import { motion } from 'framer-motion';

export default function Scene8_Ending({ onReset }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full flex flex-col items-center justify-center bg-black font-cyber text-cyber-cyan relative scanlines"
    >
      <div className="border border-cyber-cyan/30 bg-cyber-dark/80 p-8 md:p-16 text-center shadow-[0_0_20px_rgba(0,255,204,0.2)] glass-panel max-w-lg w-[90%]">
        <h2 className="text-3xl md:text-4xl mb-8 text-glow-cyan uppercase tracking-widest">Mission Complete</h2>
        
        <div className="space-y-6 text-left inline-block">
          <div>
            <span className="text-gray-500 block mb-1 uppercase text-sm tracking-widest">Objective:</span>
            <span className="text-white text-lg md:text-xl">Make someone smile</span>
          </div>
          <div>
            <span className="text-gray-500 block mb-1 uppercase text-sm tracking-widest">Status:</span>
            <span className="text-cyber-cyan text-lg md:text-xl animate-pulse font-bold tracking-widest">SUCCESS</span>
          </div>
        </div>

        <div className="mt-12 text-gray-400 text-sm md:text-base tracking-wider">
          Thank You for Visiting
        </div>
        
        <div className="mt-6 flex justify-center items-center cursor-pointer" onClick={onReset}>
          <span className="mr-2 text-cyber-blue font-bold text-xl">&gt;</span>
          <span className="w-3 h-5 bg-cyber-cyan animate-pulse"></span>
        </div>
      </div>
    </motion.div>
  );
}
