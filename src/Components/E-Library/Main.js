import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/mt-1519-volunteer-img-2.jpg'

const ELibrary = () => {
    return(
        <div className='ELibrary'>
            <div className='Header'>
                <h1 className='h1'>Digital Collections</h1>
                <p>You can get audiobooks, music, movies, 
                magazines and more all on your mobile device 
                with the Book4You Library’s Digital Collections. </p>
                <div className='images'>
                    <div className='image'>
                        <img src={image1}/>
                        <h1>eBooks</h1>
                        <span>View More</span>
                    </div>
                    <div className='image'>
                        <img src={image2}/>
                        <h1>eMagazines</h1>
                        <span>View More</span>
                    </div>
                    <div className='image'>
                        <img src={image3}/>
                        <h1>Music</h1>
                        <span>View More</span>
                    </div>
                    <div className='image'>
                        <img src={image4}/>
                        <h1>Movies</h1>
                        <span>View More</span>
                    </div>
                </div>
            </div>
            <div className='DataBases'>
                <div className='content'>
                    <div className='Left'>
                        <img src={image5}/>
                    </div>
                    <div className='Right'>
                        <h1>DataBases</h1>
                        <p>Book4You Library’s database is a collection of 
                        articles from books, newspapers, magazines, journals 
                        and other sources available via computer. A database 
                        eliminates the need to retain paper copies of these items.</p>
                        <NavLink to='/collections'>Browse Category</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ELibrary;