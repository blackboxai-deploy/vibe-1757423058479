"use client";

import { useState, useEffect } from "react";
import BirthdayMessage from "./BirthdayMessage";
import BirthdayCandles from "./BirthdayCandles";

export default function BirthdayGreeting() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 500);
    const timer2 = setTimeout(() => setShowMessage(true), 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
      {/* Main Title */}
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="font-dancing text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
          Selamat Ulang Tahun
        </h1>
        
        <div className="relative">
          <h2 className="font-dancing text-5xl md:text-7xl lg:text-8xl font-bold text-pink-600 mb-8 drop-shadow-lg">
            My Love ❤️
          </h2>
          
          {/* Sparkle effects */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-4 -right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-300"></div>
          <div className="absolute -bottom-2 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700"></div>
        </div>
      </div>

      {/* Birthday Cake */}
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} my-8`}>
        <BirthdayCandles />
      </div>

      {/* Birthday Messages */}
      {showMessage && (
        <div className="animate-fadeIn">
          <BirthdayMessage />
        </div>
      )}

      {/* Decorative elements */}
      <div className="mt-8 flex justify-center space-x-4">
        <div className="text-2xl animate-bounce delay-100">🎈</div>
        <div className="text-2xl animate-bounce delay-200">🎂</div>
        <div className="text-2xl animate-bounce delay-300">🎁</div>
        <div className="text-2xl animate-bounce delay-400">🌹</div>
      </div>
    </div>
  );
}