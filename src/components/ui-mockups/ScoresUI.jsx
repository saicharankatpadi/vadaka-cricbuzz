export default function ScoresUI() {
  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d1b69] p-5 sm:p-6 min-h-[350px] lg:min-h-[400px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="text-sm text-pink-400 font-bold">ICC World Cup 2023</div>
        <div className="flex gap-2">
          {['IND 1st Inn', 'AUS 2nd Inn'].map((inn, i) => (
            <div 
              key={inn}
              className={`text-xs px-4 py-2 rounded-lg ${i === 0 ? 'bg-pink-400/20 text-pink-400' : 'bg-white/5 text-white/60'}`}
            >
              {inn}
            </div>
          ))}
        </div>
      </div>

      {/* Scoreboard */}
      <div className="bg-black/30 rounded-2xl p-6 mb-5">
        <div className="flex items-center justify-between py-4 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">🇮🇳</div>
            <div>
              <div className="text-xl font-extrabold">India</div>
              <div className="text-xs text-white/50">42.0 Overs</div>
            </div>
          </div>
          <div className="text-3xl font-black text-pink-400">287/4</div>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">🇦🇺</div>
            <div>
              <div className="text-xl font-extrabold">Australia</div>
              <div className="text-xs text-white/50">Yet to bat</div>
            </div>
          </div>
          <div className="text-3xl font-black text-white/30">-</div>
        </div>
      </div>

      {/* Batsmen */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 rounded-xl p-4">
          <div className="text-sm font-semibold mb-1">Rohit Sharma *</div>
          <div className="text-2xl font-extrabold text-pink-400">124 (98)</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="text-sm font-semibold mb-1">Virat Kohli</div>
          <div className="text-2xl font-extrabold text-pink-400">87 (76)</div>
        </div>
      </div>
    </div>
  );
}