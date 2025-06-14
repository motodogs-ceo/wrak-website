import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/* ───────── site-wide <title> & <meta> ───────── */
export const metadata: Metadata = {
  title: 'WRAKcoin | $WRAK',                 // tab text
  description: 'WRAKcoin • no roadmap, no whitelist, no mercy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white flex flex-col min-h-screen`}
      >
        {/* main page content */}
        <div className="flex-grow">{children}</div>

        {/* global footer */}
        <footer className="w-full border-t border-yellow-500 bg-black py-2 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} WRAKcoin. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
