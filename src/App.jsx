import { useState, useEffect, useRef, useCallback } from 'react';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import FeaturesSection from './components/FeaturesSection';
import MatchWidget from './components/MatchWidget';
import FloatingParticles from './components/FloatingParticles';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* logo */}
      <div>
        <img src="/images/vadaka.svg" alt="Cricket Background" className="fixed w-32 h-32 " />
      </div>
      {/* Background Gradient */}
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

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
      </main>

      {/* Match Widget */}
      <MatchWidget />
    </div>
  );
}

export default App;