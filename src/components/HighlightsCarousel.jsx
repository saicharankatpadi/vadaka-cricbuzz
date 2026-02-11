// components/HighlightsCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HighlightsCarousel = () => {
  const [highlights, setHighlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  // TODO: Backend API Integration
  useEffect(() => {
    const fetchHighlights = async () => {
      // Backend endpoint: GET /api/highlights?limit=10&tournament={id}
      
      const fakeData = [
        {
          id: '1',
          title: 'CS vs IT: Match Highlights',
          subtitle: 'Thrilling finish as CS chases down 180',
          imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&h=300&fit=crop',
          videoUrl: '/videos/cs-vs-it-highlights',
          type: 'video',
          duration: '5:24'
        },
        {
          id: '2',
          title: 'Rahul Sharma 68* (42)',
          subtitle: 'Player of the Match performance',
          imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=300&fit=crop',
          videoUrl: '/videos/rahul-sharma-innings',
          type: 'video',
          duration: '3:15'
        },
        {
          id: '3',
          title: 'ECE vs MECH: Full Match',
          subtitle: 'Last over thriller',
          imageUrl: 'https://images.unsplash.com/photo-1624523278528-3753c1d5c8b0?w=300&h=300&fit=crop',
          videoUrl: '/videos/ece-vs-mech-full',
          type: 'video',
          duration: '12:30'
        },
        {
          id: '4',
          title: 'Best Catches of the Week',
          subtitle: 'Top 5 catches',
          imageUrl: 'https://images.unsplash.com/photo-1562077772-3e29c11f7e19?w=300&h=300&fit=crop',
          videoUrl: '/videos/best-catches-week-1',
          type: 'video',
          duration: '4:45'
        },
        {
          id: '5',
          title: 'Points Table Update',
          subtitle: 'CS climbs to top',
          imageUrl: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=300&h=300&fit=crop',
          articleUrl: '/news/points-table-week-2',
          type: 'article',
          readTime: '2 min'
        },
        {
          id: '6',
          title: 'Injury forces change',
          subtitle: 'Captain ruled out',
          imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=300&fit=crop',
          articleUrl: '/news/ece-captain-injury',
          type: 'article',
          readTime: '3 min'
        }
      ];

      setTimeout(() => {
        setHighlights(fakeData);
        setIsLoading(false);
      }, 500);
    };

    fetchHighlights();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // smaller scroll for smaller cards
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (item) => {
    if (item.type === 'video') {
      console.log('Play video:', item.videoUrl);
    } else {
      console.log('Open article:', item.articleUrl);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-[#0a0e2e] pt-4 mt-4 opacity-80 py-4 border-b border-white/10">
        <div className="flex gap-3 px-4 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0e2e] py-4 border-b border-white/10 relative group">
      {/* Navigation Arrows - smaller */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={16} />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={16} />
      </button>

      {/* Carousel Container - smaller cards */}
      <div 
        ref={scrollRef}
        className="flex gap-4 px-4 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {highlights.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="flex-shrink-0 w-36 cursor-pointer group/card"
          >
            {/* Circular Image - smaller size */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-blue-500/50 hover:border-blue-400 transition-colors">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
              />
              
              {/* Play Icon - smaller */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/card:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-white border-b-6 border-b-transparent ml-0.5" />
                  </div>
                </div>
              )}

              {/* Duration/Read Time Badge - smaller */}
              {item.duration && (
                <div className="absolute bottom-2 right-2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] text-white font-medium">
                  {item.duration}
                </div>
              )}
              {item.readTime && (
                <div className="absolute bottom-2 right-2 bg-blue-500/80 px-1.5 py-0.5 rounded text-[10px] text-white font-medium">
                  {item.readTime}
                </div>
              )}
            </div>

            {/* Text Content - smaller text */}
            <div className="mt-2 text-center px-1">
              <h3 className="text-white font-semibold text-xs line-clamp-1 group-hover/card:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-[10px] mt-0.5 line-clamp-1">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0e2e] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0e2e] to-transparent pointer-events-none" />
    </div>
  );
};

export default HighlightsCarousel;