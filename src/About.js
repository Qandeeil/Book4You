import React from 'react';
import Header from './Components/About/Header/Header'
import Main from './Components/About/Main/Main';
import Footer from './Components/Home/Footer/Footer'
import NewMaterials from './Components/Home/Main/NewMaterials/NewMaterials';

const About = () => {
    return(
        <div>
            {<Header />}
            {<Main />}
            {<NewMaterials />}
            {<Footer />}
        </div>
    )
}
export default About;