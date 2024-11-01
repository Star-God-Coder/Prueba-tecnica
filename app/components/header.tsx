// Header.jsx
'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center'>
          <h2 className="text-2xl font-bold pr-6">mabi</h2>

          {/* Menú de Navegación para Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`${pathname === '/' ? 'pb-1 border-b-2 border-white' : ''} `}>
              Home
            </Link>
            <Link href="/Posts" className={`${pathname === '/Posts' ? 'pb-1 border-b-2 border-white' : ''} `}>
              Posts
            </Link>
            <Link href="#" className="hover:underline">Solutions</Link>
            <Link href="#" className="hover:underline">Pricing</Link>
            <div className="relative group">
              <Link href="#" className="hover:underline">Resources</Link>
              <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg p-4">
                <Link href="#" className="block py-2 px-4 hover:bg-gray-200">Submenu</Link>
                <Link href="#" className="block py-2 px-4 hover:bg-gray-200">Submenu</Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Botones para Desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="py-2 px-6 border-2 border-white text-white rounded-full">Log In</button>
          <button className="py-2 px-6 bg-white text-black rounded-full">Free Launch</button>
        </div>

        {/* Icono de Menú para Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Menú desplegable para Mobile */}
      {isOpen && (
        <div className="md:hidden header text-white p-4 space-y-4">
          <Link href="/" className={`${pathname === '/' ? 'pb-1 border-b-2 border-white' : ''} block hover:underline`}>
            Home
          </Link>
          <Link href="/posts" className={`${pathname === '/posts' ? 'pb-1 border-b-2 border-white' : ''} block hover:underline`}>
            Posts
          </Link>
          <Link href="#" className="block hover:underline">Solutions</Link>
          <Link href="#" className="block hover:underline">Pricing</Link>
          <Link href="#" className="block hover:underline">Resources</Link>
          <div className="flex space-x-4 pt-4">
            <button className="py-2 px-6 border-2 border-white text-white rounded-full">Log In</button>
            <button className="py-2 px-6 bg-white text-black rounded-full">Free Launch</button>
          </div>
        </div>
      )}
    </header>
  );
}
