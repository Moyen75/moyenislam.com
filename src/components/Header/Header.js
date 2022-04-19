import React from 'react';
// import img from '../images/bg.gif'
import '../Style/Style.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='nav-bar'>
                <nav>
                    <ul>
                        <li><a className='link' href="#about">ABOUT</a></li>
                        <li><a className='link' href="#skill">SKILLS</a></li>
                        <li><a className='link' href="#projects">PROJECTS</a></li>
                        <li><a className='link' href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <h1>Muhammad Moyenul Islam</h1>
            <h2>Full Stack Developer</h2>
        </div>
    );
};

export default Header;