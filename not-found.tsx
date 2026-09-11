import React from 'react';
import Link from 'next/link';
import { Compass, Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center mx-auto mb-5 border border-sky-500/20">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>
        <span className="text-4xl font-black font-heading bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          404
        </span>
        <h2 className="text-xl font-bold text-white mt-1 mb-2 font-heading">
          Page Not Found
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          The page you are looking for might have been moved, deleted, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
