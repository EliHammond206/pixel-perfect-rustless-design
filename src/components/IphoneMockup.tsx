
import React from "react";

const IphoneMockup: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex justify-center items-center ${className}`}>
    <div className="relative w-[180px] h-[360px] md:w-[220px] md:h-[440px] rounded-[38px] bg-black shadow-lg border-4 border-white overflow-hidden">
      {/* Screen */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-200 via-gray-100 to-neutral-50 flex flex-col items-center justify-end pb-12">
        {/* Minimal placeholder 'screenshot' */}
        <div className="w-4/5 h-4/5 bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200 rounded-2xl shadow-md flex items-center justify-center">
          <span className="text-black text-center font-bold text-lg md:text-xl px-3">
            Rustless Report Screen
            <br />
            (Visual Placeholder)
          </span>
        </div>
      </div>
      {/* Camera & Speaker */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10">
        <div className="w-16 h-2 rounded-full bg-neutral-400 opacity-60" />
        <div className="w-4 h-4 rounded-full bg-neutral-500 opacity-70 mt-1" />
      </div>
      {/* Home Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-neutral-600 opacity-40" />
    </div>
  </div>
);

export default IphoneMockup;
