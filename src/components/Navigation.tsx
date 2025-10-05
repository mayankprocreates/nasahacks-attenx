import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Map, Info, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Explore', section: 'story', icon: Map },
    { label: 'About', path: '/about', icon: Info },
  ];

  const handleNavigation = (item: any) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.section) {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="text-2xl">🌍</div>
              <span className="font-bold text-lg bg-gradient-to-r from-cosmic-cyan to-cosmic-blue bg-clip-text text-transparent">
                Beneath Our Sky 🌎
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className="flex items-center space-x-2 text-foreground/80 hover:text-cosmic-cyan transition-colors duration-200 hover:scale-105"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-cosmic-cyan"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-cosmic-cyan/10 transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5 text-cosmic-cyan" />
                  <span className="font-medium text-foreground">{item.label}</span>
                </button>
              ))}
              
              <div className="pt-2 border-t border-border/30">
                <Button
                  className="w-full bg-cosmic-cyan/90 hover:bg-cosmic-cyan text-cosmic-black font-semibold py-3 rounded-lg transition-all"
                  onClick={() => {
                    const element = document.getElementById('story');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Start Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;