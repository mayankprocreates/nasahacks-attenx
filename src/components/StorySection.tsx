import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('story');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cosmic-cyan via-white to-cosmic-purple bg-clip-text text-transparent animate-fade-in">
            Earth's Silent Stories
          </h2>
          <p className="text-2xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-fade-in-delayed">
            Our planet speaks through its changing landscapes. From the shrinking glaciers of Greenland 
            to the expanding deserts of Africa, witness the profound transformations that tell the story 
            of our changing world.
          </p>
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/20 backdrop-blur-sm animate-fade-in-delayed-2">
            <p className="text-xl md:text-xl text-gray-200 italic">
              "In every satellite image lies a chapter of Earth's evolving narrative. 
              These aren't just pictures – they're whispers from our planet, 
              calling us to listen, understand, and act."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
