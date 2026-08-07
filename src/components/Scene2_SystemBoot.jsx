import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CyberParticles from './CyberParticles';

const logs = [
  "Initializing System...",
  "Loading Birthday Protocol...",
  "Connecting...",
  "Establishing Secure Connection...",
  "Authenticating Visitor...",
  "Verifying Wish Database...",
  "Decrypting Messages...",
  "Loading Memories...",
  "Calculating Happiness..."
];

export default function Scene2_SystemBoot({ onComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 800);
      }
    });

    const lines = containerRef.current.children;
    gsap.set(lines, { opacity: 0, x: -15 });

    tl.to(lines, {
      opacity: 1,
      x: 0,
      duration: 0.15,
      stagger: 0.25,
      ease: "power2.out"
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#02050a] relative overflow-hidden">
      <CyberParticles />
      
      <div className="relative z-10 w-[90%] max-w-3xl aspect-video bg-black/80 backdrop-blur-sm rounded-lg border border-cyber-cyan/20 shadow-[0_0_60px_rgba(0,243,255,0.15)] flex flex-col overflow-hidden">
        {/* Terminal Header */}
        <div className="h-8 bg-[#0a0a16] border-b border-cyber-cyan/10 flex items-center px-4 justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
          </div>
          <div className="text-xs text-cyber-cyan/50 font-cyber tracking-widest">BOOT_SEQ_EXE</div>
        </div>
        
        {/* Terminal Body */}
        <div className="flex-1 p-6 md:p-8 font-cyber text-cyber-cyan scanlines relative flex flex-col justify-between">
          <div ref={containerRef} className="space-y-3 text-sm md:text-xl w-full">
            {logs.map((log, index) => (
              <div key={index} className="flex items-center">
                <span className="text-cyber-blue mr-4 w-24 opacity-70">[{String(index * 11).padStart(4, '0')}]</span>
                <span className="text-glow-cyan text-white/90">{log}</span>
              </div>
            ))}
          </div>
          
          <div className="w-full mt-8">
            <div className="flex justify-between text-xs text-cyber-blue mb-1 opacity-60">
              <span>PROGRESS</span>
              <span>100%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-cyber-cyan/20">
               <div className="h-full bg-cyber-cyan w-0 shadow-[0_0_15px_#00ffcc]" 
                    ref={(el) => {
                      if(el) gsap.to(el, {width: "100%", duration: 2.2, ease: "power1.inOut"})
                    }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
