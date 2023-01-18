


import {BrowserRouter,Route, Switch } from 'react-router-dom';
import { DiVim } from 'react-icons/di';
import Navic from './components/Nav/Navic';
import { Provider } from 'react-redux'
import store from './redux/store'



import React from 'react';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Tech from './components/Tech/Tech';
import Projects from './components/Projects/Projects';
import Price from './components/Prices/Price';
import Contact from './components/Contact/Contact';






export default function App() {


  return <div>
      <Provider store={store}>
        <Navic />
        <Home />
        <Services />
        <Tech />
        <Projects />
        <Price />
        <Contact />

      </Provider>


  </div>;
}
