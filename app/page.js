'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import AccountCreation from './register/page';
import UserDetails from './user-details/page';

export default function Home() {
  const [activeTab, setActiveTab] = useState('userDetails');

  const tabUnderlineStyle = {
    width: activeTab === 'userDetails' ? '50%' : '50%',
    transform: activeTab === 'userDetails' ? 'translateX(50%)' : 'translateX(55%)',
  };

  return (
    <div className="flex  justify-start">
      <div className="hidden md:block bg-lime md:w-1/7">
        <h1>Sidebar</h1>
      </div>

      <div className="min-h-screen bg-white w-full md:w-6/7">
        <header className="py-4">
          <nav className="flex justify-left">
            <button
              onClick={() => setActiveTab('userDetails')}
              className={`relative px-6 py-2 focus:outline-none ${activeTab === 'userDetails'
                ? 'text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
                }`}
            >
              User Details
              {activeTab === 'userDetails' && (
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                  style={tabUnderlineStyle}
                ></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('accountCreation')}
              className={`relative px-6 py-2 focus:outline-none ${activeTab === 'accountCreation'
                ? 'text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
                }`}
            >
              Account Creation
              {activeTab === 'accountCreation' && (
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                  style={tabUnderlineStyle}
                ></div>
              )}
            </button>
          </nav>
        </header>
        <main className="p-4">
          {activeTab === 'userDetails' ? <UserDetails /> : <AccountCreation />}
        </main>
      </div>
    </div>
  );
}
