import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Heart, Sparkles, Camera } from 'lucide-react';

const BirthdayCake = () => {
  const [cut, setCut] = useState(false);

  const handleCut = (e) => {
    e.stopPropagation();
    if (!cut) {
      setCut(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#ff69b4', '#ff8c00', '#00f3ff']
      });
    }
  };

  return (
    <div className="flex flex-col items-center cursor-pointer relative" onClick={handleCut}>
      <motion.div whileHover={{ scale: 1.05 }} className="relative w-48 h-48 md:w-64 md:h-64 flex items-end justify-center">
        <div className="w-40 h-24 bg-bday-pink rounded-xl relative shadow-[0_10px_30px_rgba(255,105,180,0.3)] border-b-8 border-pink-700 z-10 flex justify-center">
           <div className="absolute -top-8 w-4 h-12 bg-white rounded-t-md">
             <motion.div 
               animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.2, 1] }} 
               transition={{ repeat: Infinity, duration: 0.5 }}
               className="absolute -top-6 -left-1 w-6 h-8 bg-orange-500 rounded-full blur-[2px]"
             ></motion.div>
             <motion.div 
               animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.1, 1] }} 
               transition={{ repeat: Infinity, duration: 0.5 }}
               className="absolute -top-5 w-4 h-6 bg-yellow-300 rounded-full"
             ></motion.div>
           </div>
           {cut && (
             <motion.div 
               initial={{ width: 0 }} 
               animate={{ width: "40px" }} 
               className="absolute top-0 bottom-0 right-10 bg-black/30 rounded-r-xl"
             ></motion.div>
           )}
        </div>
      </motion.div>
      <div className="mt-4 text-white font-medium bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
        {cut ? "Yummy! 🍰" : "Click to cut the cake!"}
      </div>
    </div>
  );
};

const Balloon = ({ id, delay, left, onClick }) => {
  const [popped, setPopped] = useState(false);

  if (popped) return null;

  return (
    <motion.div
      initial={{ y: "110vh" }}
      animate={{ y: "-20vh" }}
      transition={{ duration: 15, delay, repeat: Infinity, ease: "linear" }}
      className="absolute cursor-pointer pointer-events-auto"
      style={{ left: `${left}%` }}
      onClick={(e) => {
        e.stopPropagation();
        setPopped(true);
        onClick();
      }}
    >
      <div className="w-12 h-16 md:w-16 md:h-20 bg-gradient-to-tr from-bday-orange to-bday-gold rounded-full opacity-80 shadow-[0_0_15px_rgba(255,215,0,0.6)]"></div>
      <div className="w-0.5 h-16 bg-white/40 mx-auto"></div>
    </motion.div>
  );
};

export default function Scene7_Interactive({ onComplete }) {
  const [activeTab, setActiveTab] = useState('cake');
  const [toastMsg, setToastMsg] = useState("");
  const [hearts, setHearts] = useState([]);
  
  const balloonMessages = ["You're awesome!", "Thank you!", "Virtual hug! 🤗", "Have an amazing day!", "Cake unlocked!"];

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3500);
  };

  const addHeart = (e) => {
    const newHeart = { id: Date.now(), x: e.clientX, y: e.clientY };
    setHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2000);
  };

  return (
    <div className="w-full h-full bg-[#180a22] overflow-hidden flex flex-col relative" onClick={addHeart}>
      <AnimatePresence>
        {toastMsg && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 20, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="absolute top-8 left-1/2 z-[100] bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full shadow-2xl font-medium text-center min-w-max"
          >
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {hearts.map(h => (
        <motion.div
          key={h.id}
          initial={{ opacity: 1, y: 0, scale: 0.5 }}
          animate={{ opacity: 0, y: -100, scale: 1.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute text-bday-pink pointer-events-none z-[90]"
          style={{ left: h.x - 12, top: h.y - 12 }}
        >
          <Heart fill="currentColor" size={24} />
        </motion.div>
      ))}

      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <Balloon 
            key={i} 
            id={i} 
            delay={i * 2.5} 
            left={15 + i * 12} 
            onClick={() => showToast(balloonMessages[i % balloonMessages.length])} 
          />
        ))}
      </div>

      <div className="relative z-20 flex justify-center gap-2 md:gap-4 mt-12 px-4 flex-wrap">
        <button onClick={(e) => { e.stopPropagation(); setActiveTab('cake'); }} className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all text-sm md:text-base ${activeTab === 'cake' ? 'bg-bday-pink text-white shadow-[0_0_15px_#ff69b4]' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
          <Sparkles className="inline md:mr-2 w-4 h-4 md:w-5 md:h-5"/> <span className="hidden md:inline">Celebrate</span>
        </button>
        <button onClick={(e) => { e.stopPropagation(); setActiveTab('memories'); }} className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all text-sm md:text-base ${activeTab === 'memories' ? 'bg-bday-gold text-black shadow-[0_0_15px_#ffd700]' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
          <Camera className="inline md:mr-2 w-4 h-4 md:w-5 md:h-5"/> <span className="hidden md:inline">Memories</span>
        </button>
        <button onClick={(e) => { e.stopPropagation(); setActiveTab('gift'); }} className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all text-sm md:text-base ${activeTab === 'gift' ? 'bg-bday-orange text-white shadow-[0_0_15px_#ff8c00]' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
          <Gift className="inline md:mr-2 w-4 h-4 md:w-5 md:h-5"/> <span className="hidden md:inline">Special Gift</span>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10 p-4">
        {activeTab === 'cake' && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
            <BirthdayCake />
          </motion.div>
        )}

        {activeTab === 'memories' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-6 overflow-x-auto max-w-full pb-8 px-8 snap-x" onClick={e => e.stopPropagation()}>
            {[1, 2, 3].map((item) => (
              <motion.div key={item} whileHover={{ y: -10, rotate: item % 2 === 0 ? 3 : -3 }} className="snap-center shrink-0 w-64 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl flex flex-col items-center">
                <div className="w-full h-48 bg-black/40 rounded-lg mb-4 flex items-center justify-center border border-white/5">
                  <Heart className="text-bday-pink/50" size={48} />
                </div>
                <p className="text-white/90 font-medium text-center text-lg">Memory {item}<br/><span className="text-sm text-white/60">Cherished moments</span></p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'gift' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer mb-8"
              onClick={(e) => { e.stopPropagation(); showToast("Lifetime Premium Friendship\nPrice: FREE ❤️"); }}
            >
              <div className="w-40 h-40 bg-gradient-to-br from-bday-gold to-bday-orange rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.4)] flex items-center justify-center border-2 border-white/30 relative overflow-hidden">
                <div className="absolute top-0 w-full h-8 bg-white/20 blur-sm"></div>
                <Gift size={80} className="text-white" />
              </div>
            </motion.div>
            <p className="text-white/80 text-xl font-medium">Click to open your gift!</p>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <button 
          onClick={(e) => { e.stopPropagation(); onComplete(); }}
          className="px-6 py-3 rounded-full border border-cyber-cyan text-cyber-cyan bg-black/50 hover:bg-cyber-cyan hover:text-black transition-colors font-cyber tracking-widest text-sm md:text-base shadow-[0_0_15px_rgba(0,255,204,0.3)] backdrop-blur-sm"
        >
          COMPLETE_MISSION
        </button>
      </div>
    </div>
  );
}
