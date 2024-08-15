import React from 'react';
import Header from '../core/Header';

import hero from '../../assets/images/hero_image.jpg';

const Hero: React.FC = () => {
  return (
    <div id='aboutUs' className='bg-teal-900 bg-[url(/background.svg)] bg-contain pb-8'>
      <Header />
      <div className='align grid md:flex gap-6'>
        <div className='flex flex-col justify-center gap-4 text-white mr-16 md:mr-0 lg:mr-16'>
          <div className='text-3xl md:text-4xl lg:text-6xl lg:tracking-wide 2xl:tracking-normal font-semibold'>Empowering the Next Generation of Designers</div>
          <div className='tracking-wide text-xs md:text-base'>We are passionate about nurturing the next generation of designers. Our community is dedicated to providing junior designers in tech with the resources, mentorship, and opportunities they need to thrive.</div>
          <button className='button w-fit'>Become a Member</button>
        </div>
        <img src={hero} alt="hero image" className='rounded-full h-fit w-full' />
      </div>
    </div>
  )
}

export default Hero