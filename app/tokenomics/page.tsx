'use client';
import { useState } from 'react';

export default function TokenomicsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center px-6 py-12 relative">
      {/* ===== Menu Icon (Top Right) ===== */}
      <div
        className="absolute top-6 right-6 z-40 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="space-y-1">
          <span className="block h-1 w-6 bg-white" />
          <span className="block h-1 w-6 bg-white" />
          <span className="block h-1 w-6 bg-white" />
        </div>
      </div>

      {/* ===== Slide-out Menu ===== */}
      {menuOpen && (
        <div className="absolute top-0 right-0 w-64 h-full bg-black bg-opacity-90 text-white p-6 z-50 space-y-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-right w-full text-xl"
          >
            ✕
          </button>
          <a href="/" className="block">
            Home
          </a>
          <a href="/community" className="block">
            Community
          </a>
        </div>
      )}

      {/* ===== Page Content ===== */}
      <h1 className="text-4xl font-bold mb-6 font-[Rye] mt-4">WRAK Tokenomics</h1>
      <p className="text-center text-gray-400 max-w-xl mb-12">
        The chart below shows how WRAK was distributed — no fluff, no fake
        categories.
      </p>

      <div className="border-3 border-[#FFD700] rounded-md">
        <img
          src="/wrak-token-pie.png"
          alt="WRAK Tokenomics Chart"
          className="max-w-md w-full rounded-md"
        />
      </div>

      {/* ===== Blurbs ===== */}
<div className="mt-10 max-w-xl text-sm text-gray-300 space-y-4 text-left">
  <p>
    <strong>Torched on Sight (10%):</strong> 1B WRAK nuked forever on day one —
    no re-mints, no take-backs.
  </p>

  <p>
    <strong>Public Cheese (2%):</strong> 200M WRAK paired with 25 SOL on Raydium.
    LP tokens time-locked 6 mo. 100% of what you can trade day one.
  </p>

  <p>
    <strong>Vaulted Supply (88%):</strong> Parked in the creator vault for future LP adds,
    milestone burns, and whatever comes next. Wallet address posted → every move on-chain,
    announced first. No unlock schedule. No team vesting.
  </p>

  <p>🔒 Mint authority already renounced — supply is capped forever.</p>
</div>

    </div>
  );
}
