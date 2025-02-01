import React from 'react';
import terminal from '@/public/terminal.png';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinux } from "@fortawesome/free-brands-svg-icons";
import { Analytics } from "@vercel/analytics/react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




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
        <a href="https://github.com/D1noD3v"><FontAwesomeIcon style={{fontSize: '50px', paddingBottom: 50}} icon={faGithub}></FontAwesomeIcon></a>
        <h1 style={{fontSize: '25px', paddingBottom: 50}}>My Github projects</h1>
      </div>
      <Card className='project1' sx={{minWidth: 50}}>
        <CardContent className='cardcontent'>
         <a href="https://github.com/D1noD3v/Bash-menu-manager">
            <FontAwesomeIcon icon={faTerminal}>
            </FontAwesomeIcon>
            <h1 style={{fontFamily: 'var(--font-krona)'}}>Bash Menu Manager</h1>
          </a>
            <br />
          <p>This project was an assignment in a university course about Linux. Some time after the assignment was done <br /> 
              me and my partner in the project decided to publish it under the GPLv3 license and share it as open source software.</p>
        </CardContent>
      </Card>
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



