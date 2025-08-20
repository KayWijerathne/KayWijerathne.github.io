import { useState, useEffect } from 'react';

const moodMessages = {
  great: [
    "Your happiness is contagious! Keep shining, beautiful! ✨",
    "I love seeing you this happy! You deserve all the joy in the world! 🌟",
    "Your smile could light up the whole world! 😊",
    "When you're happy, my whole universe feels complete! 💫",
    "Your joy is my favorite song - I could listen to it forever! 🎵",
    "Seeing you glow like this makes my heart do backflips! 💕",
    "Your radiant energy could power the entire city! ⚡",
    "I fall in love with your happiness over and over again! 🌈",
    "Your beautiful spirit shines brightest when you're like this! ✨",
    "This is the you I want to see every single day! 🌞",
    "Your excitement is absolutely infectious and I'm here for it! 🎉",
    "You're literally glowing and it's the most beautiful sight! 💎"
  ],
  okay: [
    "Every okay day is still a day with you in it, and that makes it special 💙",
    "You're doing great, even on the ordinary days! 🌻",
    "I love you on your okay days too - you're perfect just as you are 💕",
    "Even your 'okay' is extraordinary to me, beautiful! 🌸",
    "These steady moments are just as precious as the exciting ones! 🕊️",
    "Your calm presence is exactly what my soul needs today! 🌊",
    "I love all your moods, including this peaceful one! 🍃",
    "There's beauty in these quiet, gentle moments with you! 🌙",
    "Your okay days are still my favorite days because you're in them! ☁️",
    "Even when you feel ordinary, you're extraordinary to me! 🌺",
    "These balanced moments show your beautiful, steady heart! ⚖️",
    "I cherish every mood you share with me, especially this one! 💚"
  ],
  tired: [
    "Rest those beautiful eyes, my love. You deserve all the comfort 💛",
    "Even when you're tired, you're the most beautiful sight to me 🌙",
    "Take it easy today, sweetheart. I'll be here when you're ready 🤗",
    "Your sleepy face is absolutely adorable and I want to protect it! 😴",
    "Let me be your pillow, your blanket, your safe space today! 🛏️",
    "Even exhausted, you're still the most incredible person I know! 💤",
    "Your tired eyes still sparkle more than any star! ⭐",
    "I wish I could wrap you in all the comfort in the world! 🧸",
    "Rest up, beautiful - the world needs your energy when you're ready! 🌅",
    "Your sleepy voice is one of my favorite sounds ever! 🎶",
    "Take all the naps you need - I'll be here to wake up to! ☀️",
    "Even your yawns are cute - everything about you is perfect! 😊"
  ],
  stressed: [
    "Take a deep breath, beautiful. You've got this, and I've got you 🧡",
    "Stress can't dim your light, my love. You're stronger than you know 💪",
    "Remember: this feeling is temporary, but my love for you is forever 🫂",
    "I believe in you more than you'll ever know, even in tough moments! 🌟",
    "Your strength in difficult times absolutely amazes me! 🦋",
    "Let me be your calm in this storm, sweetheart! 🌈",
    "You've overcome so much before - this is just another mountain to climb! ⛰️",
    "Your stressed heart is still the most beautiful heart to me! 💗",
    "I'm sending you all my peaceful energy right now! 🕯️",
    "You handle pressure with such grace - I'm so proud of you! 👑",
    "This stress doesn't define you - your resilience does! 🌱",
    "I'm here to remind you how incredibly capable you are! 💝"
  ],
  sad: [
    "It's okay to feel sad sometimes. I'm here to hold you through it 💜",
    "Your feelings are valid, and you're loved even in the difficult moments 🌧️",
    "Sending you all my love and virtual hugs. You're not alone 🤍",
    "Your tears are precious to me - they show your beautiful, feeling heart! 💧",
    "I want to be your sunshine on this cloudy day! ☀️",
    "Every emotion you feel makes you more beautifully human! 🌸",
    "Let me sit with you in this sadness - you don't have to be alone! 🤝",
    "Your sad days make your happy days even more meaningful! 🌈",
    "I love all of you, including the parts that hurt sometimes! 💕",
    "Your vulnerability is one of your most beautiful qualities! 🦋",
    "This sadness will pass, but my love for you never will! ♾️",
    "You're allowed to feel everything - I'll be here through it all! 🌙"
  ]
};

const MoodGarden = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [flowers, setFlowers] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load flowers from localStorage
    const savedFlowers = localStorage.getItem('tacyMoodFlowers');
    if (savedFlowers) {
      setFlowers(JSON.parse(savedFlowers));
    }
  }, []);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    
    // Get a random message for this mood
    const messages = moodMessages[mood as keyof typeof moodMessages];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    
    // Add a flower to the garden
    const newFlower = '✿';
    const updatedFlowers = [...flowers, newFlower];
    setFlowers(updatedFlowers);
    
    // Save to localStorage
    localStorage.setItem('tacyMoodFlowers', JSON.stringify(updatedFlowers));
  };

  const moodOptions = [
    { emoji: '💚', mood: 'great', label: 'Great' },
    { emoji: '💙', mood: 'okay', label: 'Okay' },
    { emoji: '💛', mood: 'tired', label: 'Tired' },
    { emoji: '🧡', mood: 'stressed', label: 'Stressed' },
    { emoji: '💜', mood: 'sad', label: 'Sad' }
  ];

  return (
    <div className="bg-love-pink/40 p-8 rounded-3xl shadow-soft border border-love-pink/60">
      <div className="text-center mb-8">
        <h2 className="font-romantic text-4xl text-foreground mb-6">
          Mood Garden
        </h2>
        
        <p className="font-body text-xl text-foreground mb-6">
          How's my beautiful baby feeling today?
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {moodOptions.map(({ emoji, mood, label }) => (
            <button
              key={mood}
              onClick={() => handleMoodSelect(mood)}
              className="bg-cream p-4 rounded-2xl shadow-soft border border-sage-green/40 hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2">{emoji}</div>
              <div className="font-body text-sm font-medium text-foreground">{label}</div>
            </button>
          ))}
        </div>
        
        {message && (
          <div className="bg-sage-green/60 p-6 rounded-2xl border border-sage-green/80 fade-in mb-6">
            <p className="font-romantic text-xl text-foreground">
              {message}
            </p>
          </div>
        )}
        
        {flowers.length > 0 && (
          <div className="bg-cream/60 p-6 rounded-2xl border border-love-pink/40">
            <p className="font-body text-lg text-foreground mb-4">
              Your Mood Garden ({flowers.length} flowers grown today!)
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {flowers.map((flower, index) => (
                <span key={index} className="text-2xl fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  {flower}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodGarden;