import React from 'react'

const Footersection = () => {
  return (
  <section className='footer-section'>
    <img src="/images/footer-dip.png" alt="" className='w-full object-cover -translate-y-1  '/>

     <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        <video src="/videos/splash.mp4" autoPlay muted playsInline className='absolute top-0 object contain mix-blend-lighten'></video>

         <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
        </div>
          
          <div className="copyright-box">
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
        </div>
  </section>
  )
}

export default Footersection