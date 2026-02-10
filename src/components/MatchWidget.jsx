import { useState, useEffect, useCallback } from 'react';
import { X, ChevronRight } from 'lucide-react';

// Initial dummy data - replace with API call
const initialMatches = [
  {
    id: 1,
    format: 'T20',
    status: 'live',
    team1: { name: 'NED', flag: '🇳🇱', score: '95/2', overs: '(12.0)' },
    team2: { name: 'NAM', flag: '🇳🇦', score: '156/8', overs: '' },
    result: 'Netherlands need 62 runs in 48 balls at 7.75 rpo',
  },
  {
    id: 2,
    format: 'T20',
    status: 'upcoming',
    team1: { name: 'NZ', flag: '🇳🇿', score: '', overs: '' },
    team2: { name: 'UAE', flag: '🇦🇪', score: '', overs: '' },
    time: 'Match begins at 15:00 IST (09:30 GMT)',
  },
  {
    id: 3,
    format: 'T20',
    status: 'upcoming',
    team1: { name: 'PAK', flag: '🇵🇰', score: '', overs: '' },
    team2: { name: 'USA', flag: '🇺🇸', score: '', overs: '' },
    time: 'Match begins at 19:00 IST (13:30 GMT)',
  },
  {
    id: 4,
    format: 'T20',
    status: 'completed',
    team1: { name: 'SCO', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', score: '207/4', overs: '' },
    team2: { name: 'ITA', flag: '🇮🇹', score: '134', overs: '' },
    result: 'Scotland beat Italy by 73 runs',
  },
  {
    id: 5,
    format: 'T20',
    status: 'completed',
    team1: { name: 'SL', flag: '🇱🇰', score: '163/6', overs: '' },
    team2: { name: 'IRE', flag: '🇮🇪', score: '143', overs: '' },
    result: 'Sri Lanka beat Ireland by 20 runs',
  },
];

export default function MatchWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [matches, setMatches] = useState(initialMatches);
  const [loading, setLoading] = useState(false);

  // Fetch real data from backend
  const fetchMatches = useCallback(async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      // const response = await fetch('/api/matches');
      // const data = await response.json();
      // setMatches(data);
      
      // Simulating API call with current data
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch matches:', error);
      setLoading(false);
    }
  }, []);

  // Live score updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMatches(prevMatches => {
        const liveMatch = prevMatches.find(m => m.status === 'live');
        if (liveMatch && Math.random() > 0.7) {
          const runs = parseInt(liveMatch.team1.score.split('/')[0]) + Math.floor(Math.random() * 3);
          const wickets = liveMatch.team1.score.split('/')[1];
          return prevMatches.map(m => 
            m.id === liveMatch.id 
              ? { ...m, team1: { ...m.team1, score: `${runs}/${wickets}` } }
              : m
          );
        }
        return prevMatches;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const liveCount = matches.filter(m => m.status === 'live').length;

  const toggleWidget = () => {
    if (!isExpanded) {
      fetchMatches();
    }
    setIsExpanded(!isExpanded);
  };

  const openMatch = (id) => {
    // Navigate to match details
    window.location.href = `/matches/${id}`;
  };

  const goToMatches = () => {
    window.location.href = '/matches';
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'live':
        return 'bg-red-500/90 text-white animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)]';
      case 'upcoming':
        return 'bg-blue-800/90 text-white';
      case 'completed':
        return 'bg-emerald-600/90 text-white';
      default:
        return 'bg-white/10 text-white';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Collapsed State */}
      {!isExpanded && (
        <button
          onClick={toggleWidget}
          className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[rgba(26,26,46,0.6)] backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-center hover:scale-110 hover:-translate-y-1 hover:border-[#ff6b35]/50 transition-all duration-300"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#ff6b35] via-[#f7931e] to-[#ffd700] flex items-center justify-center text-xl sm:text-2xl shadow-[0_4px_15px_rgba(255,107,53,0.4)] relative">
            🏏
            {liveCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 text-white text-[10px] sm:text-xs font-extrabold flex items-center justify-center border-[3px] border-[rgba(26,26,46,0.8)] animate-badge-pulse shadow-[0_2px_8px_rgba(239,68,68,0.4)]">
                {liveCount}
              </span>
            )}
          </div>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 border border-white/10 pointer-events-none">
            View Matches
          </span>
        </button>
      )}

      {/* Expanded State */}
      {isExpanded && (
        <div className="absolute bottom-0 right-0 w-[calc(100vw-48px)] sm:w-[380px] max-w-[380px] max-h-[70vh] bg-[rgba(26,26,46,0.7)] backdrop-blur-3xl border border-white/15 rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.5)] flex flex-col animate-[expandWidget_0.3s_cubic-bezier(0.4,0,0.2,1)]">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10 bg-black/20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#f7931e] flex items-center justify-center text-xl shadow-[0_4px_15px_rgba(255,107,53,0.3)]">
                🏏
              </div>
              <div className="text-lg font-extrabold">Matches</div>
            </div>
            <button
              onClick={toggleWidget}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-red-500/20 hover:text-red-500 hover:rotate-90 transition-all duration-200 backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Matches List */}
          <div className="p-4 overflow-y-auto max-h-[400px] scrollbar-thin">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="w-8 h-8 border-2 border-white/20 border-t-[#ff6b35] rounded-full animate-spin" />
              </div>
            ) : (
              <div className="space-y-3">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    onClick={() => openMatch(match.id)}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 cursor-pointer hover:bg-white/10 hover:border-[#ff6b35]/30 hover:translate-x-1 transition-all duration-200 relative group"
                  >
                    {/* Hover line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff6b35]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
                        {match.format}
                      </span>
                      <span className={`px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${getStatusClass(match.status)}`}>
                        {match.status === 'live' ? '● LIVE' : match.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl">{match.team1.flag}</span>
                          <span className="text-sm font-bold">{match.team1.name}</span>
                        </div>
                        <span className="text-base font-extrabold">
                          {match.team1.score} {match.team1.overs}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl">{match.team2.flag}</span>
                          <span className="text-sm font-bold">{match.team2.name}</span>
                        </div>
                        <span className="text-base font-extrabold">
                          {match.team2.score} {match.team2.overs}
                        </span>
                      </div>
                    </div>

                    {(match.result || match.time) && (
                      <div className="mt-3 pt-3 border-t border-white/10 text-sm text-white/60 font-semibold leading-snug">
                        {match.result || match.time}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 pt-2 border-t border-white/10 bg-black/20">
            <button
              onClick={goToMatches}
              className="w-full flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-[#0f0f23] px-6 py-3.5 rounded-xl text-sm font-extrabold hover:-translate-y-0.5 transition-all duration-200 shadow-[0_8px_25px_rgba(255,255,255,0.2)]"
            >
              GO TO THE MATCHES PAGE
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}