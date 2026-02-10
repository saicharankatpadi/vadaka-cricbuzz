export default function DashboardUI() {
  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-5 sm:p-6 min-h-[350px] lg:min-h-[400px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div className="text-lg font-extrabold text-green-400">🏏 VadakaCricBuzz</div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {['Dashboard', 'Matches', 'Series', 'News'].map((item, i) => (
            <div 
              key={item}
              className={`text-xs px-3 py-2 rounded-lg whitespace-nowrap ${i === 0 ? 'bg-green-400/20 text-green-400' : 'bg-white/5 text-white/60'}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Live Match Card */}
        <div className="sm:col-span-2 bg-gradient-to-br from-green-400/10 to-green-400/5 border border-green-400/30 rounded-2xl p-5">
          <div className="text-xs text-white/50 uppercase tracking-wider mb-4">
            <span className="inline-flex items-center gap-1.5 text-red-500 font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              LIVE NOW
            </span>
          </div>
          
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">🇮🇳</div>
              <div>
                <div className="font-bold">India</div>
                <div className="text-xs text-white/50">287/4 (42.0)</div>
              </div>
            </div>
            <div className="text-sm font-extrabold text-green-400 px-4 py-2 bg-green-400/20 rounded-full">VS</div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">🇦🇺</div>
              <div>
                <div className="font-bold">Australia</div>
                <div className="text-xs text-white/50">Yet to bat</div>
              </div>
            </div>
          </div>
          
          <div className="text-3xl font-black text-center">IND 287/4</div>
        </div>

        {/* Up Next */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <div className="text-xs text-white/50 uppercase tracking-wider mb-4">Up Next</div>
          <div className="text-center py-4">
            <div className="text-3xl mb-2">🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs 🇳🇿</div>
            <div className="text-xs text-white/50">Today, 7:00 PM IST</div>
          </div>
        </div>

        {/* My Teams */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:col-span-2 lg:col-span-1">
          <div className="text-xs text-white/50 uppercase tracking-wider mb-4">My Teams</div>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2.5 text-sm">
              <span>🇮🇳</span> India
              <span className="ml-auto text-green-400 text-xs">● Live</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England
              <span className="ml-auto text-amber-400 text-xs">⏳ 2h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}