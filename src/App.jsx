import { useState } from 'react';
import Scene1_BlackScreen from './components/Scene1_BlackScreen';
import Scene2_SystemBoot from './components/Scene2_SystemBoot';
import Scene3_Authentication from './components/Scene3_Authentication';
import Scene4_Decryption from './components/Scene4_Decryption';
import Scene5_MainReveal from './components/Scene5_MainReveal';
import Scene6_MainMessage from './components/Scene6_MainMessage';
import Scene7_Interactive from './components/Scene7_Interactive';
import Scene8_Ending from './components/Scene8_Ending';
import AudioController from './components/AudioController';
import useEasterEggs from './hooks/useEasterEggs';
import './index.css';

function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEasterEggs();

  const nextScene = () => {
    setCurrentScene(prev => prev + 1);
  };

  const jumpToScene = (scene) => {
    setCurrentScene(scene);
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <AudioController audioEnabled={audioEnabled} setAudioEnabled={setAudioEnabled} />

      {currentScene === 1 && <Scene1_BlackScreen onComplete={nextScene} />}
      {currentScene === 2 && <Scene2_SystemBoot onComplete={nextScene} />}
      {currentScene === 3 && <Scene3_Authentication onComplete={nextScene} />}
      {currentScene === 4 && <Scene4_Decryption onComplete={nextScene} />}
      {currentScene === 5 && <Scene5_MainReveal onComplete={nextScene} />}
      {currentScene === 6 && <Scene6_MainMessage onComplete={nextScene} />}
      {currentScene === 7 && <Scene7_Interactive onComplete={nextScene} />}
      {currentScene === 8 && <Scene8_Ending onReset={() => jumpToScene(1)} />}
    </div>
  );
}

export default App;
