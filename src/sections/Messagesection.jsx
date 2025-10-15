import React from 'react'

const Messagesection = () => {
  return (
      <section className='message-content'>
       <div className='container mx-auto flex-center py-28 relative'>
        <div className='w-full h-full'>
          <div className='msg-wrapper'>
            <h1 className='first-message'>STIR UP YOUR FEARLESS PAST AND</h1>
            <div className='msg-text-scroll'>
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