import { useState } from 'react';
import React from 'react';
import logo from '/home/dinodev/portfolio/public/terminal.png';
import Image from 'next/image';
import Link from 'next/link';


function Header() {
    return (
    <header className="header">
        <Image src={logo} alt="Terminal logo" className="logo" />
        <nav>
            <ul>
                <Link href={"/"}>Home</Link>
            </ul>
        </nav>
    </header>
    );
}
    

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

