import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="relative w-full h-screen bg-[#001540] overflow-hidden">
      
      {/* 1. Background Image */}
      <img 
        src="/images/error.png" 
        alt="404 Error" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. Layout Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        {/* Left half - Empty (where the player is) */}
        <div className="hidden md:block"></div>

        {/* Right half - Content Area (where the text is) */}
        <div className="flex flex-col items-center justify-center pt-[20%] pr-0 md:pr-[10%]">
          
          {/* This spacer pushes the button down to align below the "Unfortunately..." text */}
          <div className="h-40  sm:h-64"></div>

          {/* Home Button */}
          <Link 
            to="/" 
            className="flex ml-[100px] items-center justify-center gap-3 px-10 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/40 backdrop-blur-md rounded-full font-bold text-xl transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            <Home size={24} className="text-white" />
            <span className="tracking-wide">Home</span>
          </Link>
        </div>
      </div>
      
    </div>
  );
}