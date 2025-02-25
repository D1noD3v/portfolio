import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    // This would typically connect to a backend API
    // For demonstration, we'll simulate a submission
    try {
      // Simulate API call
      await new Promise(r => setTimeout(r, 1500));
      
      // Simulate successful submission
      setStatus({ submitted: true, submitting: false, error: null });
      setFormState({ name: '', email: '', message: '' });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setStatus({ submitted: false, submitting: false, error: null });
      }, 5000);
    } catch (error) {
      setStatus({ submitted: false, submitting: false, error: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className="p-6 text-white">
      <div className="flex items-center justify-center mb-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mr-3"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </motion.div>
        <motion.h1
          className="text-3xl font-medium tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-6 text-center"
      >
        <p className="text-zinc-300 leading-relaxed">
          Have a question or want to work together? Drop me a message!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="max-w-lg mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-mono text-green-400 mb-1">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full bg-zinc-700 border border-green-500/30 text-white p-3 rounded-md focus:outline-none focus:border-green-500 font-mono"
              placeholder="_"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-mono text-green-400 mb-1">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full bg-zinc-700 border border-green-500/30 text-white p-3 rounded-md focus:outline-none focus:border-green-500 font-mono"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-mono text-green-400 mb-1">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-zinc-700 border border-green-500/30 text-white p-3 rounded-md focus:outline-none focus:border-green-500 font-mono resize-none"
              placeholder="Type your message here..."
            />
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full py-3 rounded-md flex items-center justify-center font-mono text-sm tracking-wider transition-colors ${
                status.submitting 
                  ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {status.submitting ? (
                <>SENDING...</>
              ) : status.submitted ? (
                <>MESSAGE SENT <FontAwesomeIcon icon={faPaperPlane} className="ml-2" /></>
              ) : (
                <>SEND MESSAGE <FontAwesomeIcon icon={faPaperPlane} className="ml-2" /></>
              )}
            </button>
          </div>
          
          {status.error && (
            <div className="text-red-500 text-center text-sm p-2 bg-red-500/10 rounded-md">
              {status.error}
            </div>
          )}
          
          {status.submitted && (
            <div className="text-green-500 text-center text-sm p-2 bg-green-500/10 rounded-md">
              Your message has been sent successfully!
            </div>
          )}
        </form>
        
        {/* Terminal output-like message */}
        <div className="mt-8 font-mono text-sm text-green-400 bg-zinc-900 p-4 rounded-md border border-green-500/30">
          <div className="flex items-start">
            <span className="mr-2">$</span>
            <div>
              <span>echo &ldquo;Thanks for reaching out! I&apos;ll respond as soon as possible.&ldquo;</span>
              <div className="h-3"></div>
              <span className="text-white">Thanks for reaching out! I&apos;ll respond as soon as possible.</span>
              <div className="h-3"></div>
              <span>_<span className="animate-pulse">|</span></span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}