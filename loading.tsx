import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="relative flex flex-col items-center">
        {/* Animated Glow Spinner */}
        <div className="w-16 h-16 rounded-full border-2 border-slate-800 border-t-sky-400 border-r-indigo-500 animate-spin mb-4" />
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-black font-heading bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            SDX
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
        </div>
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-1">
          Loading Experience...
        </p>
      </div>
    </div>
  );
}
