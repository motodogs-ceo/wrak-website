'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../global.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteLocked, setSiteLocked] = useState(true);

  const unlockSite = () => {
    const pass = prompt('Password?');
    if (pass === 'jackdwak') setSiteLocked(false);
    else alert('Nah.');
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'W') setSiteLocked(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const messages = [
    '$WRAK walks alone',
    'No roadmap. No whitelist. No mercy',
    '200M in circulation',
    '1B burned',
    '25 SOL paired',
    'LP locked',
    'Mint authority renounced',
    'Live on Raydium',
    "If you’re here now, you’re early...",
  ];

  /* ───────────────── LOCKED OVERLAY ───────────────── */
  if (siteLocked) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black px-6 text-center text-yellow-400">
        <div className="max-w-md">
          <h1 className="mb-6 text-3xl font-bold uppercase font-[Rye]">Site Locked</h1>
          <p className="mb-8 text-lg font-semibold leading-relaxed">
            WRAK is the roughest, toughest, no-mercy meme coin on the planet.
            <br />
            The infestation has begun — but this site isn’t ready for it yet.
            <br />
            <br />
            You can start the countdown — but you can’t enter.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={unlockSite}
              className="rounded-full bg-yellow-400 px-5 py-2 font-bold text-black hover:bg-yellow-300"
            >
              DEV
            </button>
            <a
              href="https://raydium.io/swap?inputCurrency=sol&outputCurrency=9pD4JkGvEtcHwLsyoZ2uG8Dpq2zoZnZQRCvA5bCNzVeJ"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-yellow-400 px-5 py-2 font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              SOON
            </a>
          </div>
        </div>
      </div>
    );
  }

  /* ───────────────── MAIN PAGE ───────────────── */
  return (
    <div className="fixed inset-0 flex flex-col bg-black text-white overflow-hidden">
      {/* ===== HEADER ===== */}
      <div className="relative z-30 w-full flex-shrink-0 flex items-center justify-center border-b border-yellow-500 bg-black py-4 px-4">
        {/* Social Buttons (hide on mobile) */}
        <div className="absolute left-4 top-4 hidden sm:flex gap-2">
          <a
            href="https://x.com/WRAKcoin"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-3 py-1 text-sm font-bold text-black hover:bg-gray-300"
          >
            X
          </a>
          <a
            href="https://t.me/+s5LuRPCJPWsyMzdh"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-3 py-1 text-sm font-bold hover:bg-white hover:text-black"
          >
            Telegram
          </a>
        </div>

        {/* Tagline + Contract */}
        <div className="flex flex-col items-center justify-center text-center flex-grow">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#ffe175] font-[Rye]">
            Get $WRAK — or get WRAKed.
          </h1>
          <p className="mt-1 text-xs md:text-sm text-[#ffe175]">
            <a
              href="https://solscan.io/token/9pD4JkGvEtcHwLsyoZ2uG8Dpq2zoZnZQRCvA5bCNzVeJ"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all hover:underline"
            >
              9pD4JkGvEtcHwLsyoZ2uG8Dpq2zoZnZQRCvA5bCNzVeJ
            </a>
          </p>
        </div>

        {/* Menu Icon */}
        <div className="absolute right-4 top-4 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1">
            <span className="block h-1 w-6 bg-white" />
            <span className="block h-1 w-6 bg-white" />
            <span className="block h-1 w-6 bg-white" />
          </div>
        </div>
      </div>

      {/* ===== SLIDE-OUT MENU ===== */}
      {menuOpen && (
        <div className="absolute top-0 right-0 z-50 h-full w-64 space-y-4 bg-black bg-opacity-90 p-6 text-white">
          <button onClick={() => setMenuOpen(false)} className="w-full text-right text-xl">
            ✕
          </button>

          <a href="/" className="block">
            Home
          </a>
          <a href="/tokenomics" className="block">
            Tokenomics
          </a>
          <a
            href="https://raydium.io/swap?inputCurrency=sol&outputCurrency=9pD4JkGvEtcHwLsyoZ2uG8Dpq2zoZnZQRCvA5bCNzVeJ"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            Raydium
          </a>

          {/* Mobile-only socials */}
          <div className="flex gap-4 pt-2 border-t border-yellow-500 sm:hidden">
            <a
              href="https://x.com/WRAKcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-3 py-1 text-sm font-bold text-black hover:bg-gray-300"
            >
              X
            </a>
            <a
              href="https://t.me/+s5LuRPCJPWsyMzdh"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-3 py-1 text-sm font-bold hover:bg-white hover:text-black"
            >
              Telegram
            </a>
          </div>
        </div>
      )}

      {/* ===== TICKER ===== */}
      <div className="w-full flex-shrink-0 border-b border-yellow-500 bg-black py-2">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-ticker-x-center items-center gap-10 px-4 text-2xl font-[Rye]">
            {messages.map((msg, i) => (
              <span key={i} className="flex items-center gap-6 text-[#ffe175]">
                <span>{msg}</span>
                {i !== messages.length - 1 && (
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

      {/* ===== HERO ===== */}
      <div className="relative z-10 flex flex-grow items-center justify-center">
        <Image
          src="/wrak-placeholder.jpg"
          alt="WRAK background"
          fill
          className="object-cover opacity-60 -z-10"
        />
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="w-full flex-shrink-0 border-t border-yellow-500 py-2 text-center text-sm text-[#ffe175]">
        © 2025 WRAKcoin. All rights reserved.
      </footer>
    </div>
  );
}
