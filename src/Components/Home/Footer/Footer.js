import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png'


const Footer = () => {
    return(
        <footer>
            <div className='logo'>
                <NavLink to='/'><img src={logo}/></NavLink>
                <NavLink className='textLogo' to='/'>Book4you library</NavLink>
            </div>
            <div className='paragraph'>
                <p>For years our publishing company has been instrumental in picking 
                the best authors from the rest, enhancing the reading experience for 
                millions of Americans yearly!</p>
            </div>
            <p className='Copyright'>Copyright © 2022 . All Rights Reserved.</p>
        </footer>
    )
}
export default Footer;