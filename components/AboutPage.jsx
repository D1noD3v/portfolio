import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Linux', level: 90 },
  { name: 'Next.js', level: 75 },
  { name: 'Docker', level: 70 },
];

export default function AboutPage() {
  return (
    <div className="p-6 text-white">
      <motion.h1 
        className="text-3xl font-medium mb-6 text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-medium mb-4 text-green-400 tracking-wide">Hello!</h2>
          <p className="text-zinc-300 leading-relaxed">
            My name is Dino and I&apos;m a passionate developer. This portfolio website
            showcases my projects and skills to potential employers.
          </p>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            I specialize in web development and Linux server administration. 
            I enjoy working with modern JavaScript frameworks and containerized applications.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-xl font-medium mb-4 text-green-400 tracking-wide">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2.5">
                  <motion.div 
                    className="bg-green-500 h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}