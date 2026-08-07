import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CyberParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate more, brighter, random shining bubbles
    const newParticles = Array.from({ length: 80 }).map((_, i) => {
      const isCyan = Math.random() > 0.5;
      return {
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 6 + 3,
        duration: Math.random() * 6 + 3,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.7 + 0.3,
        wobble: Math.random() * 40 - 20,
        colorClass: isCyan ? 'bg-cyber-cyan' : 'bg-cyber-blue',
        shadowColor: isCyan ? '#00ffcc' : '#00f3ff'
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep gradient background for realism */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a192f] via-[#02050a] to-black opacity-60"></div>
      
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute bottom-[-20px] rounded-full ${p.colorClass} mix-blend-screen`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 3}px ${p.shadowColor}, 0 0 ${p.size * 6}px ${p.shadowColor}, 0 0 ${p.size * 10}px #fff`,
          }}
          animate={{
            y: ['0vh', '-120vh'],
            x: [0, p.wobble, 0],
            opacity: [0, p.opacity, 0],
            scale: [0.8, 1.5, 0.8]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
