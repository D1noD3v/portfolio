import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faDatabase, faCloud, faShield, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    name: 'Media Server',
    icon: faCloud,
    description: 'Streaming media services for movies, TV shows and music'
  },
  {
    name: 'Database',
    icon: faDatabase,
    description: 'Various databases for application persistence and data storage'
  },
  {
    name: 'Security',
    icon: faShield,
    description: 'Security services including firewall and network monitoring'
  },
  {
    name: 'Network',
    icon: faNetworkWired,
    description: 'Network management and monitoring services'
  }
];

export default function ServerPage() {
  return (
    <div className="p-6 text-white">
      <div className="flex items-center justify-center mb-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mr-3"
        >
          <FontAwesomeIcon icon={faServer} size="2x" />
        </motion.div>
        <motion.h1
          className="text-3xl font-medium tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &apos;Zagreus&apos; Server
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-6"
      >
        <p className="text-zinc-300 leading-relaxed">
          My home server runs various containerized applications for personal use.
          The configuration is available on GitHub and uses Docker Compose for easy deployment.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-xl font-medium mb-4 text-green-400 tracking-wide">Running Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="bg-zinc-700 p-4 rounded-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={service.icon} className="mr-3 text-green-400" />
                <h3 className="font-medium">{service.name}</h3>
              </div>
              <p className="text-zinc-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a 
            href="https://github.com/D1noD3v/zagreus-server-config" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            <FontAwesomeIcon icon={faServer} className="mr-2" />
            View Server Configuration
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}