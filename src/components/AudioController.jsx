import { useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Howl } from 'howler';

// TODO: Place your own audio file in the 'public' folder (e.g., public/cyber_music.mp3)
// and update this source array to point to it: src: ['/cyber_music.mp3']
const bgMusic = new Howl({
  src: ['/cyber_music.mp3'], // Placeholder path
  loop: true,
  volume: 0.3,
  onloaderror: () => console.warn("Audio file not found. Please add an audio file to the public folder."),
});

export default function AudioController({ audioEnabled, setAudioEnabled }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toLowerCase() === 'm') {
        setAudioEnabled(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setAudioEnabled]);

  useEffect(() => {
    if (audioEnabled) {
      bgMusic.play();
    } else {
      bgMusic.pause();
    }
  }, [audioEnabled]);

  return (
    <button 
      onClick={() => setAudioEnabled(!audioEnabled)}
      className="absolute top-4 right-4 z-50 p-3 rounded-full glass-panel cyber-border hover:bg-white/10 transition-colors text-cyber-cyan focus:outline-none"
    >
      {audioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}
