import React from 'react';
import logo from '@/public/terminal.png';
import Image from 'next/image';


// * Header för toppen av websidan
function Header() {
    return (
      // TODO: Fixa så texten är i center och inte längst ner inom headern.
    <header className="header">
      <div className='name-container *:inline'>
        <Image src={logo} alt="Terminal logo" className="logo align-left left-0 top-0" width={48} height={48}/>
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
      <span className='text-2xl'>Hello!</span>
      <p className='about'>My name as seen above is Dino and this is my portfolio website. Meant to be a sort of landing page to <br />
      show my projects and to share my skills to potential Employers.
      </p>
    </>
  );
}


// * main funktionen för websidan
export default function MyApp() {
    return (
      <div>
        <Header/>
        <br />
        <About/>  
      </div>
    );
}



