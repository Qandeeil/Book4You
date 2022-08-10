import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from './image/image-1.jpg'
import Simage1 from './image/Simage1.jpg'
import Simage2 from './image/Simage2.jpg'
import Simage3 from './image/Simage3.jpg'
import Simage4 from './image/Simage4.jpg'
import Simage5 from './image/Simage5.jpg'
import Simage6 from './image/Simage6.jpg'
import Simage7 from './image/Simage7.jpg'
import Simage8 from './image/Simage8.jpg'

const Main = () => {
    return(
        <main className='mainWidth'>
            <div className='title'>
                <h1>Our Services</h1>
            </div>
            <div className='content'>
                <div className='BoxLeft'>
                    <div className='text'>
                        <h1>Ask a Librarian</h1>
                        <p>Dolor nunc vule putateulr ips dol consec.Donec semp 
                        ertet laciniate ultricie upi disse comete dolo lectus 
                        fgilla itollicil tua ludin dolor nec met quam accumsan. 
                        Dolore con dime netus lullam utlacus adipiscing ipsum molestie.</p>
                        <NavLink to='/More'>More info</NavLink>
                    </div>
                    <div className='image'>
                        <img src={image1}/>
                    </div>
                </div>
                <div className='BoxRight'>
                    <div className='text'>
                        <h1>Meeting Rooms</h1>
                        <p>Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate 
                        ultricie upi disse comete dolo lectus fgilla itollicil tua ludin dolor 
                        nec met quam accumsan. Dolore con dime netus lullam utlacus adipiscing 
                        ipsum molestie.</p>
                        <NavLink to='/More'>More info</NavLink>
                    </div>
                    <div className='image'>
                        <img src={Simage1}/>
                    </div>
                </div>
                <div className='BoxLeft'>
                    <div className='text'>
                        <h1>Study Rooms</h1>
                        <p>Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate 
                        ultricie upi disse comete dolo lectus fgilla itollicil tua ludin dolor 
                        nec met quam accumsan. Dolore con dime netus lullam utlacus adipiscing 
                        ipsum molestie.</p>
                        <NavLink to='/More'>More info</NavLink>
                    </div>
                    <div className='image'>
                        <img src={Simage2}/>
                    </div>
                </div>
                <div className='BoxRight'>
                    <div className='text'>
                        <h1>Research</h1>
                        <p>Dolor nunc vule putateulr ips dol consec.Donec semp ertet laciniate 
                        ultricie upi disse comete dolo lectus fgilla itollicil tua ludin dolor 
                        nec met quam accumsan. Dolore con dime netus lullam utlacus adipiscing 
                        ipsum molestie.</p>
                        <NavLink to='/More'>More info</NavLink>
                    </div>
                    <div className='image'>
                        <img src={Simage3}/>
                    </div>
                </div>
                <div className='BoxLeft'>
                    <div className='text'>
                        <h1>Exhibitions</h1>
                        <p>Dolor nunc vule putateulr ips dol consec.Donec semp 
                        ertet laciniate ultricie upi disse comete dolo lectus 
                        fgilla itollicil tua ludin dolor nec met quam accumsan. 
                        Dolore con dime netus lullam utlacus adipiscing ipsum molestie.</p>
                        <NavLink to='/More'>More info</NavLink>
                    </div>
                    <div className='image'>
                        <img src={Simage4}/>
                    </div>
                </div>
                <div className='BoxRight'>
                    <div className='text'>
                        <h1>Exhibitions</h1>
                        <p>Dolor nunc vule putateulr ips dol consec.Donec semp 
                        ertet laciniate ultricie upi disse comete dolo lectus 
                        fgilla itollicil tua ludin dolor nec met quam accumsan. 
                        Dolore con dime netus lullam utlacus adipiscing ipsum molestie.</p>
                        <NavLink to='/More'>More info</NavLink>
                    </div>
                    <div className='image'>
                        <img src={Simage5}/>
                    </div>
                </div>
                <div className='BoxLeft'>
                    <div className='text'>
                        <h1>Accessibility Services</h1>
                        <p>Dolor nunc vule putateulr ips dol consec.Donec semp 
                        ertet laciniate ultricie upi disse comete dolo lectus 
                        fgilla itollicil tua ludin dolor nec met quam accumsan. 
                        Dolore con dime netus lullam utlacus adipiscing ipsum molestie.</p>
                        <NavLink to='/More'>More info</NavLink>
                    </div>
                    <div className='image'>
                        <img src={Simage6}/>
                    </div>
                </div>
                <div className='BoxRight'>
                    <div className='text'>
                        <h1>Wireless Printing</h1>
                        <p>Dolor nunc vule putateulr ips dol consec.Donec semp 
                        ertet laciniate ultricie upi disse comete dolo lectus 
                        fgilla itollicil tua ludin dolor nec met quam accumsan. 
                        Dolore con dime netus lullam utlacus adipiscing ipsum molestie.</p>
                        <NavLink to='/More'>More info</NavLink>
                    </div>
                    <div className='image'>
                        <img src={Simage7}/>
                    </div>
                </div>
                <div className='BoxLeft'>
                    <div className='text'>
                        <h1>Playgroop</h1>
                        <p>Dolor nunc vule putateulr ips dol consec.Donec semp 
                        ertet laciniate ultricie upi disse comete dolo lectus 
                        fgilla itollicil tua ludin dolor nec met quam accumsan. 
                        Dolore con dime netus lullam utlacus adipiscing ipsum molestie.</p>
                        <NavLink to='/More'>More info</NavLink>
                    </div>
                    <div className='image'>
                        <img src={Simage8}/>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main;