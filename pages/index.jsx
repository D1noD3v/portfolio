import { useState } from 'react';
import React from 'react';
import logo from '@/public/terminal.png';
import Image from 'next/image';
import Link from 'next/link';



// * Header för toppen av websidan
function Header() {
    return (
    <header className="header ">
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



    
// * main funktionen för websidan
export default function MyApp() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
      <div>
        <Header/>
        <MyButton count={count} onClick={handleClick}/> <br />
        <MyButton count={count} onClick={handleClick}/>
      </div>
    );
  }



    function MyButton({ count, onClick }) {
        return (
        <button onClick={onClick}>
            Clicked {count} times
      </button>
    );

}

