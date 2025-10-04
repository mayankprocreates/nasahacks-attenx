import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { locationImages } from '@/assets/location-images';
import { useIsMobile } from '@/hooks/use-mobile';
import OptimizedImage from '@/components/OptimizedImage';

const locationData: Record<string, any> = {
  amazon: {
    name: 'Amazon Rainforest',
    subtitle: 'THE LUNGS OF EARTH UNDER SIEGE',
    keyStats: {
      impact: '-17%',
      metric: 'Forest Lost',
      period: '2000-2023',
      icon: '🌳',
      color: 'from-green-500 to-red-500',
      trend: 'down'
    },
    visualData: [
      { title: 'CARBON STORED', value: '150B', change: 'TONS', icon: '🏭', color: 'from-green-400 to-blue-500' },
      { title: 'SPECIES HOME', value: '10%', change: 'OF GLOBAL BIODIVERSITY', icon: '🦋', color: 'from-yellow-400 to-green-500' },
      { title: 'AREA CLEARED', value: '800K', change: 'KM² SINCE 1970', icon: '🪓', color: 'from-orange-400 to-red-500' },
      { title: 'WATER CYCLE', value: '20%', change: 'OF FRESHWATER RECYCLED', icon: '💧', color: 'from-blue-400 to-cyan-500' }
    ],
    timeline: [
      { year: '1970', value: '100%', description: 'Original forest cover' },
      { year: '1990', value: '93%', description: '7% deforested' },
      { year: '2004', value: '85%', description: 'Peak deforestation year' },
      { year: '2023', value: '83%', description: 'Current coverage' }
    ],
    comparison: {
      before: 'INTACT ECOSYSTEM',
      after: 'MASSIVE CLEARANCE',
      impact: 'CLIMATE DISRUPTION'
    }
  },
  greenland: {
    name: 'Greenland Ice Sheet',
    subtitle: 'ANCIENT ICE VANISHING IN OUR LIFETIME',
    keyStats: {
      impact: '-280B',
      metric: 'Tons Ice/Year',
      period: '2010-2023',
      icon: '❄️',
      color: 'from-cyan-400 to-blue-600',
      trend: 'down'
    },
    visualData: [
      { title: 'SEA LEVEL RISE', value: '7.4M', change: 'IF FULLY MELTED', icon: '🌊', color: 'from-blue-400 to-red-500' },
      { title: 'ICE THICKNESS', value: '1.67KM', change: 'AVERAGE DEPTH', icon: '🧊', color: 'from-cyan-300 to-blue-500' },
      { title: 'SURFACE MELT', value: '96%', change: 'EXPERIENCED MELTING', icon: '🌡️', color: 'from-yellow-400 to-orange-500' },
      { title: 'FRESHWATER', value: '8%', change: 'OF EARTH\'S RESERVES', icon: '💧', color: 'from-cyan-400 to-blue-600' }
    ],
    timeline: [
      { year: '1990', value: '0', description: 'Baseline ice mass' },
      { year: '2000', value: '-50B', description: 'Tons lost annually' },
      { year: '2010', value: '-200B', description: 'Accelerating loss' },
      { year: '2023', value: '-280B', description: 'Current loss rate' }
    ],
    comparison: {
      before: 'STABLE ICE SHEET',
      after: 'RAPID MELTING',
      impact: 'RISING SEAS'
    }
  },
  'aral-sea': {
    name: 'Aral Sea',
    subtitle: 'FROM WORLD\'S 4TH LARGEST LAKE TO DESERT',
    keyStats: {
      impact: '-90%',
      metric: 'Water Volume',
      period: '1960-2020',
      icon: '🌊',
      color: 'from-blue-400 to-yellow-600',
      trend: 'down'
    },
    visualData: [
      { title: 'AREA LOST', value: '89%', change: 'SURFACE REDUCTION', icon: '🏜️', color: 'from-blue-400 to-orange-500' },
      { title: 'SALINITY', value: '10X', change: 'INCREASE', icon: '🧂', color: 'from-blue-300 to-red-400' },
      { title: 'NEW DESERT', value: '54K', change: 'KM² ARALKUM DESERT', icon: '🌵', color: 'from-yellow-400 to-red-500' },
      { title: 'JOBS LOST', value: '60K', change: 'FISHING INDUSTRY', icon: '🐟', color: 'from-blue-400 to-gray-500' }
    ],
    timeline: [
      { year: '1960', value: '68,000', description: 'km² surface area' },
      { year: '1980', value: '40,000', description: 'km² significant shrinking' },
      { year: '2000', value: '17,000', description: 'km² critical levels' },
      { year: '2020', value: '7,000', description: 'km² current size' }
    ],
    comparison: {
      before: 'MASSIVE INLAND SEA',
      after: 'BARREN DESERT',
      impact: 'ECOSYSTEM COLLAPSE'
    }
  },
  california: {
    name: 'California',
    subtitle: 'DROUGHT & WILDFIRE SURGE',
    keyStats: {
      impact: '+250%',
      metric: 'Fire Area',
      period: '1980-2020',
      icon: '🔥',
      color: 'from-orange-500 to-red-600',
      trend: 'up'
    },
    visualData: [
      { title: 'FIRE SEASON', value: '+2.5', change: 'MONTHS LONGER', icon: '📅', color: 'from-orange-400 to-red-500' },
      { title: 'RECORD YEAR', value: '4.2M', change: 'ACRES BURNED 2020', icon: '🔥', color: 'from-red-400 to-red-600' },
      { title: 'LAND SINKING', value: '28FT', change: 'CENTRAL VALLEY', icon: '⬇️', color: 'from-yellow-400 to-red-500' },
      { title: 'TEMPERATURE', value: '+1.1°C', change: 'SINCE 1895', icon: '🌡️', color: 'from-yellow-300 to-red-400' }
    ],
    timeline: [
      { year: '1970', value: '250K', description: 'acres avg burned' },
      { year: '1990', value: '400K', description: 'acres increasing' },
      { year: '2010', value: '800K', description: 'acres accelerating' },
      { year: '2020', value: '1.2M', description: 'acres current avg' }
    ],
    comparison: {
      before: 'MANAGEABLE FIRES',
      after: 'MEGA WILDFIRES',
      impact: 'CLIMATE EXTREMES'
    }
  },
  dubai: {
    name: 'Dubai',
    subtitle: 'URBAN EXPANSION & LAND CREATION',
    keyStats: {
      impact: '+400%',
      metric: 'Land Area',
      period: '1990-2020',
      icon: '🏗️',
      color: 'from-yellow-500 to-purple-600',
      trend: 'up'
    },
    visualData: [
      { title: 'LAND CREATED', value: '3,200', change: 'HECTARES RECLAIMED', icon: '🏝️', color: 'from-blue-400 to-yellow-500' },
      { title: 'SAND MOVED', value: '450M', change: 'CUBIC METERS', icon: '⛱️', color: 'from-yellow-400 to-orange-500' },
      { title: 'COASTLINE', value: '120KM', change: 'TRANSFORMED', icon: '🌊', color: 'from-cyan-400 to-blue-500' },
      { title: 'HABITAT LOST', value: '500', change: 'HECTARES SEAGRASS', icon: '🌱', color: 'from-green-400 to-red-500' }
    ],
    timeline: [
      { year: '2000', value: '0', description: 'hectares reclaimed' },
      { year: '2005', value: '800', description: 'hectares Palm Jumeirah' },
      { year: '2010', value: '2,000', description: 'hectares major progress' },
      { year: '2020', value: '3,200', description: 'hectares total created' }
    ],
    comparison: {
      before: 'NATURAL COASTLINE',
      after: 'ARTIFICIAL ISLANDS',
      impact: 'MARINE DISRUPTION'
    }
  },
  'lake-mead': {
    name: 'Lake Mead',
    subtitle: 'WATER CRISIS & MEGADROUGHT',
    keyStats: {
      impact: '-70%',
      metric: 'Water Level',
      period: '2000-2023',
      icon: '💧',
      color: 'from-blue-500 to-orange-500',
      trend: 'down'
    },
    visualData: [
      { title: 'LEVEL DROP', value: '43M', change: 'METERS FALLEN', icon: '📉', color: 'from-blue-400 to-red-500' },
      { title: 'CAPACITY', value: '27%', change: 'CURRENT LEVEL', icon: '🏺', color: 'from-blue-400 to-orange-500' },
      { title: 'PEOPLE AFFECTED', value: '40M', change: 'ACROSS 7 STATES', icon: '👥', color: 'from-blue-300 to-red-400' },
      { title: 'POWER LOSS', value: '40%', change: 'HYDROPOWER DROP', icon: '⚡', color: 'from-yellow-400 to-red-500' }
    ],
    timeline: [
      { year: '2000', value: '365M', description: 'meters above sea level' },
      { year: '2010', value: '340M', description: 'meters steady decline' },
      { year: '2020', value: '325M', description: 'meters critical low' },
      { year: '2023', value: '322M', description: 'meters historic low' }
    ],
    comparison: {
      before: 'FULL RESERVOIR',
      after: 'EXPOSED LAKEBED',
      impact: 'WATER SHORTAGES'
    }
  },
  alaska: {
    name: 'Alaska',
    subtitle: 'GLACIAL RETREAT & PERMAFROST THAW',
    keyStats: {
      impact: '-50%',
      metric: 'Glacier Mass',
      period: '1980-2020',
      icon: '🗻',
      color: 'from-white to-blue-500',
      trend: 'down'
    },
    visualData: [
      { title: 'WARMING RATE', value: '2X', change: 'GLOBAL AVERAGE', icon: '🌡️', color: 'from-cyan-400 to-red-500' },
      { title: 'GLACIERS LOST', value: '50%', change: 'MASS REDUCTION', icon: '🧊', color: 'from-white to-blue-600' },
      { title: 'PERMAFROST', value: '30%', change: 'THAWED AREAS', icon: '❄️', color: 'from-cyan-300 to-brown-500' },
      { title: 'COASTLINE', value: '5M', change: 'ANNUAL EROSION', icon: '🌊', color: 'from-blue-400 to-red-400' }
    ],
    timeline: [
      { year: '1980', value: '100%', description: 'baseline glacier mass' },
      { year: '1995', value: '85%', description: 'significant retreat' },
      { year: '2010', value: '70%', description: 'accelerating loss' },
      { year: '2020', value: '50%', description: 'half mass lost' }
    ],
    comparison: {
      before: 'MASSIVE GLACIERS',
      after: 'RETREATING ICE',
      impact: 'ARCTIC CHANGE'
    }
  },
  urmia: {
    name: 'Urmia Lake',
    subtitle: 'LAKE DRYING CATASTROPHE',
    keyStats: {
      impact: '-95%',
      metric: 'Surface Area',
      period: '1995-2023',
      icon: '🏜️',
      color: 'from-blue-400 to-red-400',
      trend: 'down'
    },
    visualData: [
      { title: 'AREA LOST', value: '95%', change: 'SURFACE REDUCTION', icon: '📏', color: 'from-blue-400 to-red-500' },
      { title: 'ORIGINAL SIZE', value: '5,000', change: 'KM² HISTORIC', icon: '🌊', color: 'from-blue-500 to-cyan-400' },
      { title: 'SALT STORMS', value: '300KM', change: 'REACH DISTANCE', icon: '🌪️', color: 'from-gray-400 to-red-500' },
      { title: 'SPECIES LOST', value: '75%', change: 'BIODIVERSITY DROP', icon: '🦎', color: 'from-green-400 to-red-500' }
    ],
    timeline: [
      { year: '1995', value: '5,000', description: 'km² original size' },
      { year: '2005', value: '3,000', description: 'km² declining' },
      { year: '2015', value: '1,000', description: 'km² critical' },
      { year: '2023', value: '250', description: 'km² current' }
    ],
    comparison: {
      before: 'VAST HYPERSALINE LAKE',
      after: 'SALT DESERT',
      impact: 'ECOSYSTEM DEATH'
    }
  },
  vegas: {
    name: 'Las Vegas',
    subtitle: 'DESERT GROWTH & WATER STRESS',
    keyStats: {
      impact: '+300%',
      metric: 'Urban Area',
      period: '1985-2020',
      icon: '🌃',
      color: 'from-yellow-400 to-red-500',
      trend: 'up'
    },
    visualData: [
      { title: 'POPULATION', value: '2.3M', change: 'FROM 25K IN 1950', icon: '👥', color: 'from-blue-400 to-yellow-500' },
      { title: 'WATER USE', value: '47%', change: 'REDUCTION PER CAPITA', icon: '💧', color: 'from-blue-500 to-green-400' },
      { title: 'HEAT ISLAND', value: '+7°C', change: 'ABOVE DESERT', icon: '🌡️', color: 'from-yellow-400 to-red-500' },
      { title: 'WATER SOURCE', value: '90%', change: 'FROM COLORADO RIVER', icon: '🏞️', color: 'from-blue-400 to-cyan-500' }
    ],
    timeline: [
      { year: '1950', value: '25K', description: 'people desert town' },
      { year: '1980', value: '500K', description: 'people rapid growth' },
      { year: '2000', value: '1.2M', description: 'people boom period' },
      { year: '2023', value: '2.3M', description: 'people current' }
    ],
    comparison: {
      before: 'SMALL DESERT TOWN',
      after: 'MEGA METROPOLIS',
      impact: 'WATER DEPENDENCY'
    }
  }
};

