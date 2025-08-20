import { useState } from 'react';

const LoveSafe = () => {
  const [combination, setCombination] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [message, setMessage] = useState('');
  
  const correctCombination = '0726';
  const secretMessage = "You are the love of my life, Tacy. Every morning I wake up grateful that you chose to love me back. Your kindness, your laughter, your beautiful heart - everything about you makes my world brighter. I promise to love you through every season, every challenge, every joy. You're not just my girlfriend, you're my best friend, my home, my future. I love you more than all the stars in the sky. 🌟💕✨";

  const handleDigitClick = (digit: string) => {
    if (combination.length < 4 && !isUnlocked) {
      const newCombination = combination + digit;
      setCombination(newCombination);
      
      if (newCombination.length === 4) {
        setTimeout(() => {
          if (newCombination === correctCombination) {
            setIsUnlocked(true);
            setMessage('');
          } else {
            setMessage('Try again, beautiful! 💕');
            setCombination('');
          }
        }, 500);
      }
    }
  };

  const resetSafe = () => {
    setIsUnlocked(false);
    setCombination('');
    setMessage('');
  };

  return (
    <div className="bg-cream/60 p-8 rounded-3xl shadow-soft border border-cream/80">
      <div className="text-center">
        <h2 className="font-romantic text-4xl text-foreground mb-6">
          Secret Love Safe
        </h2>
        
        <div className="mb-6">
          {!isUnlocked ? (
            <div className="text-8xl text-heart-red mb-4">
              🔒
            </div>
          ) : (
            <div className="text-8xl text-sage-green mb-4">
              🔓
            </div>
          )}
          
          <div className="font-body text-6xl text-foreground mb-4">
            ╔══════════╗<br />
            ║ ◉ ◉ ◉ ◉ ║<br />
            ║          ║<br />
            ║   LOVE   ║<br />
            ║   SAFE   ║<br />
            ╚══════════╝
          </div>
        </div>
        
        {!isUnlocked ? (
          <div>
            <p className="font-body text-lg text-foreground mb-4">
              Enter the combination (4 digits):
            </p>
            
            <div className="flex justify-center mb-6">
              <div className="flex gap-2 bg-love-pink p-4 rounded-xl border border-love-pink/60">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-cream rounded-lg border border-sage-green/40 flex items-center justify-center text-xl font-bold text-foreground"
                  >
                    {combination[index] || '?'}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
                <button
                  key={digit}
                  onClick={() => handleDigitClick(digit.toString())}
                  className="bg-sage-green hover:bg-sage-green/80 p-4 rounded-xl shadow-soft border border-sage-green/60 text-xl font-bold text-foreground transition-colors"
                  disabled={combination.length >= 4}
                >
                  {digit}
                </button>
              ))}
            </div>
            
            {message && (
              <p className="font-romantic text-xl text-heart-red">
                {message}
              </p>
            )}
          </div>
        ) : (
          <div className="fade-in">
            <div className="bg-gradient-romantic p-6 rounded-2xl border border-love-pink/60 mb-6">
              <h3 className="font-romantic text-2xl text-heart-red mb-4">
                💕 My Secret Message for You 💕
              </h3>
              <p className="font-body text-lg text-foreground leading-relaxed">
                {secretMessage}
              </p>
            </div>
            
            <button
              onClick={resetSafe}
              className="bg-love-pink hover:bg-love-pink/80 px-6 py-3 rounded-xl shadow-soft border border-love-pink/60 font-body font-medium text-foreground transition-colors"
            >
              Lock Safe Again 🔒
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveSafe;