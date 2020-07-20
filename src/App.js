import React from 'react';
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Reservations from './components/Reservations';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Switch>
        <Route exact path='/' render={ ()=> 
          <div>
            <Hero/>
            <HomePage/> 
          </div>
        }/>
        <Route exact path='/reservations' render={ ()=> 
          <Reservations/>
        }/>
        <Route exact path='/aboutus' render={ ()=> 
          <AboutUs/>
        }/>
        <Route exact path='/contactus' render={ ()=> 
          <ContactUs/>
        }/>
      </Switch>
      
      <Footer/>
    </div>
  );
}

export default App;
