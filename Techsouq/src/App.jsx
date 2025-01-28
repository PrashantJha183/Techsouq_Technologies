import { useState } from 'react'
import './App.css'
import Navbar_Main from "./components/Navbar_Main.jsx";
import Home from "../src/pages/Home.jsx";
import AboutUS from "../src/pages/AboutUS.jsx";
import Services from "../src/pages/Services.jsx";
import Footer from '../src/components/Footer.jsx';
import Questions1 from './pages/Questions1.jsx';
import Questions2 from './pages/Questions2.jsx';
import Phase from './pages/Phase.jsx';
import ContactUS from './pages/ContactUs.jsx';
import Last_page from './pages/Last_page.jsx';
import Others from './pages/Others.jsx';

function App() {
  

  return (
    <>
      <Navbar_Main/>
      <Home/>
      <AboutUS/>
      <Services/>
      <Questions1/>
      <Questions2/>
      <Others/>
      <Phase/>
      <Last_page/>
      <Footer/>
      <ContactUS/>
      <Others/>
    </>
  )
}

export default App
