import { useEffect, useState } from 'react';

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };
    
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-500"
      style={{
        opacity: isHovering ? 1 : 0,
        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(0, 243, 255, 0.05), transparent 40%)`
      }}
    />
  );
}
