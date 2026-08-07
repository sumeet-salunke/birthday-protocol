import { useEffect, useState } from 'react';

const chars = "!<>-_\\\\/[]{}—=+*^?#_";

export default function Scene4_Decryption({ onComplete }) {
  const [text, setText] = useState("_________");
  const targetText = "THANK YOU";

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const startDecryption = () => {
      interval = setInterval(() => {
        setText((prev) => {
          return prev
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return targetText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
        });

        if (iteration >= targetText.length) {
          clearInterval(interval);
          setTimeout(onComplete, 1500);
        }

        iteration += 1 / 3;
      }, 50);
    };

    setTimeout(startDecryption, 500);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black font-cyber text-cyber-cyan relative">
      <div className="text-5xl md:text-7xl font-bold tracking-widest text-glow-cyan z-10 text-center px-4">
        {text}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" style={{
        backgroundImage: `radial-gradient(circle at center, #00ffcc 0%, transparent 60%)`
      }}></div>
    </div>
  );
}
