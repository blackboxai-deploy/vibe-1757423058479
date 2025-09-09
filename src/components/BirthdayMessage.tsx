"use client";

import { useState, useEffect } from "react";

export default function BirthdayMessage() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    "Hari ini adalah hari yang sangat istimewa...",
    "Karena hari ini adalah hari kelahiran orang yang paling aku cintai ❤️",
    "Semoga semua impianmu terwujud, my love",
    "Semoga kebahagiaan selalu menyertaimu setiap hari",
    "Terima kasih telah hadir dalam hidupku",
    "Happy Birthday to the most beautiful person in my world! 🌹"
  ];

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    
    if (isTyping) {
      if (displayText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentMessage.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        if (currentMessageIndex < messages.length - 1) {
          setCurrentMessageIndex(prev => prev + 1);
          setDisplayText("");
          setIsTyping(true);
        } else {
          // Reset to first message
          setCurrentMessageIndex(0);
          setDisplayText("");
          setIsTyping(true);
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, currentMessageIndex, messages]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-pink-200">
        <div className="min-h-[80px] flex items-center justify-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-medium">
            {displayText}
            <span className={`inline-block w-0.5 h-6 ml-1 bg-pink-500 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
          </p>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentMessageIndex ? 'bg-pink-500' : 'bg-pink-200'
              }`}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Love declaration */}
      <div className="mt-6 text-center">
        <p className="font-dancing text-2xl md:text-3xl text-pink-600 font-bold">
          With all my love, always and forever 💕
        </p>
      </div>
    </div>
  );
}