import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  // Basic state for tab navigation
  const [activeTab, setActiveTab] = useState('about');
  
  // Simple form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  // Skills data
  const skills = [
    {
      name: "Linux",
      icon: "🐧",
      description: "Experienced with various distributions including Debian, Ubuntu, and Fedora. Proficient in system administration, configuration, and troubleshooting. I also have experience setting up and maintaining web servers, database servers, and application servers on Linux environments."
    },
    {
      name: "Python",
      icon: "🐍",
      description: "Skilled in Python development for automation, scripting, and building applications with frameworks like Flask and Django."
    },
    {
      name: "JavaScript",
      icon: "🟨",
      description: "Strong knowledge of JavaScript, including modern ES6+ features, React, and Node.js for web development and application building."
    },
    {
      name: "Bash",
      icon: "💻",
      description: "Proficient in Bash scripting for automation, system administration tasks, and creating efficient command-line utilities."
    },
    {
      name: "Routing Protocols",
      icon: "🌐",
      description: "Knowledge of networking protocols including OSPF, BGP, and EIGRP, with expertise in troubleshooting and optimizing network routes."
    },
    {
      name: "Cisco Routers & Switches",
      icon: "🔌",
      description: "Skilled in configuring and managing Cisco network hardware, implementing VLANs, ACLs, and optimizing network performance."
    }
  ];

  // Projects data
  const projects = [
    {
      title: "Bash Menu Manager",
      description: "This project was an assignment in a university course about Linux. Some time after the assignment was done me and my partner in the project decided to publish it under the GPLv3 license and share it as open source software.",
      tech: ["Linux", "Bash", "Open Source"],
      link: "https://github.com/D1noD3v/Bash-menu-manager",
      icon: "🐧"
    },
    {
      title: "Portfolio",
      description: "This github repo is for this very website! Made with React, Tailwind CSS and next.js. If you want to use this website for your own, you can fork it from the github link, as its licensed under the MIT license.",
      tech: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
      link: "https://github.com/D1noD3v/portfolio",
      icon: "🟨"
    },
    {
      title: "Zagreus Server Config",
      description: "My home server configuration. Contains all the docker compose files and docker run commands for the various apps/services I run.",
      tech: ["Docker", "Linux", "Server Administration"],
      link: "https://github.com/D1noD3v/zagreus-server-config",
      icon: "🖥️"
    }
  ];

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const formData = {
        name: formName.trim(),
        email: formEmail.trim(),
        message: formMessage.trim()
      };
      
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'An error occurred');
      }
      
      // Success! Clear form
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setSubmitSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error.message || 'Failed to send message. Please try again.');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitError(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Header */}
      <header className="py-6 px-4 md:px-16 lg:px-32 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl text-green-500">
            <span className="font-semibold">~/</span>
            <span className="text-blue-400">dino<span className='text-green-500'>@</span>portfolio</span>
            <span className="text-green-500 animate-pulse">_</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => setActiveTab('about')}
                  className={`${activeTab === 'about' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
                >
                  about.me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('skills')}
                  className={`${activeTab === 'skills' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
                >
                  skills.json
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`${activeTab === 'projects' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
                >
                  projects.js
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className={`${activeTab === 'contact' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
                >
                  contact.sh
                </button>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setActiveTab(activeTab === 'menu' ? 'about' : 'menu')} className="space-y-1 cursor-pointer">
              <div className="w-6 h-0.5 bg-gray-100"></div>
              <div className="w-6 h-0.5 bg-gray-100"></div>
              <div className="w-6 h-0.5 bg-gray-100"></div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden mt-4 ${activeTab === 'menu' ? 'block' : 'hidden'}`}>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('about')}
                className={`${activeTab === 'about' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
              >
                about.me
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('skills')}
                className={`${activeTab === 'skills' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
              >
                skills.json
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`${activeTab === 'projects' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
              >
                projects.js
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`${activeTab === 'contact' ? 'text-green-400' : 'text-gray-400'} hover:text-green-400 transition-colors`}
              >
                contact.sh
              </button>
            </li>
          </ul>
        </div>
        
        <div className="md:hidden mt-4">
          {activeTab === 'about' && <span className="text-green-400">about.me</span>}
          {activeTab === 'skills' && <span className="text-green-400">skills.json</span>}
          {activeTab === 'projects' && <span className="text-green-400">projects.js</span>}
          {activeTab === 'contact' && <span className="text-green-400">contact.sh</span>}
        </div>
      </header>
      
      {/* Main content */}
      <main className="px-4 py-8 md:px-16 lg:px-32">
        {/* About section */}
        {activeTab === 'about' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">// About Me</div>
              <h1 className="text-3xl md:text-4xl text-blue-400">Hello, I&apos;m Dino!</h1>
            </div>
            <div className="max-w-3xl space-y-4 text-gray-300">
              <p>
                I&apos;m a <span className="text-green-400">tech enthusiast</span> with expertise in 
                Linux environments, network infrastructure, and automation.
              </p>
              <p>
                With deep knowledge of <span className="text-yellow-400">Linux</span>, <span className="text-blue-400">Python</span>, <span className="text-yellow-300">JavaScript</span>, and <span className="text-green-500">Bash</span>, 
                I build robust systems and automate complex networking tasks.
              </p>
              <p>
                My experience with <span className="text-blue-300">Cisco</span> routers, switches, and various routing protocols 
                allows me to design and maintain efficient network architectures.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-800 rounded-md border border-gray-700">
              <code className="text-sm text-gray-300">
                <span className="text-green-400">$</span> whoami<br />
                <span className="text-yellow-300">Linux Specialist | FOSS Enthusiast | Open Source Contributor</span><br />
                <span className="text-green-400">$</span> uptime<br />
                <span className="text-yellow-300">Experienced with Linux systems and networking technologies</span><br />
                <span className="text-green-400">$</span> location<br />
                <span className="text-yellow-300">Building projects and exploring new technologies</span><br />
                <span className="text-green-400">$</span> _
              </code>
            </div>
          </motion.section>
        )}
        
        {/* Skills section */}
        {activeTab === 'skills' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">// Technical Skills</div>
              <h2 className="text-3xl text-blue-400">Skills &amp; Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={index}
                  className="p-4 bg-gray-800 rounded-md border border-gray-700 hover:border-green-400 transition-colors"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <h3 className="text-xl text-green-400">{skill.name}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
        
        {/* Projects section */}
        {activeTab === 'projects' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">// My GitHub Projects</div>
              <h2 className="text-3xl text-blue-400">Projects</h2>
              <p className="text-gray-300">Check out my latest GitHub repositories:</p>
            </div>
            <div className="space-y-6 mt-6">
              {projects.map((project, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={index}
                  className="p-6 bg-gray-800 rounded-md border border-gray-700"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{project.icon}</span>
                    <h3 className="text-xl text-green-400">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View on GitHub
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-gray-800 rounded-md border border-gray-700">
              <div className="text-gray-400 mb-2">// Find more on GitHub</div>
              <code className="text-sm text-gray-300">
                <span className="text-green-400">const</span> <span className="text-blue-300">moreProjects</span> = <span className="text-yellow-300">true</span>;<br />
                <span className="text-green-400">if</span> (moreProjects) {'{'}<br />
                &nbsp;&nbsp;<span className="text-blue-300">window.location</span> = <span className="text-yellow-300">"https://github.com/D1noD3v"</span>;<br />
                {'}'}
              </code>
            </div>
          </motion.section>
        )}
        
        {/* Contact section - simplified */}
        {activeTab === 'contact' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">// Get In Touch</div>
              <h2 className="text-3xl text-blue-400">Contact Me</h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-gray-300 mb-6">
                Interested in working together? Feel free to reach out!
              </p>
              <div className="p-6 bg-gray-800 rounded-md border border-gray-700">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-gray-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-100 focus:border-green-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-100 focus:border-green-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Message</label>
                    <textarea 
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-100 focus:border-green-400 focus:outline-none transition-colors h-32"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  {submitError && (
                    <div className="p-2 bg-red-800 text-red-200 rounded-md">
                      {submitError}
                    </div>
                  )}
                  
                  {submitSuccess && (
                    <div className="p-2 bg-green-900 text-green-200 rounded-md">
                      Message sent successfully!
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`px-4 py-2 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-400 transition-colors ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
              <div className="mt-8 p-4 bg-gray-800 rounded-md border border-gray-700">
                <div className="text-gray-400 mb-2">// Alternative ways to reach me</div>
                <code className="text-sm text-gray-300">
                  <span className="text-green-400">$</span> echo "Connect with me on LinkedIn or GitHub"<br />
                  <span className="text-green-400">$</span> _
                </code>
              </div>
            </div>
          </motion.section>
        )}
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-4 md:px-16 lg:px-32 border-t border-gray-800 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            &copy; Dino Brankovic. All rights reserved. • Licensed under the MIT License • {new Date().getFullYear()}<br /> • Built with <a href="https://nextjs.org/" className="text-slate-700 hover:text-green-400 transition-colors">Next.js</a> and <a href="https://tailwindcss.com/" className="text-blue-600 hover:text-green-400 transition-colors">Tailwind CSS</a>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/D1noD3v" className="text-gray-400 hover:text-green-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/dinobra" className="text-gray-400 hover:text-green-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;