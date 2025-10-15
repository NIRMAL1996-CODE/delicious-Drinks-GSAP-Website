import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);

const Messagesection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    })
    
      gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

      const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 0.6,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });
    
  return (
      <section className='message-content'>
       <div className='container mx-auto flex-center py-28 relative'>
        <div className='w-full h-full'>
          <div className='msg-wrapper'>
            <h1 className='first-message'>STIR UP YOUR FEARLESS PAST AND</h1>
            <div style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",}}
             className='msg-text-scroll'>
              <div className='bg-light-brown md:pb-5 pb-3 px-5'>
                <h2 className='text-red-brown'>Fuel Up</h2>
              </div>
            </div>

            <h1 className='second-message'>Your future with every gulp of Perfect Protien</h1>
          </div>
          <div className='flex-center md:mt-20 mt-10'>
            <div className='max-w-md px-10 flex-center overflow-hidden'>
              <p>
                 Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you are one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
       </div>
      </section>
  )
}

export default Messagesection