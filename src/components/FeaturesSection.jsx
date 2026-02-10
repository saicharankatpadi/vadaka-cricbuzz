import { useState, useEffect } from 'react';
import { 
  Home, 
  Tv, 
  BarChart3, 
  TrendingUp, 
  Target 
} from 'lucide-react';
import DashboardUI from './ui-mockups/DashboardUI';
import StreamingUI from './ui-mockups/StreamingUI';
import ScoresUI from './ui-mockups/ScoresUI';
import StatsUI from './ui-mockups/StatsUI';
import PredictorUI from './ui-mockups/PredictorUI';

const tabs = [
  { id: 'dashboard', label: 'Live Dashboard', icon: Home, color: 'green', mobileLabel: 'Dashboard' },
  { id: 'streaming', label: 'HD Streaming', icon: Tv, color: 'amber', mobileLabel: 'Streaming' },
  { id: 'scores', label: 'Live Scores', icon: BarChart3, color: 'pink', mobileLabel: 'Scores' },
  { id: 'stats', label: 'Player Stats', icon: TrendingUp, color: 'purple', mobileLabel: 'Stats' },
  { id: 'predictor', label: 'Win Predictor', icon: Target, color: 'blue', mobileLabel: 'Predictor' },
];

const tabContent = {
  dashboard: {
    label: 'Live Dashboard',
    title: 'Your Personal Cricket Command Center',
    description: 'Access all live matches, upcoming fixtures, and your favorite teams in one place. Our intelligent dashboard curates content based on your preferences, showing real-time scores, match highlights, and personalized notifications for every boundary and wicket.',
    component: DashboardUI,
    labelColor: 'text-green-400',
  },
  streaming: {
    label: 'HD Streaming',
    title: 'Crystal Clear Broadcast in Multiple Qualities',
    description: 'Watch every match in stunning HD with adaptive streaming technology. Switch between 240p to 4K quality based on your connection. Features include multi-camera angles, instant replays, and picture-in-picture mode for multitasking.',
    component: StreamingUI,
    labelColor: 'text-amber-400',
  },
  scores: {
    label: 'Live Scores',
    title: 'Ball-by-Ball Updates & Commentary',
    description: 'Never miss a moment with our comprehensive scoreboard. Get ball-by-ball commentary, wagon wheel graphics, partnership stats, and fall of wickets. Track every run, boundary, and wicket with detailed statistics and insights.',
    component: ScoresUI,
    labelColor: 'text-pink-400',
  },
  stats: {
    label: 'Player Stats',
    title: 'Comprehensive Analytics & Insights',
    description: 'Dive deep into player and team statistics with our advanced analytics dashboard. Compare career records, analyze performance trends, view heat maps, and access historical data spanning decades of cricket history.',
    component: StatsUI,
    labelColor: 'text-purple-400',
  },
  predictor: {
    label: 'Win Predictor',
    title: 'AI-Powered Match Predictions',
    description: 'Our advanced algorithm analyzes real-time match data, pitch conditions, player form, and historical trends to predict match outcomes. Get live win probability updates after every ball, along with key factors influencing the game.',
    component: PredictorUI,
    labelColor: 'text-sky-400',
  },
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.findIndex(t => t.id === prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Scroll mobile tab into view
    const mobileTab = document.querySelector(`[data-mobile-tab="${tabId}"]`);
    mobileTab?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const currentContent = tabContent[activeTab];
  const UIComponent = currentContent.component;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[rgba(255,107,53,0.05)] to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-[#ff6b35] text-sm font-bold uppercase tracking-widest mb-4">
            One-Stop Cricket Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight">
            Everything you need to experience{' '}
            <span className="text-[#ff6b35]">Live Cricket</span>
          </h2>
        </div>

        {/* Feature Showcase */}
        <div className="glass-panel p-4 sm:p-6 lg:p-10">
          {/* Desktop Tabs */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const colorClasses = {
                green: 'text-green-400 after:bg-green-400 after:shadow-[0_0_20px_rgba(74,222,128,0.5)]',
                amber: 'text-amber-400 after:bg-amber-400 after:shadow-[0_0_20px_rgba(251,191,36,0.5)]',
                pink: 'text-pink-400 after:bg-pink-400 after:shadow-[0_0_20px_rgba(244,114,182,0.5)]',
                purple: 'text-purple-400 after:bg-purple-400 after:shadow-[0_0_20px_rgba(167,139,250,0.5)]',
                blue: 'text-sky-400 after:bg-sky-400 after:shadow-[0_0_20px_rgba(56,189,248,0.5)]',
              };

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2.5 px-6 py-4 rounded-xl font-semibold transition-all duration-300 relative
                    ${isActive ? colorClasses[tab.color] : 'text-white/60 hover:text-white/90 hover:bg-white/5'}
                    ${isActive ? 'after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[60%] after:h-[3px] after:rounded-full' : ''}
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Tabs - Horizontal Scroll */}
          <div className="md:hidden relative mb-8">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 -mx-4 pb-2 snap-x">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                const borderColors = {
                  green: 'border-green-400 text-green-400',
                  amber: 'border-amber-400 text-amber-400',
                  pink: 'border-pink-400 text-pink-400',
                  purple: 'border-purple-400 text-purple-400',
                  blue: 'border-sky-400 text-sky-400',
                };

                return (
                  <button
                    key={tab.id}
                    data-mobile-tab={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex-shrink-0 flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border-2 transition-all duration-300 snap-start min-w-[100px]
                      ${isActive ? `bg-white/10 ${borderColors[tab.color]}` : 'border-transparent bg-white/5 text-white/60'}
                    `}
                  >
                    <Icon className="w-7 h-7" />
                    <span className="text-xs font-semibold whitespace-nowrap">{tab.mobileLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="animate-[fadeIn_0.5s_ease]">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left p-4">
                <div className={`text-xs font-extrabold uppercase tracking-widest mb-4 ${currentContent.labelColor}`}>
                  {currentContent.label}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-5 tracking-tight">
                  {currentContent.title}
                </h3>
                <p className="text-base text-white/70 leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* UI Mockup */}
              <div className="perspective-1000">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.5)] border border-white/10 
                  transform transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0
                  lg:rotate-y-[-5deg] lg:rotate-x-[5deg] lg:hover:rotate-y-0 lg:hover:rotate-x-0">
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-white/20 to-transparent pointer-events-none" 
                    style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', WebkitMaskComposite: 'xor' }} />
                  
                  <UIComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}