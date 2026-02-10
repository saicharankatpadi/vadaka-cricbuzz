import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import FeaturesSection from './components/FeaturesSection';
import MatchWidget from './components/MatchWidget';
import FloatingParticles from './components/FloatingParticles';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import HighlightsCarousel from './components/HighlightsCarousel';

// Placeholder pages for navigation
const Matches = () => <div className="pt-20 text-white text-center">Matches Page</div>;
const Standings = () => <div className="pt-20 text-white text-center">Standings Page</div>;
const News = () => <div className="pt-20 text-white text-center">News Page</div>;
const Videos = () => <div className="pt-20 text-white text-center">Videos Page</div>;
const Stats = () => <div className="pt-20 text-white text-center">Stats Page</div>;
const GameHub = () => <div className="pt-20 text-white text-center">Game Hub Page</div>;

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen bg-[#0a0e2e]">
        {/* Logo */}
        

        {/* Header */}
        <Header onMenuClick={() => setIsSideMenuOpen(true)} />
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
          {/* Highlights Carousel - Right below header, no padding-top needed */}
      <HighlightsCarousel />
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div 
            className="absolute inset-0 animate-gradient-pulse"
            style={{
              background: `
                radial-gradient(ellipse at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 80%, rgba(255, 119, 48, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 40% 60%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)
              `
            }}
          />
        </div>
        <FloatingParticles />

        {/* Routes */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
               
                <VideoSection />
                <FeaturesSection />
              </>
            } />
            <Route path="/matches" element={<Matches />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/news" element={<News />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/game-hub" element={<GameHub />} />
          </Routes>
        </main>

        <MatchWidget />
      </div>
    </Router>
  );
}

export default App;