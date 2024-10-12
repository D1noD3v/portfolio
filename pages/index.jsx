import { useState } from 'react';
import React from 'react';



export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function Header() {
        <header className="header">
        <img src="logo.png" alt="Company Logo" className="logo" />
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
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

