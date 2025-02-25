import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import CardLayout from '@/components/MonospaceCardLayout';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import ProjectsPage from '@/components/ProjectsPage';
import ServerPage from '@/components/ServerPage';
import ContactPage from '@/components/ContactPage';

export default function MyApp() {
  return (
    <div className="bg-zinc-900 min-h-screen font-mono">
      <title>Dino&apos;s Portfolio</title>
      
      <CardLayout>
        <HomePage id="home" />
        <AboutPage id="about" />
        <ProjectsPage id="projects" />
        <ServerPage id="server" />
        <ContactPage id="contact" />
      </CardLayout>
      
      <Analytics/>
    </div>
  );
}