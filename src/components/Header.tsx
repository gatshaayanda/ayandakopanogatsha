'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0f172a]/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-extrabold text-white tracking-wide">
          AyandaKG.dev
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white" aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col space-y-4 items-start md:flex md:flex-row md:space-y-0 md:space-x-6 md:items-center`}
        >
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/portfolio' },
            { label: 'Experience', href: '/about#experience' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white hover:text-[#62A3E3] transition font-medium"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/client/login"
            className="bg-[#e1deff] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#62A3E3] transition"
          >
            Client Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
