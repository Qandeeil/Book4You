import React from 'react';
import Header from './Components/About/Header/Header';
import Main from './Components/E-Library/Main'
import Footer from './Components/Home/Footer/Footer'

const ELibrary = () => {
    return(
        <div>
            {<Header />}
            {<Main />}
            {<Footer />}
        </div>
    )
}
export default ELibrary;