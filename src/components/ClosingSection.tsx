import { useEffect, useState } from 'react';

const ClosingSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="closing" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Enhanced Earth centerpiece */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-400/30 blur-3xl rounded-full w-40 h-40 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute inset-0 bg-green-400/20 blur-2xl rounded-full w-32 h-32 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <div className="text-9xl opacity-30 animate-float relative z-10">🌍</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight animate-fade-in">
          <span className="block mb-2 sm:mb-3 md:mb-4 text-white drop-shadow-2xl" style={{ textShadow: '0 0 30px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6)' }}>Space is our dream,</span>
          <span className="block bg-gradient-to-r from-cosmic-cyan via-cosmic-blue to-cosmic-purple bg-clip-text text-transparent animate-shimmer">
            but Earth is our home.
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto font-medium animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.3s', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
          Let's cherish and protect it while we reach for the stars
        </p>
      </div>
    </section>
  );
};

export default ClosingSection;
