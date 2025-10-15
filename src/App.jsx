import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import gsap from 'gsap';
import { ScrollTrigger,ScrollSmoother } from "gsap/all";
// import { useGSAP } from '@gsap/react';
import Messagesection from './sections/Messagesection';
import Flavoursection from './sections/Flavoursection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Messagesection/>
      <Flavoursection/>
    </div>
  )
}

export default App;