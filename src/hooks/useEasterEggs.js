import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function useEasterEggs() {
  useEffect(() => {
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      // Konami Code
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          triggerPartyMode();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }

      // Confetti 'C'
      if (e.key.toLowerCase() === 'c') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f3ff', '#00ffcc', '#b500ff', '#ffd700', '#ff69b4']
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerPartyMode = () => {
    console.log("Thanks for visiting. Hope today makes you smile too.");
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffd700', '#ff69b4']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#00f3ff', '#b500ff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };
}
