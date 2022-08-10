import React from 'react';
import Header from './Components/About/Header/Header';
import Main from './Components/Collections/Main'
import Newsletter from './Components/Home/Main/Newsletter/Newsletter'
import Footer from './Components/Home/Footer/Footer'

const Collections = () => {
    return(
        <div>
            {<Header />}
            {<Main />}
            {<Newsletter />}
            {<Footer />}
        </div>
    )
}
export default Collections;