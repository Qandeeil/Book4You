import React , { useState , useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import AboutUs from './images/AboutUs.jpg'
import image2 from './images/image-2.jpg'
import person1 from './images/person-1.jpg'
import person2 from './images/person-2.jpg'
import person3 from './images/person-3.jpg'

const Main = () => {

    const [visitors,setVisitors] = useState(0)
    const [years,setYears] = useState(0)
    const [databases,setDatabases] = useState(0)
    const [tea,setTea] = useState(0)

    useEffect(() => {
        if(years < 44){
            setTimeout(() => setYears(years + 1),50)
        }
        if(visitors < 158348){
            setTimeout(() => setVisitors(visitors + 100),1)
        }
        if(databases < 65){
            setTimeout(() => setDatabases(databases + 1),50)
        }
        if(tea < 16546){
            setTimeout(() => setTea(tea + 100),20)
        }
    },[years,visitors,databases,tea])


    return(
        <main>
            <div className='aboutUs'>
                <div className='text'>
                    <h1>About Us</h1>
                    <h3>Book4You Library was founded in 1974, 
                    is a public library serving the Sacramento 
                    city in California State.</h3>
                    <p>Library materials, programs, and services are offered for children, teens, and adults. 
                    We proudly serve more than 150,000 thousand visitors each year and our patrons have access 
                    to a collection of more than 100,000 books and materials, 20 public computers, and a wide range 
                    of digital resources, including downloadable eBooks, audio books, music and videos. We offer over 
                    65 databases, covering areas such as health, biography, psychology, science and technology, and 
                    travel and careers, and we provide literary, cultural and educational programs for children, teens, 
                    and adults each month.</p>
                </div>
                <div className='image'>
                    <img src={AboutUs}/>
                </div>
            </div>
            <div className='Number'>
                <div className='content'>
                    <div className='counter'>
                        <h1>{years}</h1>
                        <p className='line'></p>
                        <p>Years of Experience</p>
                    </div>
                    <div className='counter'>
                        <h1>{visitors}</h1>
                        <p className='line'></p>
                        <p>Visitors</p>
                    </div>
                    <div className='counter'>
                        <h1>{databases}</h1>
                        <p className='line'></p>
                        <p>Databases</p>
                    </div>
                    <div className='counter'>
                        <h1>{tea}</h1>
                        <p className='line'></p>
                        <p>Tea Cups</p>
                    </div>
                </div>
            </div>
            <div className='OurServices'>
                <div className='text'>
                    <h1>Our Services</h1>
                    <p>Book4You Library prepared different services for our visitors:</p>
                    <ol className='left'>
                        <li>Ask a Librarian</li>
                        <li>Meeting Rooms</li>
                        <li>Study Rooms</li>
                        <li>Research</li>
                        <li>Exhibitions</li>
                    </ol>
                    <ol className='right'>
                        <li>Computer Classes</li>
                        <li>Accessibility Services</li>
                        <li>Wireless Printing</li>
                        <li>Playgroop</li>
                    </ol>
                    <NavLink to='/Services'>Detail info</NavLink>
                </div>
                <div className='image'>
                    <img src={image2}/>
                </div>
            </div>
            <div className='Threeimage'>
                <img src={person3} width='541' height='369'/>
                <img src={person1}/>
                <img src={person2}/>
            </div>
        </main>
    )
}
export default Main