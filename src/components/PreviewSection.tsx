import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { locationImages } from '@/assets/location-images';

const locations = [
  {
    id: 'amazon',
    name: 'Amazon Rainforest',
    subtitle: 'DEFORESTATION CRISIS',
    impact: '-17%',
    metric: 'Forest Lost',
    period: '2000-2020',
    icon: '🌳',
    color: 'from-green-500 to-red-500'
  },
  {
    id: 'greenland',
    name: 'Greenland Ice Sheet',
    subtitle: 'ICE MELT ACCELERATION',
    impact: '-280B',
    metric: 'Tons Ice/Year',
    period: '2010-2023',
    icon: '❄️',
    color: 'from-cyan-400 to-blue-600'
  },
  {
    id: 'aral-sea',
    name: 'Aral Sea',
    subtitle: 'WATER DISAPPEARANCE',
    impact: '-90%',
    metric: 'Water Volume',
    period: '1960-2020',
    icon: '🌊',
    color: 'from-blue-400 to-yellow-600'
  },
  {
    id: 'california',
    name: 'California',
    subtitle: 'WILDFIRE SURGE',
    impact: '+250%',
    metric: 'Fire Area',
    period: '1980-2020',
    icon: '🔥',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    subtitle: 'URBAN EXPANSION',
    impact: '+400%',
    metric: 'Land Area',
    period: '1990-2020',
    icon: '🏗️',
    color: 'from-yellow-500 to-purple-600'
  },
  {
    id: 'lake-mead',
    name: 'Lake Mead',
    subtitle: 'WATER CRISIS',
    impact: '-70%',
    metric: 'Water Level',
    period: '2000-2023',
    icon: '💧',
    color: 'from-blue-500 to-orange-500'
  },
  {
    id: 'alaska',
    name: 'Alaska',
    subtitle: 'GLACIAL RETREAT',
    impact: '-50%',
    metric: 'Glacier Mass',
    period: '1980-2020',
    icon: '🗻',
    color: 'from-white to-blue-500'
  },
  {
    id: 'urmia',
    name: 'Urmia Lake',
    subtitle: 'LAKE DRYING',
    impact: '-95%',
    metric: 'Surface Area',
    period: '1995-2023',
    icon: '🏜️',
    color: 'from-blue-400 to-red-400'
  },
  {
    id: 'vegas',
    name: 'Las Vegas',
    subtitle: 'DESERT GROWTH',
    impact: '+300%',
    metric: 'Urban Area',
    period: '1985-2020',
    icon: '🌃',
    color: 'from-yellow-400 to-red-500'
  },
];

const PreviewSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cosmic-cyan via-white to-cosmic-purple bg-clip-text text-transparent">
            THE DATA SPEAKS
          </h2>
          <p className="text-lg sm:text-xl md:text-xl text-white/90 max-w-2xl mx-auto px-4 sm:px-0 font-bold">
            Raw numbers revealing Earth's transformation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16 auto-rows-fr">
          {locations.map((location, index) => (
            <Card
              key={location.id}
              className="glass-card p-4 sm:p-6 hover:scale-105 transition-all duration-300 cursor-pointer group border-cosmic-cyan/20 hover:border-cosmic-cyan/40 touch-target flex flex-col h-full relative overflow-hidden"
              onClick={() => navigate(`/location/${location.id}`)}
              style={{
                animation: `fade-in 0.8s ease-out ${index * 0.2}s backwards`,
                minHeight: '450px',
              }}
            >
              {/* Impact gradient overlay */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${location.color} opacity-20 blur-xl`} />
              
              <div className="aspect-video rounded-lg mb-4 bg-gradient-to-br from-cosmic-blue/20 to-cosmic-purple/20 flex items-center justify-center overflow-hidden relative flex-shrink-0">
                {locationImages[location.id]?.preview ? (
                  <img
                    src={locationImages[location.id]?.preview}
                    alt={location.name + ' preview'}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-cosmic-cyan text-2xl">🌍</div>
                )}
                {/* Icon overlay */}
                <div className="absolute top-2 right-2 text-2xl opacity-80">
                  {location.icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-cosmic-cyan text-sm sm:text-base font-semibold">View Transformation</span>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                {/* Location name */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-cosmic-cyan transition-colors">
                  {location.name}
                </h3>
                
                {/* Bold subtitle */}
                <p className="text-red-400 text-sm sm:text-base font-black mb-3 tracking-wider">
                  {location.subtitle}
                </p>
                
                {/* Big impact number */}
                <div className="mb-4 flex-grow flex flex-col justify-center">
                  <div className={`text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-r ${location.color} bg-clip-text text-transparent`}>
                    {location.impact}
                  </div>
                  <div className="text-white/90 text-base font-bold">
                    {location.metric}
                  </div>
                  <div className="text-cosmic-cyan/70 text-sm font-semibold">
                    {location.period}
                  </div>
                </div>

                <div className="mt-auto flex items-center text-cosmic-cyan text-sm sm:text-base font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Data <ArrowRight className="ml-1 w-4 h-4 sm:w-4 sm:h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
