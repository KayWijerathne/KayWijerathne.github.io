import { useState, useEffect } from 'react';

const loveReasons = [
  "The way you scrunch your nose when you laugh",
  "Your kindness to everyone you meet",
  "How you make everything an adventure",
  "Your beautiful, genuine smile",
  "The way you listen with your whole heart",
  "Your incredible sense of humor",
  "How you see the good in everyone",
  "Your adorable sleepy voice in the morning",
  "The way you dance when you think no one's watching",
  "Your endless curiosity about the world",
  "How you remember the little things I tell you",
  "Your amazing cooking skills",
  "The way you light up when talking about your passions",
  "Your beautiful, expressive eyes",
  "How you make me laugh until my stomach hurts",
  "Your incredible strength and resilience",
  "The way you hum while doing chores",
  "Your love for animals and nature",
  "How you make even mundane tasks fun",
  "Your thoughtful texts throughout the day",
  "The way you get excited about small surprises",
  "Your beautiful handwriting",
  "How you always smell amazing",
  "Your infectious enthusiasm",
  "The way you comfort me when I'm stressed",
  "Your amazing fashion sense",
  "How you make me want to be a better person",
  "Your cute little snores",
  "The way you celebrate my victories",
  "Your incredible patience with me",
  "How you always know what to say",
  "Your love for learning new things",
  "The way you make ordinary moments special",
  "Your beautiful laugh that fills the room",
  "How you remember my favorite things",
  "Your amazing hugs that feel like home",
  "The way you encourage my dreams",
  "Your love for cozy movie nights",
  "How you make me feel safe and loved",
  "Your beautiful soul that shines so bright",
  "The way you play with your hair when thinking",
  "Your incredible empathy and compassion",
  "How you make me believe in forever",
  "Your cute reactions to funny videos",
  "The way you support all my silly ideas",
  "Your beautiful singing voice in the shower",
  "How you make me feel like the luckiest person alive",
  "Your love for spontaneous adventures",
  "The way you make every day better just by being in it",
  "Your incredible inner beauty that radiates outward",
  "How you make love feel effortless and natural",
  "Your adorable bedhead in the mornings",
  "The way you get passionate about things you care about",
  "Your amazing ability to make me smile",
  "How you turn my house into a home",
  "Your beautiful freckles that I could count forever",
  "The way you make me feel understood",
  "Your love for trying new foods together",
  "How you make me laugh at the worst jokes",
  "Your incredible work ethic and determination",
  "The way you make me feel cherished every day",
  "Your cute habit of talking to yourself",
  "How you make my heart skip a beat",
  "Your amazing ability to multitask",
  "The way you make me feel like I can conquer the world",
  "Your love for cozy blankets and warm drinks",
  "How you make every season feel special",
  "Your incredible memory for important dates",
  "The way you make me want to write poetry",
  "Your beautiful spirit that lifts everyone up",
  "How you make me believe in magic again",
  "Your cute excited face when you see dogs",
  "The way you make me feel grateful every day",
  "Your amazing ability to find beauty everywhere",
  "How you make me a better version of myself",
  "Your incredible talent for making me feel loved",
  "The way you make time stop when you look at me",
  "Your love for deep conversations under the stars",
  "How you make me understand what home really means",
  "Your beautiful heart that chose to love mine",
  "The way you make me excited about our future together",
  "Your incredible ability to turn any day around",
  "How you make me believe in happily ever after",
  "Your cute concentrated face when you're focused",
  "The way you make me want to be the best partner",
  "Your amazing grace in handling life's challenges",
  "How you make me understand what true love really is",
  "Your beautiful presence that makes everything better",
  "The way you make me grateful to be alive",
  "Your incredible heart that beats for both of us",
  "How you make me believe we can weather any storm",
  "Your beautiful soul that found its way to mine",
  "The way you make me want to love you forever",
  "Your incredible ability to make me feel complete",
  "How you make me understand why it never worked with anyone else",
  "Your beautiful love that changed my entire world",
  "The way you make me excited to wake up each morning",
  "Your incredible presence that feels like coming home",
  "How you make me believe in us more every single day",
  "Your beautiful existence that makes my life worth living",
  "The way you love me exactly as I am",
  "Your incredible heart that beats in perfect rhythm with mine",
  "How you make me understand what forever really means",
  "Your beautiful love that is my greatest treasure"
];

const InfiniteReasons = () => {
  const [displayedReasons, setDisplayedReasons] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < loveReasons.length) {
        setDisplayedReasons(prev => [...prev, loveReasons[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Reset and start over
        setCurrentIndex(0);
        setDisplayedReasons([]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-sage-green/30 p-8 rounded-3xl shadow-soft border border-sage-green/50">
      <h2 className="font-romantic text-4xl text-foreground mb-8 text-center">
        Reasons why I love her:
      </h2>
      
      <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
        {displayedReasons.map((reason, index) => (
          <div
            key={index}
            className="bg-cream/80 p-4 rounded-xl shadow-soft border border-love-pink/30 fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-3">
              <span className="text-heart-red text-xl">♥</span>
              <p className="font-body text-foreground">{reason}</p>
            </div>
          </div>
        ))}
        
        {displayedReasons.length === 0 && (
          <div className="text-center py-8">
            <p className="font-romantic text-xl text-muted-foreground">
              Getting ready to share all the reasons I love you... 💕
            </p>
          </div>
        )}
      </div>
      
      <div className="text-center mt-6">
        <p className="font-body text-sm text-muted-foreground">
          {displayedReasons.length} of {loveReasons.length} reasons shared so far...
        </p>
      </div>
    </div>
  );
};

export default InfiniteReasons;