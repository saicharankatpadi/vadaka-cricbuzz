export default function StreamingUI() {
  return (
    <div className="bg-black min-h-[350px] lg:min-h-[400px] relative">
      {/* Video Player */}
      <div className="h-[250px] sm:h-[300px] bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] flex items-center justify-center relative">
        <div className="absolute top-4 right-4 bg-amber-400/90 text-black px-3 py-1.5 rounded-md text-xs font-extrabold">
          HD 1080p
        </div>
        <div className="w-20 h-20 rounded-full bg-amber-400/90 flex items-center justify-center text-3xl cursor-pointer hover:scale-110 transition-transform">
          ▶
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-[88px] left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
        <div className="h-1 bg-white/20 rounded-full mb-4 relative">
          <div className="absolute left-0 top-0 h-full w-[65%] bg-amber-400 rounded-full" />
        </div>
        <div className="flex items-center gap-5">
          <button className="text-white text-xl">⏸</button>
          <button className="text-white text-sm">⏭ 10s</button>
          <span className="text-white/80 text-xs ml-auto">42:15 / 50:00</span>
          <button className="text-white text-xl">⚙</button>
          <button className="text-white text-xl">⛶</button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 bg-[#1a1a2e]">
        <div className="text-lg font-bold mb-2">India vs Australia - 2nd ODI</div>
        <div className="flex gap-5 text-sm text-white/60">
          <span>🏏 Live</span>
          <span>👁 2.4M watching</span>
          <span>📡 ICC World Cup 2023</span>
        </div>
      </div>
    </div>
  );
}