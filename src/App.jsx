
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import gsap from 'gsap';
import { ScrollTrigger,ScrollSmoother } from "gsap/all";
import { useGSAP } from '@gsap/react';
import Messagesection from './sections/Messagesection';
import Flavoursection from './sections/Flavoursection';
import Nutritionsection from './sections/Nutritionsection';
import Benefitsection from './sections/Benefitsection';
import Testimonialsection from './sections/Testimonialsection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  useGSAP(()=>{
   ScrollSmoother.create({
    smooth:3,
    effects:true,
   });
  });
  return (
    <main>
      <Navbar/>
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <HeroSection/>
          <Messagesection/>
          <Flavoursection/>
          <Nutritionsection/>
          <Benefitsection/>
          <Testimonialsection/>
        </div>
      </div>
    </main>
  )
}

export default App;