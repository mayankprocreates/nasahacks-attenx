import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, MapPin } from 'lucide-react';
import earthMap from '@/assets/earth-map.jpg';

// Convert lat/lng to x/y percentage for positioning on map
const latLngToPercent = (lat: number, lng: number) => {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
};

const locations = [
  // South America
  { id: 'amazon', name: 'Amazon Rainforest', lat: -5, lng: -60 },
  
  // North America
  { id: 'california', name: 'California Wildfires', lat: 37, lng: -120 },
  { id: 'lake-mead', name: 'Lake Mead', lat: 36, lng: -114.5 },
  { id: 'vegas', name: 'Las Vegas', lat: 36.2, lng: -115.2 },
  { id: 'alaska', name: 'Alaska Glaciers', lat: 64, lng: -153 },
  
  // Europe/Arctic
  { id: 'greenland', name: 'Greenland Ice Sheet', lat: 72, lng: -40 },
  { id: 'chernobyl', name: 'Chernobyl Exclusion Zone', lat: 51.3, lng: 30.1 },
  
  // Asia
  { id: 'aral-sea', name: 'Aral Sea', lat: 45, lng: 59 },
  { id: 'urmia', name: 'Lake Urmia', lat: 37.5, lng: 45.5 },
  
  // Middle East
  { id: 'dubai', name: 'Dubai Land Reclamation', lat: 25.2, lng: 55.3 },
  
  // Southeast Asia
  { id: 'jakarta', name: 'Jakarta Subsidence', lat: -6.2, lng: 106.8 },
];

const Map = () => {
  const navigate = useNavigate();
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cosmic-purple/10 to-background" />

      {/* Back button */}
      <Button
        onClick={() => navigate('/')}
        variant="ghost"
        className="absolute top-8 left-8 z-20 text-cosmic-cyan hover:text-cosmic-cyan/80 hover:bg-cosmic-cyan/10"
      >
        <Home className="mr-2 w-5 h-5" />
        Home
      </Button>

      {/* Title */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent">
          Earth's Transformation Map
        </h1>
        <p className="text-muted-foreground mt-2">Explore 11 locations showing dramatic environmental change • Click pins to investigate</p>
      </div>

      {/* Static Earth Map */}
      <div className="relative h-screen flex items-center justify-center px-4">
        <div className="relative w-full max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-cosmic-cyan/20 relative">
            <img 
              src={earthMap} 
              alt="World Map" 
              className="w-full h-auto"
              loading="eager"
              decoding="async"
            />
            
            {/* Location Pins */}
            {locations.map((location) => {
              const { x, y } = latLngToPercent(location.lat, location.lng);
              return (
                <button
                  key={location.id}
                  onClick={() => navigate(`/location/${location.id}`)}
                  onMouseEnter={() => setHoveredPin(location.id)}
                  onMouseLeave={() => setHoveredPin(null)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-fade-in"
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`,
                  }}
                >
                  {/* Pin */}
                  <div className="relative">
                    <MapPin 
                      className="w-8 h-8 text-cosmic-cyan fill-cosmic-cyan/80 drop-shadow-[0_0_12px_rgba(0,240,255,0.8)] transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(0,240,255,1)] animate-pulse"
                      strokeWidth={2.5}
                    />
                    
                    {/* Pulse animation ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cosmic-cyan/20 rounded-full animate-ping" />
                    
                    {/* Location Name Tooltip */}
                    {hoveredPin === location.id && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap z-30">
                        <div className="glass-card px-4 py-2 text-sm font-medium text-cosmic-cyan animate-scale-in border border-cosmic-cyan/30">
                          {location.name}
                          <div className="text-xs text-muted-foreground mt-1">Click to explore changes</div>
                        </div>
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-cosmic-cyan/80" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 glass-card px-8 py-4 rounded-full z-20 border border-cosmic-cyan/20">
        <p className="text-sm text-muted-foreground text-center">
          <span className="text-cosmic-cyan font-semibold">11 Global Locations</span> • 
          Hover pins for details • Click to explore environmental changes
        </p>
      </div>
    </div>
  );
};

export default Map;
