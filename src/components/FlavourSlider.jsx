import { useGSAP } from '@gsap/react';
import {flavorlists} from '../constant';
import gsap from "gsap";
import { useRef } from 'react';

const FlavourSlider = () => {

const sliderRef=useRef()

  useGSAP(()=>{
   const scrollAmount= sliderRef.current.scrollWidth- window.innerWidth;

   const tl= gsap.timeline({
    scrollTrigger:{
      trigger:".flavor-section",
      start:"2% top",
      end:`+=${scrollAmount + 1000}px`,
      scrub: true,
      pin:true,
    },
   });
   tl.to(".flavor-section",{
    x:`-${scrollAmount + 1000}px`,
    ease:"power1.inOut",
   });
  })
  return (
    <div ref={sliderRef} className='slider-wrapper'>
      <div className="flavors">
       {
        flavorlists.map((flavor)=>(
       <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>

          <img src={`/images/${flavor.color}-bg.svg`} alt="img-bg" className="absolute bottom-0"/>

          <img src={`/images/${flavor.color}-drink.webp`} alt="drinkimg" className="drinks"/>

          <img src={`/images/${flavor.color}-elements.webp`} alt="element" className="elements"/>
          <h1>{flavor.name}</h1>
       </div>
    ))}
  </div>
  </div>
)}

export default FlavourSlider