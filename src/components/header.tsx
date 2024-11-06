import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex bg-black text-white p-4 justify-between items-center max-w-screen-2xl mx-auto">
      <h1 className="font-bold text-2xl mx-5">Portfolio</h1>
      
      <nav className="flex items-center gap-8 mx-5 md:gap-10">
        <Link href="/" className="hover:text-gray-400 transition duration-200" aria-label="Home">Home</Link>
        <Link href="/about" className="hover:text-gray-400 transition duration-200" aria-label="About">About</Link>
        <Link href="/contact" className="hover:text-gray-400 transition duration-200" aria-label="Contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
