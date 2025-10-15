import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import gsap from 'gsap';
import { ScrollTrigger,ScrollSmoother } from "gsap/all";
// import { useGSAP } from '@gsap/react';
import Messagesection from './sections/Messagesection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  return (
    <div className="h-500">
      <Navbar/>
      <HeroSection/>
      <Messagesection/>
    </div>
  )
}

export default App;