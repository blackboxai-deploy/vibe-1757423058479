"use client";

import { useState } from "react";

export default function BirthdayCandles() {
  const [candlesLit, setCandlesLit] = useState([true, true, true, true, true]);
  const [isBlowing, setIsBlowing] = useState(false);
  const [hasBlown, setHasBlown] = useState(false);

  const blowCandles = () => {
    if (isBlowing) return;
    
    setIsBlowing(true);
    setHasBlown(true);
    
    // Blow out candles one by one
    candlesLit.forEach((_, index) => {
      setTimeout(() => {
        setCandlesLit(prev => prev.map((lit, i) => i === index ? false : lit));
      }, index * 200);
    });

    // Relight candles after 3 seconds
    setTimeout(() => {
      setCandlesLit([true, true, true, true, true]);
      setIsBlowing(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Candles */}
      <div className="flex justify-center space-x-4 mb-4">
        {candlesLit.map((isLit, index) => (
          <div key={index} className="relative">
            {/* Flame */}
            {isLit && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-3 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full animate-pulse"></div>
              </div>
            )}
            {/* Smoke when blown out */}
            {!isLit && hasBlown && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-60">
                <div className="text-gray-400 text-xs animate-bounce">💨</div>
              </div>
            )}
            {/* Candle */}
            <div className="w-2 h-8 bg-gradient-to-b from-pink-300 to-pink-400 rounded-sm shadow-sm"></div>
          </div>
        ))}
      </div>

      {/* Birthday Cake */}
      <div className="relative">
        {/* Cake base */}
        <div className="w-48 h-32 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-2xl shadow-lg">
          {/* Frosting */}
          <div className="w-full h-6 bg-gradient-to-r from-pink-300 to-purple-300 rounded-t-2xl"></div>
          
          {/* Decorations */}
          <div className="flex justify-around items-center py-4">
            <div className="text-2xl">🌹</div>
            <div className="text-2xl">❤️</div>
            <div className="text-2xl">🌹</div>
          </div>
          
          {/* Bottom decoration */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-pink-600 font-dancing text-lg font-bold">
            My Love
          </div>
        </div>

        {/* Plate */}
        <div className="w-56 h-4 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-md -mt-2 mx-auto"></div>
      </div>

      {/* Instruction */}
      <div className="mt-6 text-center">
        <button
          onClick={blowCandles}
          disabled={isBlowing}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform ${
            isBlowing 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-pink-500 hover:to-purple-500 hover:scale-105 shadow-lg hover:shadow-xl'
          }`}
        >
          {isBlowing ? '💨 Blowing...' : '💨 Tiup Lilinnya!'}
        </button>
        
        <p className="text-sm text-gray-600 mt-2 font-medium">
          Klik untuk meniup lilin dan buat permintaan! ✨
        </p>
      </div>
    </div>
  );
}