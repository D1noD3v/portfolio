import React from 'react';
import terminal from '@/public/terminal.png';
import Image from 'next/image';



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
    </>
  );
}

function GithubAbout(){
  return (
    <>
      <div className='githubtitle'>
        <Image/>
      </div>
    
    </>
  )
}


// * main funktionen för websidan
export default function MyApp() {
    return (
      <div>
        <title>Dino's Portfolio</title>
        <Header/>
        <br />
        <About/>
      </div>
    );
}



