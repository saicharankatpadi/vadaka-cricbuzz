export default function StatsUI() {
  const stats = [
    { value: '13,848', label: 'ODI Runs' },
    { value: '50', label: 'Centuries' },
    { value: '58.67', label: 'Average' },
    { value: '93.5', label: 'Strike Rate' },
  ];

  const chartData = [45, 82, 32, 102, 67, 124];

  return (
    <div className="bg-gradient-to-br from-[#0f0f23] to-[#1a1a3e] p-5 sm:p-6 min-h-[350px] lg:min-h-[400px]">
      {/* Profile */}
      <div className="text-center mb-6">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center text-5xl sm:text-6xl mx-auto mb-4 border-4 border-purple-400/30">
          🏏
        </div>
        <div className="text-2xl font-extrabold">Virat Kohli</div>
        <div className="text-sm text-purple-400 font-semibold">Batsman • India</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 rounded-2xl p-4 text-center border border-purple-400/20">
            <div className="text-xl sm:text-2xl font-black text-purple-400 mb-1">{stat.value}</div>
            <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-6 bg-white/5 rounded-2xl p-4 h-28 flex items-end justify-around gap-2">
        {chartData.map((val, i) => (
          <div
            key={i}
            className="w-8 sm:w-10 bg-gradient-to-t from-purple-400 to-purple-400/30 rounded-t-lg relative"
            style={{ height: `${(val / 124) * 100}%` }}
          >
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-white/70">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}