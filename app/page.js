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
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <style>svg{fill:#b8fb3c}</style>
    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
  </svg>
`;
  return (
    <div className="flex  justify-start">
      <div className="hidden md:block bg-lime md:w-1/7">
        <h1>Sidebar</h1>
      </div>

      <div className="min-h-screen bg-white w-full md:w-6/7">
        <div className='px-6 py-2 '>
          <h1 className='text-xl font-semibold'>User Management</h1>
          <div className='text-red-200'>
            <span className='inline-block' dangerouslySetInnerHTML={{ __html: svgMarkup }} />&nbsp;/&nbsp;
            User Management
          </div>
        </div>
        <header className=" ">
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
        <main className="p-4 ml-6 mb-2 mr-4 border-4 rounded" >
          {activeTab === 'userDetails' ? <UserDetails /> : <AccountCreation />}
        </main>
      </div>
    </div>
  );
}
