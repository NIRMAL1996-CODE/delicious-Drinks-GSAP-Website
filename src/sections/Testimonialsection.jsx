
import { useRef } from 'react'
import { cards } from '../constant'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";


const Testimonialsection = () => {
  
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
   
    const tl=gsap.timeline({
      scrollTrigger:{
       tigger:".testimonials-section",
       start: "top bottom",
       end: "200% top",
       scrub: true,
      }
    });
      tl.to(".testimonials-section .first-title", {xPercent: 70,})
      .to(".testimonials-section .sec-title",{xPercent: 25,},"<")
      .to(".testimonials-section .third-title", {xPercent: -50,},"<");

       const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });
   
  const vdref= useRef([]);
  const handlePlay =(index)=>{
   const video= vdref.current[index];
   video.play();
  }
  const handlePause =(index)=>{
   const video= vdref.current[index];
   video.pause();
  }

  return (
    <section className='testimonials-section'>
      <div className='absolute size-full flex flex-col items-center'>
        <h1 className='text-black first-title'>Whats</h1>
        <h1 className='text-light-brown sec-title'>Everyone</h1>
        <h1 className='text-black third-title'>Talking</h1>
      </div>

      <div className='pin-box'>
        {cards.map((card,index)=>(
          <div key={index} className={`vd-card ${card.translation} ${card.rotation}`}
          onMouseEnter={()=>handlePlay(index)}
          onMouseLeave={()=>handlePause(index)}>

            <video src={card.src} ref={(el)=>(vdref.current[index]=el)} playsInline muted loop className='size-full object-cover'/>
          </div>
        )) }
      </div>
    </section>
  )
}

export default Testimonialsection