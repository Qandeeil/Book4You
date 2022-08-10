import React from 'react';
import Main from './Components/Contacts/Main';
import Header from './Components/About/Header/Header';
import Footer from './Components/Home/Footer/Footer'

const Contacts = () => {
    return(
        <div>
            {<Header />}
            {<Main />}
            {<Footer />}
        </div>
    )
}
export default Contacts;