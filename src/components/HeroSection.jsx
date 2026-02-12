import { useState, useEffect } from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const words = [
  { text: 'Live Streaming', className: 'gradient-text-live' },
  { text: 'Live Scores', className: 'gradient-text-score' },
  { text: 'HD Broadcast', className: 'gradient-text-stream' },
  { text: 'Player Stats', className: 'gradient-text-stats' },
  { text: 'Commentary', className: 'gradient-text-commentary' },
  { text: 'Instant Replay', className: 'gradient-text-replay' },
];

const features = [
  { icon: '📺', title: 'Live Streaming' },
  { icon: '📊', title: 'Real-time Scores' },
  { icon: '💬', title: 'Ball-by-Ball' },
  { icon: '📈', title: 'Live Stats' },
  { icon: '🎯', title: 'Win Predictor' },
  { icon: '🏆', title: 'Tournament Hub' },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const waitTime = 2000;

    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      const currentText = words[wordIndex].text;

      if (isDeleting) {
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentText.length) {
          setIsWaiting(true);
        }
      }
    }, isWaiting ? waitTime : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isWaiting, wordIndex]);

  const currentWord = words[wordIndex];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6   lg:px-8 py-20">
      {/* Badge */}
      <div className="animate-fade-in-down inline-flex items-center gap-2 glass-button px-6 py-3 mb-10">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <Zap className="w-3 h-3 text-white" />
        </div>
        <div className="ml-[10px]">
        <span className="text-sm  font-semibold">Live Cricket Broadcasting Platform</span>
         </div>
      </div>

      {/* Logo */}
      <div className="animate-[fadeIn_1s_ease-out_0.2s_both] mb-8">
        <div className="flex items-center gap-4 text-2xl sm:text-3xl font-black tracking-tight">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#ff6b35] via-[#f7931e] to-[#ffd700] flex items-center justify-center text-3xl sm:text-4xl shadow-[0_10px_40px_rgba(255,107,53,0.4)] animate-pulse-slow">
            🏏
          </div>
          <span className="bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
            Vadaka<span className="text-[#ff6b35]">CricBuzz</span>
          </span>
        </div>
      </div>

      {/* Headline */}
      <div className="animate-[fadeIn_1s_ease-out_0.4s_both] text-center mb-5">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
          Experience Cricket<br />the Modern Way with
        </h1>
      </div>

      {/* Typewriter */}
      <div className="animate-[fadeIn_1s_ease-out_0.6s_both] h-20 sm:h-32 flex items-center justify-center my-8">
        <div className={`relative text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight ${currentWord.className}`}>
          {currentWord.text.substring(0, charIndex)}
          <span className="absolute -right-3 sm:-right-4 top-0 animate-blink text-[#ff6b35]">|</span>
          <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-2 bg-gradient-to-r from-[#ffd700] to-[#ff6b35] rounded-full animate-expand-width" />
        </div>
      </div>

      {/* Subtitle */}
      <p className="animate-[fadeIn_1s_ease-out_0.8s_both] text-center text-base sm:text-lg text-white/70 max-w-xl mb-12 leading-relaxed px-4">
        <span className="inline-flex items-center gap-2 text-red-500 font-bold mr-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-live-pulse" />
          LIVE
        </span>
        Cohort 2025 is LIVE, Tournament starting from March 2025. 
        Every match streamed in HD with real-time scores and commentary.
      </p>

      {/* CTA */}
      <div className="animate-fade-in-up text-center">
        <p className="text-lg sm:text-2xl font-bold mb-8 text-white/90">
          Join the VadakaCricBuzz Experience
        </p>
        <button className="group relative inline-flex items-center gap-3 bg-gradient-to-br from-[#ff6b35] via-[#f7931e] to-[#ffd700] text-[#0a0a0a] text-lg sm:text-xl font-extrabold px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-[0_10px_40px_rgba(255,107,53,0.4)] hover:shadow-[0_20px_60px_rgba(255,107,53,0.6)] hover:-translate-y-1 active:-translate-y-0.5 transition-all duration-300 overflow-hidden">
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <span>Get Started Now</span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Features Grid */}
      <div className="animate-[fadeIn_1s_ease-out_1.2s_both] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mt-16 w-full max-w-5xl px-4">
        {features.map((f, i) => (
          <div 
            key={i}
            className="glass-panel p-5 sm:p-6 text-center hover:bg-white/10 hover:-translate-y-1 hover:border-[#ff6b35]/50 transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl mb-2">{f.icon}</div>
            <div className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wide">
              {f.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}