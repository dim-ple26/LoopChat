// components/Navbar.js
import React from 'react';
// components/Navbar.js

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand (Justify Start) */}
        <div className="text-white font-bold text-xl">
          <Link href="/">LoopChat</Link>
        </div>

        {/* Navigation Links (Justify End) */}
        <div className="flex space-x-4 text-sm">
          <Link href="/" className="text-gray-300 hover:bg-gray-700 py-2 px-4 rounded">
            Home
          </Link>
          <Link href="/forums" className="text-gray-300 hover:bg-gray-700 py-2 px-4 rounded">
            Forums
          </Link>
          <Link href="/chat" className="text-gray-300 hover:bg-gray-700 py-2 px-4 rounded">
            UserChat
          </Link>
          <li className='flex justify-center items-center bg-indigo-600 rounded-3xl'>
            <UserButton></UserButton>
          </li>

        </div>
      </div>
    </nav>
  );
}