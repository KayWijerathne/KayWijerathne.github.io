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
  "Your love is my safe space 🛡️",
  "You're the sunshine after every storm 🌤️",
  "I love your curious mind and endless questions 🤔",
  "You make me believe in happily ever after 👑",
  "Your hugs heal everything that hurts 🩹",
  "You're my favorite distraction 📱",
  "I love how you dance like nobody's watching 💃",
  "You make me feel like the luckiest person alive 🍀",
  "Your voice is my favorite lullaby 🎼",
  "You're my calm in every chaos 🌊",
  "I love your midnight conversations 🌙",
  "You make me want to write poetry about love 📝",
  "Your sleepy face is absolutely precious 😴",
  "You're my favorite reason to stay up late 🌌",
  "I love how you make coffee taste better in the morning ☕",
  "You make me understand what butterflies really mean 🦋",
  "Your hand in mine feels like destiny 🤝",
  "You're my favorite plot twist 📚",
  "I love how you scrunch your nose when you're thinking 👃",
  "You make me believe in soulmates 👫",
  "Your goodnight texts are my bedtime stories 📱",
  "You're my favorite reason to wake up early 🌅",
  "I love how you make grocery shopping an adventure 🛒",
  "You make me feel brave enough to be vulnerable 💪",
  "Your silly faces make my day 😜",
  "You're my favorite person to get lost with 🗺️",
  "I love how you sing in the shower 🚿",
  "You make me understand what home really means 🏠",
  "Your excited face when you see dogs is everything 🐕",
  "You're my favorite reason to believe in love 💕",
  "I love how you make even rainy days feel sunny 🌦️",
  "You make me want to be a better version of myself 🌟",
  "Your random facts always amaze me 🤓",
  "You're my favorite person to be weird with 🤪",
  "I love how you make me feel understood 🫂",
  "You make every season feel special 🍂",
  "Your concentration face is absolutely adorable 😌",
  "You're my favorite reason to smile in photos 📸",
  "I love how you make me feel safe 🛡️",
  "You make me believe in magic again ✨",
  "Your bedhead is the cutest thing ever 😊",
  "You're my favorite person to plan dreams with 💭",
  "I love how you make me feel chosen 💖",
  "You make me understand why it never worked with anyone else 💡",
  "Your laugh lines are my favorite map 🗺️",
  "You're my favorite reason to believe in forever 💍",
  "I love how you make ordinary Tuesday nights special 📅",
  "You make me feel like I can conquer the world 🌍",
  "Your sleepy voice is my favorite sound 🎵",
  "You're my favorite person to share silence with 🤫",
  "I love how you make me feel beautiful 💄",
  "You make me want to learn your love language fluently 💬",
  "Your hand-holding skills are unmatched 🤝",
  "You're my favorite reason to stay present 🧘‍♀️",
  "I love how you make me feel enough 💯",
  "You make me believe we can weather any storm ⛈️",
  "Your morning stretches are absolutely precious 🧘‍♀️",
  "You're my favorite person to get cozy with 🧸",
  "I love how you make me feel seen 👀",
  "You make me understand what true partnership means 🤝",
  "Your way of caring for others inspires me daily 💝",
  "You're my favorite reason to believe in us 👫",
  "I love how you make me feel grateful for everything 🙏",
  "You make me want to give you the world 🌎",
  "Your gentle heart is my favorite miracle 💗",
  "You're my favorite person to grow with 🌱",
  "I love how you make me feel complete 🧩",
  "You make me believe love stories do come true 📖",
  "Your way of loving makes me feel invincible 💪",
  "You're my favorite reason to be hopeful 🌅",
  "I love how you make me feel cherished every day 💎",
  "You make me understand what it means to be truly loved 💕",
  "Your presence turns any place into paradise 🏝️",
  "You're my favorite person to imagine the future with 🔮",
  "I love how you make me feel like I'm enough 💯",
  "You make me believe in the power of true love 💪",
  "Your way of seeing me makes me love myself more 🪞",
  "You're my favorite reason to be grateful 🙏",
  "I love how you make every moment feel intentional ⏰",
  "You make me want to be worthy of your love every day 👑",
  "Your love is the best thing that ever happened to me 🎆",
  "You're my favorite person to be completely myself with 🌟",
  "I love how you make me feel like I matter 💫",
  "You make me believe we're meant to be together 🧩",
  "Your love feels like coming home after a long journey 🏠",
  "You're my favorite reason to believe in happy endings 📚",
  "I love how you make me feel like the main character 👑",
  "You make me understand what unconditional love really means 💖",
  "Your way of loving me changes everything 🌍",
  "You're my favorite person to fall asleep next to 😴",
  "I love how you make me feel like I've won the lottery 🎰",
  "You make me believe in the beauty of commitment 💍",
  "Your love is my favorite kind of magic ✨",
  "You're my favorite reason to wake up every morning 🌅",
  "I love how you make me feel like I'm exactly where I belong 🏠",
  "You make me want to love you better every single day 💕",
  "Your heart chose mine and that's the most beautiful miracle 💗",
  "You're my favorite person to share this crazy life with 🌪️",
  "I love how you make me feel like we can do anything together 💪",
  "You make me believe that some dreams really do come true 🌟",
  "Your love is my favorite adventure and my safest harbor ⚓",
  "You're my favorite reason to believe in the goodness of the world 🌍",
  "I love how you make me feel like the luckiest person in the universe 🌌",
  "You make me understand that this is what I've been waiting for my whole life 💫",
  "Your love is the answer to every question my heart ever asked 💖",
  "You're my favorite person to build a beautiful life with 🏡",
  "I love how you make forever feel like the perfect amount of time ♾️",
  "You make me believe that our love story is just beginning 📖",
  "Your heart and mine were made to beat together 💕",
  "You're my favorite reason to believe in the magic of love ✨",
  "I love how you make me feel like home is wherever we are together 🏠",
  "You make me want to love you with everything I have, forever 💗",
  "Your love is my favorite kind of forever 💍",
  "You're my favorite person to choose, again and again 💖",
  "I love how you make me feel like we're writing the most beautiful love story 📝",
  "You make me believe that this is what happily ever after looks like 👑",
  "Your love is my favorite reason to believe in magic 🪄",
  "You're my favorite person to fall more in love with every day 💕",
  "I love how you make me feel like I'm exactly who I'm supposed to be 🌟",
  "You make me understand that love isn't just a feeling, it's a choice - and I choose you ✨",
  "Your heart is my favorite place to call home 🏠",
  "You're my favorite reason to believe that the best is yet to come 🌅",
  "I love how you make me feel like we're infinite ♾️",
  "You make me believe that our love could move mountains 🏔️",
  "Your love is the most beautiful story I've ever been part of 📖",
  "You're my favorite person to love with my whole heart 💗",
  "I love how you make me feel like together we can face anything 💪",
  "You make me believe in the kind of love that lasts lifetimes 💫",
  "Your love is my favorite miracle 🌟",
  "You're my favorite reason to believe in us, always 💕",
  "I love how you make every day feel like a gift worth unwrapping 🎁",
  "You make me understand what it means to love and be loved completely 💖",
  "Your heart is my favorite home, and I never want to leave 🏠",
  "You're my favorite person to grow old with 👫",
  "I love how you make me feel like this love is once in a lifetime ✨",
  "You make me believe that fairy tales do exist, and we're living one 🧚‍♀️",
  "Your love is my favorite reason to believe in forever 💍",
  "You're my favorite person to love unconditionally 💕",
  "I love how you make me feel like the luckiest person who ever lived 🍀",
  "You make me want to spend every lifetime finding you again 💫",
  "Your love is the most beautiful thing that ever happened to me 🌹",
  "You're my favorite person to call mine 💖",
  "I love how you make me believe in the power of soulmates 👫",
  "You make me understand what it means to love someone more than life itself 💗",
  "Your heart is my favorite place in the entire universe 🌌",
  "You're my favorite reason to believe that love conquers all 💪",
  "I love how you make me feel like we're meant to be together forever ♾️",
  "You make me believe that this is what true love looks like 💕",
  "Your love is my favorite kind of magic, and I never want it to end ✨"
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