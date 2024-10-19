import { useState } from 'react';
import React from 'react';
import logo from '@/public/terminal.png';
import Image from 'next/image';



// * Header för toppen av websidan
function Header() {
    return (
      // TODO: Fixa så texten är i center och inte längst ner inom headern.
    <header className="header">
        <Image src={logo} alt="Terminal logo" className="logo" width={48} height={48}/>
        <div className='name-container'>
          <span>Dino Brankovic</span>
        </div>
        <div style={{
          background: 'white',
          height: 3,
        }}></div>
    </header>
    );
}

function WordPart() {
  return (
    <div className="wordpart">
      <span className='size-24 bg-clip-padding'>Hello!</span>

      <p>My name as seen above is Dino Brankovic and this is my portfolio site!</p>
    </div>
  );
}



    
// * main funktionen för websidan
export default function MyApp() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
      <div>
        <Header/>
        <br />
        <WordPart/>  
      </div>
    );
}



