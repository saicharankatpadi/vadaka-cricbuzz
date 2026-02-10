import { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {
              // Autoplay blocked
            });
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/50 to-transparent">
      <div className="max-w-5xl mx-auto text-center">
        <div 
          ref={wrapperRef}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.6)] border border-white/10"
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="w-full h-auto bg-black"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%230a0a0a' width='1920' height='1080'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23ff6b35' font-family='Inter' font-size='48' font-weight='bold'%3E🏏 VadakaCricBuzz Roadmap%3C/text%3E%3C/svg%3E"
          >
            <source src="/videos/roadmap.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          {/* Play indicator when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#ff6b35] flex items-center justify-center text-2xl">
                  ▶
                </div>
              </div>
            </div>
          )}
        </div>
        
        <p className="mt-6 text-base sm:text-lg text-white/80 font-semibold px-4">
          Your journey to cricket mastery starts here —{' '}
          <span className="text-[#ff6b35]">from START to VICTORY</span>
        </p>
      </div>
    </section>
  );
}