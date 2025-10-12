import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import gsap from 'gsap';
import { ScrollTrigger,ScrollSmoother } from "gsap/all";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
    useGSAP(() => {
      ScrollSmoother.create({
      smooth: 3,
      effects: true,});
  });
  return (
    <div>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default App;