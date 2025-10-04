import StarField from '@/components/StarField';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import PreviewSection from '@/components/PreviewSection';
import ClosingSection from '@/components/ClosingSection';

const Index = () => {
  return (
    <div className="relative">
      {/* Enhanced Static Cosmic Background */}
      <div className="fixed inset-0 -z-10">
        {/* Primary cosmic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/80 to-blue-900/70">
          {/* Layered gradient effects for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue/30 via-transparent to-cosmic-purple/20" />
          <div className="absolute inset-0 bg-gradient-radial from-cosmic-cyan/10 via-transparent to-cosmic-purple/15" />
          
          {/* Enhanced star field */}
          <div className="absolute inset-0">
            {/* Large prominent stars */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-cosmic-cyan rounded-full animate-pulse shadow-lg shadow-cosmic-cyan/50" />
            <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-cosmic-purple rounded-full animate-pulse shadow-lg shadow-cosmic-purple/50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cosmic-cyan/80 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" style={{ animationDelay: '0.5s' }} />
            
            {/* Medium stars */}
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
            <div className="absolute top-16 right-1/4 w-2 h-2 bg-cosmic-purple/80 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
            <div className="absolute bottom-16 left-1/3 w-1.5 h-1.5 bg-cosmic-blue/70 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/4 left-3/4 w-1.5 h-1.5 bg-cosmic-cyan/90 rounded-full animate-star-twinkle" style={{ animationDelay: '3s' }} />
            <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-star-twinkle shadow-lg shadow-indigo-400/30" style={{ animationDelay: '1s' }} />
            
            {/* Small twinkling stars */}
            <div className="absolute top-3/4 left-1/5 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '5s', animationDuration: '3s' }} />
            <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-cosmic-cyan rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }} />
            <div className="absolute bottom-1/5 left-2/3 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '6s', animationDuration: '3s' }} />
            <div className="absolute top-2/3 right-2/3 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '4s', animationDuration: '5s' }} />
            
            {/* Additional scattered stars for richness */}
            <div className="absolute top-10 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '7s' }} />
            <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-blue-200/80 rounded-full animate-pulse" style={{ animationDelay: '3.5s' }} />
            <div className="absolute top-2/5 left-1/6 w-1.5 h-1.5 bg-purple-200/70 rounded-full animate-pulse" style={{ animationDelay: '5.5s' }} />
            <div className="absolute bottom-2/5 right-1/6 w-1 h-1 bg-cyan-200/60 rounded-full animate-pulse" style={{ animationDelay: '8s' }} />
          </div>
          
          {/* Nebula clouds for atmospheric depth */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-cosmic-purple/10 rounded-full blur-2xl animate-nebula-drift" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-cosmic-blue/15 rounded-full blur-xl animate-nebula-drift" style={{ animationDelay: '5s' }} />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cosmic-cyan/10 rounded-full blur-lg animate-nebula-drift" style={{ animationDelay: '10s' }} />
          <div className="absolute bottom-1/2 left-1/4 w-36 h-36 bg-indigo-400/8 rounded-full blur-2xl animate-nebula-drift" style={{ animationDelay: '15s' }} />
          
          {/* Subtle cosmic dust layers */}
          <div className="absolute top-1/4 left-1/2 w-28 h-28 bg-slate-400/5 rounded-full blur-xl animate-float" style={{ animationDuration: '25s' }} />
          <div className="absolute bottom-1/3 right-1/2 w-20 h-20 bg-blue-300/8 rounded-full blur-lg animate-float" style={{ animationDuration: '30s', animationDelay: '8s' }} />
        </div>
      </div>
      
      <StarField />
      <div className="relative z-10">
        <HeroSection />
        <StorySection />
        <PreviewSection />
        <ClosingSection />
      </div>
    </div>
  );
};

export default Index;
