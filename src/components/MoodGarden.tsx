import { useState, useEffect } from 'react';

const moodMessages = {
  great: [
    "Your happiness is contagious! Keep shining, beautiful! ✨",
    "I love seeing you this happy! You deserve all the joy in the world! 🌟",
    "Your smile could light up the whole world! 😊"
  ],
  okay: [
    "Every okay day is still a day with you in it, and that makes it special 💙",
    "You're doing great, even on the ordinary days! 🌻",
    "I love you on your okay days too - you're perfect just as you are 💕"
  ],
  tired: [
    "Rest those beautiful eyes, my love. You deserve all the comfort 💛",
    "Even when you're tired, you're the most beautiful sight to me 🌙",
    "Take it easy today, sweetheart. I'll be here when you're ready 🤗"
  ],
  stressed: [
    "Take a deep breath, beautiful. You've got this, and I've got you 🧡",
    "Stress can't dim your light, my love. You're stronger than you know 💪",
    "Remember: this feeling is temporary, but my love for you is forever 🫂"
  ],
  sad: [
    "It's okay to feel sad sometimes. I'm here to hold you through it 💜",
    "Your feelings are valid, and you're loved even in the difficult moments 🌧️",
    "Sending you all my love and virtual hugs. You're not alone 🤍"
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