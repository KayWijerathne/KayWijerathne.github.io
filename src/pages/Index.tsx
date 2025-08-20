import HeartCounter from '../components/HeartCounter';
import FortuneCookie from '../components/FortuneCookie';
import MoodGarden from '../components/MoodGarden';
import LoveSafe from '../components/LoveSafe';
import InfiniteReasons from '../components/InfiniteReasons';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft pb-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <HeartCounter />
      </div>

      {/* Interactive Sections */}
      <div className="container mx-auto px-4 space-y-12">
        {/* Fortune Cookie */}
        <FortuneCookie />

        {/* Mood Garden */}
        <MoodGarden />

        {/* Love Safe */}
        <LoveSafe />

        {/* Infinite Reasons */}
        <InfiniteReasons />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
