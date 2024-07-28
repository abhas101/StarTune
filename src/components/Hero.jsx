import React from 'react'
import { BiMusic } from "react-icons/bi";

const Hero = () => {
  return (
    <section className='Wrapper'>
        <div className='bg-primary items-center flex justify-center h-80'>
            <h2 className='text-white text-2xl mr-20'>Take <br></br> your<br></br> <span className='text-4xl text-secondary block'>MUSIC <BiMusic /></span> <br></br><span className='text-5xl'>To</span> the <span className='text-5xl text-ligtBlue'>STARS</span>... </h2>
        </div>
    </section>
  )
}

export default Hero
