import React from 'react';
import terminal from '@/public/terminal.png';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faServer } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinux, faJs } from "@fortawesome/free-brands-svg-icons";
import { Analytics } from "@vercel/analytics/react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';




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
      <Analytics/>
    </>
  );
}

function GithubAbout(){
  return (
    <>
      <div className='githubtitle'>
        <a href="https://github.com/D1noD3v" className='github-link'><FontAwesomeIcon style={{fontSize: '50px' }} icon={faGithub}></FontAwesomeIcon>
        <h1 style={{fontSize: '25px'}} className='github-heading'>My Github projects</h1>
        </a>
      </div>
      <Card className='project' sx={{minWidth: 50}}>
        <CardActionArea>
        <CardContent className='cardcontent'>
         <a href="https://github.com/D1noD3v/Bash-menu-manager" className='cardcontent-a'>
            <FontAwesomeIcon icon={faLinux}>
            </FontAwesomeIcon>
            <h1 style={{fontFamily: 'var(--font-krona)'}}>Bash Menu Manager</h1>
          </a>
            <br />
          <p>This project was an assignment in a university course about Linux. Some time after the assignment was done
              me and my partner in the project decided to publish it under the GPLv3 license and share it as open source software.</p>
        </CardContent>
        </CardActionArea>
      </Card>
      <br />
      <Card className='project' sx={{minWidth: 50}}>
        <CardActionArea>
        <CardContent className='cardcontent'>
         <a href="https://github.com/D1noD3v/portfolio" className='cardcontent-a'>
            <FontAwesomeIcon icon={faJs}>
            </FontAwesomeIcon>
            <h1 style={{fontFamily: 'var(--font-krona)'}}>Portfolio</h1>
          </a>
            <br />
          <p>This github repo is for this very website! Made with React, Tailwind CSS and next.js. If you want to use this website
            for your own, you can fork it from the github link above, as its licensed under the MIT license.
          </p>
        </CardContent>
        </CardActionArea>
      </Card>
      <br />
      <Card className='project' sx={{minWidth: 50}}>
        <CardActionArea>
        <CardContent className='cardcontent'>
         <a href="https://github.com/D1noD3v/zagreus-server-config" className='cardcontent-a'>
            <FontAwesomeIcon icon={faServer}>
            </FontAwesomeIcon>
            <h1 style={{fontFamily: 'var(--font-krona)'}}>&apos;Zagreus&apos; Server Config</h1>
          </a>
            <br />
          <p>My home server configuration. Contains all the docker compose files and docker run commands for the various apps/services i run.
          </p>
        </CardContent>
        </CardActionArea>
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



