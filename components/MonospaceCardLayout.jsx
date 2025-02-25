import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faUser, faServer, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NAV_ITEMS = [
  { id: 'home', icon: faHome, title: 'Home' },
  { id: 'about', icon: faUser, title: 'About' },
  { id: 'projects', icon: faCode, title: 'Projects' },
  { id: 'server', icon: faServer, title: 'Server' },
  { id: 'contact', icon: faEnvelope, title: 'Contact' }
];

export default function CardLayout({ children }) {
  const [activePage, setActivePage] = useState('home');

  // Filter children to show only the active one
  const activeChild = React.Children.toArray(children).find(
    child => child.props.id === activePage
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Terminal-style header */}
      <div className="bg-zinc-900 p-2 border-b border-green-500 flex items-center font-mono">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-green-400 text-sm tracking-wider">
          dino@portfolio:~$ <span className="animate-cursor-blink">_</span>
        </div>
      </div>

      {/* Main content area with card effect */}
      <div className="flex-grow flex justify-center items-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 300, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -300, rotateY: -45 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-800 rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden border border-green-500/30"
          >
            <div className="bg-zinc-900 px-4 py-2 border-b border-green-500/30 font-mono text-sm text-green-400">
              {activeChild.props.id}.jsx
            </div>
            {activeChild}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation bar */}
      <nav className="bg-zinc-900 p-4 border-t border-green-500/30">
        <ul className="flex justify-center space-x-8">
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
                              <button
                onClick={() => setActivePage(item.id)}
                aria-label={item.title}
                className={`flex flex-col items-center transition-colors duration-300 ${
                  activePage === item.id ? 'text-green-400' : 'text-white hover:text-green-300'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                <span className="mt-1 text-xs font-mono tracking-wider">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}