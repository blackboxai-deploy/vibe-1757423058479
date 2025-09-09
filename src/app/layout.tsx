import type { Metadata } from "next";
import { Inter, Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing"
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Selamat Ulang Tahun My Love ❤️",
  description: "A beautiful birthday greeting for someone special",
  keywords: "birthday, love, greeting, romantic, celebration",
  authors: [{ name: "Love" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff6b9d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${dancingScript.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>❤️</text></svg>" />
      </head>
      <body className={`${poppins.className} antialiased bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 min-h-screen overflow-x-hidden`}>
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}