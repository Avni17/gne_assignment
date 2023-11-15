'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import AccountCreation from './register/page';
import UserDetails from './user-details/page';

export default function Home() {
  const [activeTab, setActiveTab] = useState('userDetails');

  return (
    <div className="min-h-screen">
      <header className="py-4">
        <nav className="flex justify-center">
          <button
            onClick={() => setActiveTab('userDetails')}
            className={`px-6 py-2 focus:outline-none ${
              activeTab === 'userDetails'
                ? 'bg-blue-500 text-white'
                : 'text-blue-500 hover:bg-blue-200'
            }`}
          >
            User Details
          </button>
          <button
            onClick={() => setActiveTab('accountCreation')}
            className={`px-6 py-2 focus:outline-none ${
              activeTab === 'accountCreation'
                ? 'bg-blue-500 text-white'
                : 'text-blue-500 hover:bg-blue-200'
            }`}
          >
            Account Creation
          </button>
        </nav>
      </header>
      <main className="p-4">
        {activeTab === 'userDetails' ? <UserDetails /> : <AccountCreation />}
      </main>
    </div>
  );
}
