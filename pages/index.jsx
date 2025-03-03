import React from 'react';
import Head from 'next/head';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dino&apos;s Portfolio | Linux & Network Specialist</title>
        <meta name="description" content="Dino's portfolio showcasing expertise in Linux, Python, JavaScript, Bash, networking and Cisco systems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Portfolio />
    </>
  );
}