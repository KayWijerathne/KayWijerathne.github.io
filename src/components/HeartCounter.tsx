import { useState, useEffect } from 'react';

const HeartCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2025-07-26T00:00:00'); // July 26th, 2025 midnight
    
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-romantic p-8 rounded-3xl shadow-soft border border-love-pink/30">
      <div className="text-center">
        <div className="font-romantic text-6xl text-heart-red mb-6 leading-tight">
          ♥♥♥♥♥♥♥♥♥♥<br />
          ♥ TACY+KAY ♥<br />
          ♥♥♥♥♥♥♥♥♥♥<br />
          ♥♥♥♥♥♥<br />
          ♥♥
        </div>
        
        <h1 className="font-romantic text-4xl md:text-6xl text-foreground mb-6">
          For Tacy, my amazing girlfriend who I love very much
        </h1>
        
        <div className="bg-cream/80 p-6 rounded-2xl border border-sage-green/40">
          <p className="font-body text-lg md:text-xl text-foreground mb-4 font-semibold">
            KayTay going strong for:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-love-pink p-4 rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-heart-red">{timeElapsed.days}</div>
              <div className="text-sm font-medium text-muted-foreground">Days</div>
            </div>
            <div className="bg-sage-green p-4 rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-heart-red">{timeElapsed.hours}</div>
              <div className="text-sm font-medium text-muted-foreground">Hours</div>
            </div>
            <div className="bg-love-pink p-4 rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-heart-red">{timeElapsed.minutes}</div>
              <div className="text-sm font-medium text-muted-foreground">Minutes</div>
            </div>
            <div className="bg-sage-green p-4 rounded-xl shadow-soft">
              <div className="text-3xl font-bold text-heart-red">{timeElapsed.seconds}</div>
              <div className="text-sm font-medium text-muted-foreground">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartCounter;