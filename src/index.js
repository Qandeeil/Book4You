import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Home';
import About from './About'
import Services from './Services'
import More from './Components/Pages/More';
import Collections from './Collections'
import ELibrary from './E-Library';
import Contacts from './Contacts';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}/>
          <Route path='/Services' element={<Services />}/>
          <Route path='/More' element={<More />}/>
          <Route path='/Collections' element={<Collections />}/>
          <Route path='/E-Library' element={<ELibrary />}/>
          <Route path='/Contacts' element={<Contacts />}/>
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

