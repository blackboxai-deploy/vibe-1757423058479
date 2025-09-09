"use client";

import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
  color: string;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const colors = ['text-pink-400', 'text-red-400', 'text-purple-400', 'text-rose-400'];
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 1.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute ${heart.color} opacity-60`}
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`,
            animationDelay: `${heart.delay}s`,
            animation: 'floatUp 8s infinite linear'
          }}
        >
          ❤️
        </div>
      ))}
      
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}