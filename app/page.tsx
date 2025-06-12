'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import '../global.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteLocked, setSiteLocked] = useState(true);

  const unlockSite = () => {
    const pass = prompt("Password?");
    if (pass === "jackdwak") {
      setSiteLocked(false);
    } else {
      alert("Nah.");
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {

      if (e.ctrlKey && e.shiftKey && e.key === "W") {
        setSiteLocked(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const messages = [
    "WRAK walks alone",
    "No roadmap. No whitelist. No mercy",
    "200M WRAK in circulation",
    "1B WRAK burned",
    "25 SOL paired",
    "LP locked",
    "Mint authority renounced",
    "Live on Raydium",
    "If you’re here now, you’re early.",
  ];

  if (siteLocked) {
    return (
      <div className="fixed inset-0 bg-black text-yellow-400 z-50 flex items-center justify-center text-center px-6">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold mb-6 uppercase font-[Rye]">
            Site Locked
          </h1>
          <p className="text-lg leading-relaxed font-semibold mb-8">
            WRAK is the roughest, toughest, no-mercy meme coin on the planet.
            <br />
            The infestation has begun — but this site isn’t ready for it yet.
            <br /><br />
            You can start the countdown — but you can’t enter.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={unlockSite}
              className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-300"
            >
              DEV
            </button>
            <a
              href="https://raydium.io/swap?inputCurrency=sol&outputCurrency=9pD4JkGvEtcHwLsyoZ2uG8Dpq2zoZnZQRCvA5bCNzVeJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full font-bold hover:bg-yellow-400 hover:text-black"
            >
              SOON
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* ===== HEADER (top 20%) ===== */}
      <div className="relative z-30 w-full flex items-center justify-center bg-black border-b border-yellow-500 py-4 px-4">
        {/* Social Buttons (Top Left) */}
        <div className="absolute left-4 top-4 flex gap-2">
          <a
            href="https://x.com/WRAKcoin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-3 py-1 text-sm rounded-full font-bold hover:bg-gray-300"
          >
            X
          </a>
          <a
            href="https://t.me/+s5LuRPCJPWsyMzdh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-white px-3 py-1 text-sm rounded-full font-bold hover:bg-white hover:text-black"
          >
            Telegram
          </a>
        </div>

        {/* Tagline + Contract */}
        <div className="flex flex-col items-center justify-center text-center flex-grow">
          <h1 className="text-2xl md:text-4xl font-bold text-[#ffe175] font-[Rye]">
            Get $WRAK — or get WRAKed.
          </h1>
          <p className="text-xs md:text-sm text-[#ffe175] mt-1">
            <a
              href="https://solscan.io/token/9pD4JkGvEtcHwLsyoZ2uG8Dpq2zoZnZQRCvA5bCNzVeJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              9pD4JkGvEtcHwLsyoZ2uG8Dpq2zoZnZQRCvA5bCNzVeJ
            </a>
          </p>
        </div>

        {/* Menu Icon (Top Right) */}
        <div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
          </div>
        </div>
      </div>

      {/* ===== SLIDE-OUT MENU ===== */}
      {menuOpen && (
        <div className="absolute top-0 right-0 w-64 h-full bg-black bg-opacity-90 text-white p-6 z-50 space-y-4">
          <button onClick={() => setMenuOpen(false)} className="text-right w-full text-xl">
            ✕
          </button>
          <a href="/" className="block">Home</a>
          <a href="/tokenomics" className="block">Tokenomics</a>
          <a href="/community" className="block">Community</a>
          <a
            href="https://raydium.io/swap?inputCurrency=sol&outputCurrency=9pD4JkGvEtcHwLsyoZ2uG8Dpq2zoZnZQRCvA5bCNzVeJ"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            Raydium
          </a>
        </div>
      )}

      {/* ===== TICKER (fixed height) ===== */}
      <div className="w-full border-b border-yellow-500 py-2 bg-black">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex items-center gap-10 animate-ticker-x-center px-4 text-2xl font-[Rye]">
            {messages.map((msg, index) => (
              <span key={index} className="text-[#ffe175] flex items-center gap-6">
                <span>{msg}</span>
                {index !== messages.length - 1 && (
                  <>
                    <Image
                      src="/diamond.png"
                      alt="◆"
                      width={35}
                      height={35}
                      className="inline-block"
                      priority
                    />
                    <span className="inline-block" />
                  </>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== HERO (fills remaining space) ===== */}
      <div className="relative flex-1 z-10 flex items-center justify-center">
        <img
          src="/wrak-placeholder.jpg"
          alt="WRAK background"
          className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
        />
      </div>
    </div>
  );
}
