import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import React from 'react'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'User Management',
  description: 'Developed by Avni Arora',
};

export default function RootLayout({ children }) {
  return (
    React.createElement('html', { lang: 'en' },
      React.createElement('body', { className: inter.className },

        React.createElement('nav', { className: 'bg-white border-gray-200 dark:bg-gray-900' },
          React.createElement('div', { className: 'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4' },
            React.createElement('a', { href: '/', className: 'flex items-center space-x-3 rtl:space-x-reverse' },
              React.createElement('img', { src: '/images/logo.jpg', className: 'h-8', alt: 'Logo' }),
              React.createElement('span', { className: 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white' }, 'Greenie')
            ),
            React.createElement('div', { className: 'flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse' },
              React.createElement('button', { type: 'button', className: 'flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600', id: 'user-menu-button', 'aria-expanded': 'false', 'data-dropdown-toggle': 'user-dropdown', 'data-dropdown-placement': 'bottom' },
                React.createElement('span', { className: 'sr-only' }, 'Open user menu'),
                React.createElement('img', { className: 'w-8 h-8 rounded-full', src: '/images/user.png', alt: 'user photo' })
              ),
              React.createElement('div', { className: 'z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600', id: 'user-dropdown' },
                React.createElement('div', { className: 'px-4 py-3' },
                  React.createElement('span', { className: 'block text-sm text-gray-900 dark:text-white' }, 'Avni Arora'),
                  React.createElement('span', { className: 'block text-sm  text-gray-500 truncate dark:text-gray-400' }, 'avni.arora2002@gmail.com')
                ),
                React.createElement('ul', { className: 'py-2', 'aria-labelledby': 'user-menu-button' },
                  React.createElement('li', null,
                    React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white' }, 'Dashboard')
                  ),
                  React.createElement('li', null,
                    React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white' }, 'Settings')
                  ),
                  React.createElement('li', null,
                    React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white' }, 'Earnings')
                  ),
                  React.createElement('li', null,
                    React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white' }, 'Sign out')
                  )
                )
              ),
              React.createElement('button', { 'data-collapse-toggle': 'navbar-user', type: 'button', className: 'inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600', 'aria-controls': 'navbar-user', 'aria-expanded': 'false' },
                React.createElement('span', { className: 'sr-only' }, 'Open main menu'),
                React.createElement('svg', { className: 'w-5 h-5', 'aria-hidden': 'true', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 17 14' },
                  React.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M1 1h15M1 7h15M1 13h15' })
                )
              )
            ),
            React.createElement('div', { className: 'items-center justify-between hidden w-full md:flex md:w-auto md:order-1', id: 'navbar-user' },
              React.createElement('ul', { className: 'flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700' },
                React.createElement('li', null,
                  React.createElement('a', { href: '/', className: 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500', 'aria-current': 'page' }, 'Home')
                ),
                React.createElement('li', null,
                  React.createElement('a', { href: '/register', className: 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' }, 'Register')
                ),
                React.createElement('li', null,
                  React.createElement('a', { href: '/user-details', className: 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' }, 'User Details')
                )
              )
            )
          )
        ),

        children
      )
    )
  );
}
