import React from 'react';
import Image from 'next/image';
import terminal from '@/public/terminal.png';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="p-6 text-white">
      <div className="flex items-center justify-center mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src={terminal} 
            alt="Terminal logo" 
            width={80} 
            height={80}
            className="mr-4"
          />
        </motion.div>
        <motion.h1 
          className="text-4xl font-medium font-mono" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Dino Brankovic
        </motion.h1>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl text-green-400 mb-4 text-center font-light tracking-wider">Welcome to my portfolio</h2>
        
        <p className="text-lg leading-relaxed text-zinc-300">
          This interactive portfolio showcases my projects and skills as a developer.
          Use the navigation at the bottom to explore different sections.
        </p>
        
        <div className="mt-8 flex justify-center">
          <motion.button 
            onClick={() => document.querySelector('button[aria-label="Contact"]')?.click()}
            className="px-4 py-2 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 font-mono tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}