"use client";

import BirthdayGreeting from "@/components/BirthdayGreeting";
import FloatingHearts from "@/components/FloatingHearts";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient with animated colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 animate-pulse"></div>
      
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <BirthdayGreeting />
      </div>
      
      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-300/30 to-transparent"></div>
    </main>
  );
}