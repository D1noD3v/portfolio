import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinux, faJs } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    id: 'bash-menu',
    title: 'Bash Menu Manager',
    description: 'This project was an assignment in a university course about Linux. Some time after the assignment was done me and my partner in the project decided to publish it under the GPLv3 license and share it as open source software.',
    icon: faLinux,
    link: 'https://github.com/D1noD3v/Bash-menu-manager'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'This github repo is for this very website! Made with React, Tailwind CSS and next.js. If you want to use this website for your own, you can fork it from the github link above, as its licensed under the MIT license.',
    icon: faJs,
    link: 'https://github.com/D1noD3v/portfolio'
  },
  {
    id: 'zagreus',
    title: "'Zagreus' Server Config",
    description: 'My home server configuration. Contains all the docker compose files and docker run commands for the various apps/services i run.',
    icon: faServer,
    link: 'https://github.com/D1noD3v/zagreus-server-config'
  }
];

export default function ProjectsPage() {
  return (
    <div className="p-6 text-white">
      <div className="flex items-center justify-center mb-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mr-3"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </motion.div>
        <motion.h1
          className="text-3xl font-medium tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-zinc-700 rounded-lg overflow-hidden hover:bg-zinc-600 transition-colors"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <FontAwesomeIcon icon={project.icon} className="mr-3 text-green-400" />
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                </div>
                <p className="text-zinc-300">{project.description}</p>
                <div className="mt-4 text-green-400 flex items-center">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  <span>View on GitHub</span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}