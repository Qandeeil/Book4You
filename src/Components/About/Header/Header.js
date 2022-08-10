import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png'


const Header = () => {
    return(
        <header className='HeaderAbout'>
        <div className='ContentAbout'>
            <div className='logo About'>
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
            </div>
        </div>
        </header>
    )
}
export default Header;