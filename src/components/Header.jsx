// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ onMenuClick }) => {
  const [isTournamentOpen, setIsTournamentOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTournament, setCurrentTournament] = useState(null);
  const [tournaments, setTournaments] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  // TODO: Backend API Integration
  useEffect(() => {
    const fetchTournaments = async () => {
      // const response = await fetch('/api/tournaments');
      // const data = await response.json();
      
      const fakeData = [
        { 
          id: 'vadaka-2024', 
          name: 'Vadaka Tournament', 
          season: '2024',
          logo: '/images/vadaka.svg',
          isActive: true 
        },
        { 
          id: 'rhaspody-2024', 
          name: 'Rhaspody Cup', 
          season: '2024',
          logo: '/images/rhaspody.svg',
          isActive: false 
        }
      ];
      
      setTournaments(fakeData);
      setCurrentTournament(fakeData[0]);
    };
    
    fetchTournaments();
  }, []);

  const handleTournamentSelect = (tournament) => {
    setCurrentTournament(tournament);
    setIsTournamentOpen(false);
    // Navigate to tournament-specific page
    navigate(`/?tournament=${tournament.id}`);
    // Or: window.location.href = `/?tournament=${tournament.id}`;
  };

  // Navigation items with active state based on current path
  const navItems = [
    { label: 'HOME', path: '/', active: location.pathname === '/' },
    { label: 'MATCHES', path: '/matches', active: location.pathname === '/matches' },
    { label: 'STANDINGS', path: '/standings', active: location.pathname === '/standings' },
    { label: 'NEWS', path: '/news', active: location.pathname === '/news' },
    { label: 'VIDEOS', path: '/videos', active: location.pathname === '/videos' },
    { label: 'STATS', path: '/stats', active: location.pathname === '/stats' },
    { label: 'GAME HUB', path: '/game-hub', active: location.pathname === '/game-hub' },
  ];

  return (
    <header className="bg-[#0a0e2e] sticky top-0 z-50 border-b border-white/10">
      {/* Main Header */}
      <div className="flex items-center justify-between px-4 lg:px-8 h-16">
        
        {/* Left: Logo + Tournament Dropdown */}
        <div className="flex items-center gap-4">
          {/* Logo Container */}
          <div className="relative flex items-center gap-3">
            {/* Main Logo - Always visible */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/images/vadaka.svg" 
                alt="Vadaka Cricket" 
                className="w-20 h-20 object-contain drop-shadow-lg"
              />
              {/* Site Name - hidden on mobile */}
              <span className="hidden md:block text-white font-bold text-lg tracking-tight">
                VADAKA
              </span>
            </Link>

            {/* Tournament Dropdown - Only arrow, no duplicate logo */}
            <button
              onClick={() => setIsTournamentOpen(!isTournamentOpen)}
              className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors ml-2"
              title="Select Tournament"
            >
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-200 ${isTournamentOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Tournament Dropdown Menu */}
            {isTournamentOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-[#0f1535] border border-blue-500/30 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="p-3">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-3">
                    Select Tournament
                  </div>
                  {tournaments.map((tournament) => (
                    <button
                      key={tournament.id}
                      onClick={() => handleTournamentSelect(tournament)}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all ${
                        currentTournament?.id === tournament.id 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      {/* Tournament Logo or Fallback */}
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center overflow-hidden">
                        {tournament.logo ? (
                          <img 
                            src={tournament.logo} 
                            alt={tournament.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xs font-bold text-white">
                            {tournament.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{tournament.name}</div>
                        <div className="text-xs text-gray-500">{tournament.season}</div>
                      </div>
                      {currentTournament?.id === tournament.id && (
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/20 hidden lg:block" />

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-4 py-5 text-sm font-semibold tracking-wide transition-all relative ${
                  item.active 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white rounded-full" />
                )}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="px-4 py-5 text-gray-400 hover:text-white text-sm font-semibold tracking-wide transition-colors">
                MORE
              </button>
              {/* More dropdown menu can be added here */}
            </div>
          </nav>
        </div>

        {/* Right: Search, Sign In, Menu */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button 
            onClick={() => navigate('/search')}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
          >
            <span className="hidden lg:block text-sm font-semibold">SEARCH</span>
            <Search size={20} />
          </button>

          <div className="h-6 w-px bg-white/20 hidden lg:block" />

          {/* Sign In */}
          <button 
            onClick={() => navigate('/signin')}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
          >
            <span className="hidden lg:block text-sm font-semibold">SIGN IN</span>
            <User size={20} />
          </button>

          <div className="h-6 w-px bg-white/20 hidden lg:block" />

          {/* Hamburger Menu */}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              onMenuClick?.();
            }}
            className="text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0f1535] border-t border-white/10 absolute w-full">
          <nav className="flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 text-sm font-semibold flex items-center justify-between ${
                  item.active 
                    ? 'text-white bg-white/5 border-l-4 border-blue-500' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {item.active && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isTournamentOpen && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setIsTournamentOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;