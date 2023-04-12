import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className=''>
                <h1>digital work</h1>
                <ul>
                    <Link className='pm' to="/">Home</Link>
                    <Link className='pm' to="/About">About</Link>
                    <Link className='pm' to="/Contact">Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;