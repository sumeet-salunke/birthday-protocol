import { useEffect } from 'react';
import CyberParticles from './CyberParticles';

export default function Scene1_BlackScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#02050a] relative overflow-hidden">
      <CyberParticles />
      
      <div className="relative z-10 w-[90%] max-w-3xl aspect-video bg-black/80 backdrop-blur-sm rounded-lg border border-cyber-cyan/20 shadow-[0_0_60px_rgba(0,243,255,0.1)] overflow-hidden flex flex-col">
        {/* Terminal Header */}
        <div className="h-8 bg-[#0a0a16] border-b border-cyber-cyan/10 flex items-center px-4 justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
          </div>
          <div className="text-xs text-cyber-cyan/50 font-cyber tracking-widest">SYSTEM_TERMINAL</div>
        </div>
        
        {/* Terminal Body */}
        <div className="flex-1 p-6 md:p-8 font-cyber text-2xl text-cyber-cyan flex items-start scanlines">
          <span className="mr-3 text-cyber-blue font-bold drop-shadow-[0_0_8px_#00f3ff]">&gt;</span>
          <span className="w-3 h-6 bg-cyber-cyan animate-pulse mt-1 shadow-[0_0_10px_#00ffcc]"></span>
        </div>
      </div>
    </div>
  );
}
