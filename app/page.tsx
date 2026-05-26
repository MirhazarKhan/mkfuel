'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [colorful, setColorful] = useState(false);
  const [colorHex, setColorHex] = useState('#ff8c00'); // Default Orange
  const [debouncedColor, setDebouncedColor] = useState('#ff8c00');
  const [debouncedColorful, setDebouncedColorful] = useState(false);

  // Debounce the color & mode changes so we don't spam the iframe reload
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedColor(colorHex);
      setDebouncedColorful(colorful);
    }, 300); // 300ms delay
    return () => clearTimeout(handler);
  }, [colorHex, colorful]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden select-none">
      {/* Title / Logo */}
      <div className="absolute z-10 top-6 left-8 pointer-events-none mix-blend-screen">
        <h1 className="text-3xl font-bold tracking-tighter text-white uppercase opacity-30">
          MK
        </h1>
      </div>

      {/* The main WebGL simulation iframe */}
      <iframe 
        src={`/fluid?colorful=${debouncedColorful}&color=${debouncedColor.replace('#', '')}`}
        className="absolute top-0 left-0 w-full h-full border-none pointer-events-auto mix-blend-screen"
        style={{ zIndex: 1 }}
      />

      {/* Settings UI */}
      <div className="absolute top-20 right-6 z-20 flex flex-col items-end gap-4 pointer-events-auto bg-black/60 p-5 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
        <label className="flex items-center gap-3 text-sm font-mono text-gray-300 hover:text-white transition-colors cursor-pointer">
          <span className="opacity-80">Colorful Mode</span>
          <input 
            type="checkbox" 
            checked={colorful}
            onChange={(e) => setColorful(e.target.checked)}
            className="w-5 h-5 rounded border-white/20 bg-black/50 text-orange-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
          />
        </label>
        
        <div className={`transition-all duration-300 ease-in-out ${colorful ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
          <label className="flex items-center gap-3 text-sm font-mono text-gray-300 hover:text-white transition-colors cursor-pointer">
            <span className="opacity-80">Splat Color</span>
            <div className="relative w-8 h-8 rounded overflow-hidden border border-white/20">
              <input 
                type="color" 
                value={colorHex}
                onChange={(e) => setColorHex(e.target.value)}
                className="absolute -inset-2 w-12 h-12 cursor-pointer bg-transparent"
              />
            </div>
          </label>
        </div>
      </div>


      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs text-gray-600 font-mono pointer-events-none z-10 w-full px-4">
        Powered by Next.js, WebGL, and fluid dynamics equations
      </div>
    </main>
  );
}
