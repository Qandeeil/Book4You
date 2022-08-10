import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './imgHeader/logo.png'
const Header = () => {        

    return(
        <header>
        <div className='logo'>
            <NavLink to='/'><img src={logo}/></NavLink>
            <NavLink className='textLogo' to='/'>Book4you library</NavLink>
        </div>
            <div className='componentWidth'>
                <nav>
                    <ul>
                        <div className='linkPage'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/services'>Services</NavLink></li>
                            <li><NavLink to='/collections'>Collections</NavLink></li>
                            <li><NavLink to='/e-Library'>ELibrary</NavLink></li>
                            <li><NavLink to='/contacts'>Contacts</NavLink></li>
                        </div>
                    </ul>
                </nav>
                <div className='Content'>
                    <h1>The Wonderful World of Reading</h1>
                    <p>The library is a place for everyone to explore, discover, and engage</p>
                    <NavLink to='/collections'>View Collections</NavLink>
                </div>
            </div>
        </header>
    )
}
export default Header;