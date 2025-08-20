import { useState } from 'react';

const loveMessages = [
  "You're my favorite notification ❤️",
  "Home is wherever you are 🏠",
  "You make my heart skip a beat 💓",
  "Your smile is my daily dose of sunshine ☀️",
  "I fall in love with you more every day 🌹",
  "You're the best part of my every day 🌟",
  "Your laugh is my favorite sound 🎵",
  "With you, I'm home 🏡",
  "You're my happy place 😊",
  "Every moment with you is a treasure 💎",
  "You make ordinary moments feel magical ✨",
  "I love the way you see the world 🌍",
  "Your kindness makes me a better person 💗",
  "You're my person, my love, my everything 💕",
  "I choose you, today and every day 💖",
  "You're worth every mile between us 🛤️",
  "Your hugs are my safe haven 🤗",
  "You make me believe in fairy tales 🧚‍♀️",
  "I love your beautiful soul 🌺",
  "You're my favorite adventure 🗺️",
  "Your eyes are like stars in my sky ⭐",
  "You make my heart feel full 💛",
  "I'm grateful for you every single day 🙏",
  "You're my sweetest dream come true 💭",
  "Your love is my superpower 🦸‍♀️",
  "You make everything better just by being you 🌈",
  "I love how you make me laugh 😂",
  "You're my favorite hello and hardest goodbye 👋",
  "Your love feels like magic 🪄",
  "You're the missing piece to my puzzle 🧩",
  "I love your gentle heart 💚",
  "You make love feel easy 💙",
  "Your smile lights up my whole world 🌟",
  "I love the way you love me 💜",
  "You're my greatest blessing 🙌",
  "Your presence is my present 🎁",
  "I love your beautiful mind 🧠",
  "You make every day feel like a gift 🎀",
  "Your love is my anchor ⚓",
  "You're my favorite reason to smile 😄",
  "I love how you make me feel cherished 💝",
  "You're my heart's home 🏠",
  "Your love is my favorite song 🎶",
  "You make me want to be my best self 🌱",
  "I love your compassionate spirit 🕊️",
  "You're my forever and always ♾️",
  "Your love is my greatest adventure 🎒",
  "You make my soul happy 😇",
  "I love how you see beauty everywhere 👀",
  "You're my favorite love story 📖",
  "Your heart is pure gold 🥇",
  "You make love feel like home 🏘️",
  "I love your infectious joy 😊",
  "You're my sweetest escape 🌴",
  "Your love is my safe space 🛡️"
];

const FortuneCookie = () => {
  const [isCracked, setIsCracked] = useState(false);
  const [message, setMessage] = useState('');

  const crackCookie = () => {
    if (!isCracked) {
      const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
      setMessage(randomMessage);
      setIsCracked(true);
    } else {
      // Reset the cookie
      setIsCracked(false);
      setMessage('');
    }
  };

  return (
    <div className="bg-sage-green/40 p-8 rounded-3xl shadow-soft border border-sage-green/60">
      <div className="text-center">
        <h2 className="font-romantic text-4xl text-foreground mb-6">
          Fortune Cookie of Love
        </h2>
        
        <div 
          className="cursor-pointer transition-transform hover:scale-105 mb-6"
          onClick={crackCookie}
        >
          <div className="text-8xl mb-4">
            {isCracked ? '🥠💔' : '🥠'}
          </div>
          <div className="font-body text-6xl text-heart-red">
            {isCracked ? '(( ◕ ‿ ◕ ))' : '((◕‿◕))'}
          </div>
        </div>
        
        <p className="font-body text-lg text-muted-foreground mb-4">
          Click the cookie to {isCracked ? 'get a new' : 'crack it open for a'} love message!
        </p>
        
        {message && (
          <div className="bg-cream p-6 rounded-2xl border border-love-pink/40 fade-in">
            <p className="font-romantic text-2xl text-heart-red">
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FortuneCookie;