export default function PredictorUI() {
  return (
    <div className="bg-gradient-to-br from-[#0c4a6e] to-[#082f49] p-5 sm:p-6 min-h-[350px] lg:min-h-[400px]">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-sm text-sky-400 font-bold">Win Probability</div>
      </div>

      {/* Probability Circles */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 mb-6">
        <div className="text-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[conic-gradient(#38bdf8_0deg_216deg,rgba(255,255,255,0.1)_216deg)] flex items-center justify-center mb-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0c4a6e] flex items-center justify-center text-2xl sm:text-3xl font-black">
              60%
            </div>
          </div>
          <div className="font-bold">India</div>
          <div className="text-sm text-sky-400">Favorites</div>
        </div>
        
        <div className="text-xl sm:text-2xl font-extrabold text-white/30">VS</div>
        
        <div className="text-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[conic-gradient(#f97316_0deg_144deg,rgba(255,255,255,0.1)_144deg)] flex items-center justify-center mb-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0c4a6e] flex items-center justify-center text-2xl sm:text-3xl font-black">
              40%
            </div>
          </div>
          <div className="font-bold">Australia</div>
          <div className="text-sm text-orange-500">Underdogs</div>
        </div>
      </div>

      {/* Situation */}
      <div className="bg-white/5 rounded-2xl p-5 mb-5">
        <div className="text-sm text-white/60 mb-3">Current Situation</div>
        <div className="text-base sm:text-lg font-bold leading-relaxed">
          India needs <span className="text-sky-400">62 runs in 48 balls</span> with 6 wickets in hand. Required run rate: 7.75
        </div>
      </div>

      {/* Factors */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: '🏏', label: 'Pitch', value: 'Batting' },
          { icon: '☁️', label: 'Weather', value: 'Clear' },
          { icon: '📊', label: 'H2H', value: 'IND 58%' },
        ].map((factor) => (
          <div key={factor.label} className="bg-sky-400/10 border border-sky-400/30 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">{factor.icon}</div>
            <div className="text-xs text-white/60">{factor.label}</div>
            <div className="text-sm font-bold text-sky-400 mt-1">{factor.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}