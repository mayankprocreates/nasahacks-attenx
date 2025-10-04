import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 500);
  const scale = Math.max(0.8, 1 - scrollY / 2000);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced rocket with cosmic effects - more subtle */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: Math.max(0.2, 1 - scrollY / 800),
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-cosmic-cyan/10 blur-3xl rounded-full w-24 h-24 animate-cosmic-glow" />
          <div className="text-6xl opacity-20 animate-float relative z-10">🚀</div>
        </div>
      </div>

      {/* Hero content */}
      <div
        className="relative z-30 text-center px-6 max-w-5xl"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight animate-fade-in">
          <span className="block mb-2 sm:mb-3 md:mb-4 text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">When everyone was</span>
          <span className="block bg-gradient-to-r from-cosmic-cyan via-white to-cosmic-purple bg-clip-text text-transparent animate-shimmer">
            aiming for the skies
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 sm:mb-10 md:mb-12 animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
          A journey through Earth's transformation
        </p>

        <Button
          size="lg"
          className="glass-card bg-cosmic-cyan/20 backdrop-blur-sm hover:bg-cosmic-cyan/30 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full border border-cosmic-cyan/30 transition-all hover:scale-105 animate-fade-in touch-target"
          style={{ animationDelay: '0.6s' }}
          onClick={() => {
            document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Begin Journey
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-cosmic-cyan opacity-60 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
