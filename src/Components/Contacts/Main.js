import React from 'react';
import facebook from './icon/icons8-facebook.gif'
import github from './icon/icons8-github.gif'
import instagram from './icon/icons8-instagram.gif'
import linkedin from './icon/icons8-linkedin.gif'
import image from './images/miles-burke-idhx-MOCDSk-unsplash.jpg'

const Main = () => {
    return(
        <div className='MainContacts'>
            <div className='content'>
                <div className='left'>
                    <h1>Contacts</h1>
                    <div className='contacts'>
                        <p>Phone: <span>(123) 456-7890</span></p>
                        <p>Fax: <span>(123) 456-7891</span></p>
                        <p>Email: <span>bb.qandeeil@gmail.com</span></p>
                    </div>
                    <div className='icon'>
                        <a href='https://web.facebook.com/qandeeil/'><img src={facebook} width='25'/></a>
                        <a href='https://github.com/qandeeil'><img src={github} width='25'/></a>
                        <a href='https://www.instagram.com/qandeeil'><img src={instagram} width='25'/></a>
                        <a href='https://www.linkedin.com/in/qandeeil'><img src={linkedin} width='25'/></a>
                    </div>
                </div>
                <div className='Right'>
                    <img src={image} width='800px'/>
                </div>
            </div>
        </div>
    )
}
export default Main;
