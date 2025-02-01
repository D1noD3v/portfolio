import React from 'react';
import terminal from '@/public/terminal.png';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Analytics } from "@vercel/analytics/react"
import Box from '@mui/material/Box';



// * Header för toppen av websidan
function Header() {
    return (
      // TODO: Fixa så texten är i center och inte längst ner inom headern.
    <header className="header">
      <div className='name-container *:inline'>
        <Image src={terminal} alt="Terminal logo" className="logo align-left left-0 top-0" width={48} height={48}/>
          <span>Dino Brankovic</span>
        </div>
        <div style={{
          background: 'white',
          height: 3,
        }}></div>
    </header>
    );
}

function About() {
  return (
    <>
      <span className='text-2xl' id='hellospan'>Hello!</span>
      <p className='about'>My name as seen above is Dino and this is my portfolio website. Meant to be a sort of landing page to <br />
      show my projects and to share my skills to potential employers.
      </p>
      <Analytics/><Analytics/>
    </>
  );
}

function GithubAbout(){
  return (
    <>
      <div className='githubtitle'>
        <a href="https://github.com/D1noD3v"><FontAwesomeIcon style={{fontSize: '50px'}} icon={faGithub}></FontAwesomeIcon></a>
        <h1 style={{fontSize: '25px'}}>My Github profile</h1>
      </div>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        somethign something
      </Box>
    </>
  )
}


// * main funktionen för websidan
export default function MyApp() {
    return (
      <div>
        <title>Dinos Portfolio</title>
        <Header/>
        <br />
        <About/>
        <GithubAbout/>
      </div>
    );
}



