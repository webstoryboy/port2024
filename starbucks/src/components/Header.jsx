import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header id='header'>
            <h1 className='header__logo'>
                <Link href='/'>sbucks</Link>
            </h1>
            <nav className='header__nav'>
                <ul>
                    <li>
                        <Link href='/count'>world</Link>
                        <Link href='/stores'>local</Link>
                        <Link href='/about'>about</Link>
                    </li>
                </ul>
            </nav>
            <div className='header__utils'>
                <button className='search'>
                    <span className='blind'>search</span>
                </button>
            </div>
        </header>
    )
}