const Location = () => {
  const { id } = useParams<{ id: string }>();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  const location = id ? locationData[id] : null;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]); // Re-run when location ID changes

  if (!location) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
        </div>
      </div>
    );
  }

  const locationImages_data = locationImages[id as keyof typeof locationImages];
  const beforeImage = locationImages_data?.before;
  const afterImage = locationImages_data?.after;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="relative z-10 p-4 sm:p-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            {location.name}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            {location.subtitle}
          </p>
        </div>
      </div>

      {/* Key Impact Statistics */}
      <div className="px-4 sm:px-6 mb-8 sm:mb-12">
        <Card className="bg-black/20 backdrop-blur-lg border-white/10 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="text-6xl sm:text-7xl lg:text-8xl">{location.keyStats.icon}</div>
            <div className="text-center">
              <div className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r ${location.keyStats.color} bg-clip-text text-transparent flex items-center justify-center flex-wrap gap-2`}>
                {location.keyStats.trend === 'down' ? <TrendingDown className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-red-500" /> : <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-orange-500" />}
                <span className="break-all">{location.keyStats.impact}</span>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mt-2">{location.keyStats.metric}</div>
              <div className="text-lg sm:text-xl lg:text-2xl text-gray-400">{location.keyStats.period}</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Visual Data Grid */}
      <div className="px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">IMPACT BREAKDOWN</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {location.visualData.map((data: any, index: number) => (
            <Card key={index} className="bg-black/20 backdrop-blur-lg border-white/10 p-4 sm:p-6 text-center hover:scale-105 active:scale-95 transition-transform duration-300 touch-manipulation">
              <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{data.icon}</div>
              <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${data.color} bg-clip-text text-transparent mb-2 leading-none`}>
                {data.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-gray-300 mb-1 leading-tight">{data.change}</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider leading-tight">{data.title}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">VISUAL EVIDENCE</h2>
        <Card className="bg-black/20 backdrop-blur-lg border-white/10 overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
            {/* After Image (base layer) */}
            <OptimizedImage
              src={afterImage}
              alt={`${location.name} after`}
              className="absolute inset-0 w-full h-full object-cover"
              priority={true}
              placeholder="🌍"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            />
            
            {/* Before Image with Clip Path (overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
              }}
            >
              <OptimizedImage
                src={beforeImage}
                alt={`${location.name} before`}
                className="w-full h-full object-cover"
                priority={true}
                placeholder="🌎"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              />
            </div>
            
            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize touch-manipulation"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 border-l-2 border-r-2 border-gray-600"></div>
              </div>
            </div>
            
            {/* Before/After Labels */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg">
              <span className="text-sm sm:text-base font-bold">BEFORE</span>
            </div>
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg">
              <span className="text-sm sm:text-base font-bold">AFTER</span>
            </div>
          </div>
          
          {/* Slider Control */}
          <div className="p-4 sm:p-6">
            <div className="mb-3 sm:mb-4">
              <p className="text-sm sm:text-base text-gray-400 text-center">
                {isMobile ? 'Drag the slider to compare' : 'Drag or click the slider to compare'}
              </p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${sliderPosition}%, #4b5563 ${sliderPosition}%, #4b5563 100%)`
              }}
            />
            
            {/* Comparison Summary */}
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-sm sm:text-base font-bold text-blue-300 mb-1">BEFORE</div>
                <div className="text-base sm:text-lg font-bold leading-tight">{location.comparison.before}</div>
              </div>
              <div className="bg-orange-600/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-sm sm:text-base font-bold text-orange-300 mb-1">AFTER</div>
                <div className="text-base sm:text-lg font-bold leading-tight">{location.comparison.after}</div>
              </div>
              <div className="bg-red-600/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-sm sm:text-base font-bold text-red-300 mb-1">RESULT</div>
                <div className="text-base sm:text-lg font-bold leading-tight">{location.comparison.impact}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Timeline Chart */}
      <div className="px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">CHANGE OVER TIME</h2>
        <Card className="bg-black/20 backdrop-blur-lg border-white/10 p-4 sm:p-6 lg:p-8">
          <div className="space-y-4 sm:space-y-6">
            {location.timeline.map((point: any, index: number) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className="w-full sm:w-16 lg:w-20 text-xl sm:text-2xl font-bold text-blue-300">{point.year}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="text-2xl sm:text-3xl font-black text-white">{point.value}</div>
                    <div className="text-base sm:text-lg text-gray-400">{point.description}</div>
                  </div>
                  <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${location.keyStats.color} transition-all duration-1000`}
                      style={{ width: `${80 - (index * 20)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="px-4 sm:px-6 pb-8 sm:pb-12">
        <Card className="bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 backdrop-blur-lg border-white/10 p-6 sm:p-8 text-center">
          <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 text-yellow-400" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">URGENT ACTION NEEDED</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            These dramatic changes are happening in our lifetime. Every fraction of a degree matters.
            Every year of delay makes recovery harder.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Location;
