import React from 'react';

import talent from '../../../assets/images/talent-pool_image.jpg';

const TalentPool: React.FC = () => {
  return (
    <div id='opportunities' className='align grid md:flex md:gap-2 lg:gap-6'>
      <img src={talent} alt="talent image" className='order-last md:order-none rounded-full md:mr-6 lg:mr-16 ' />
      <div className='flex flex-col justify-center gap-4'>
        <div className='text-2xl md:text-4xl lg:text-5xl text-teal-900 font-semibold mr-3 md:mr-0 md:leading-tight tracking-tight md:tracking-normal'>Looking for Internship Opportunities? <span className='font-bold'>Join Our Talent Poll</span></div>
        <div className='text-xs md:text-base lg:text-xl mr-16 tracking-tight'>Share your work, get noticed, and stay ahead with Pixel Bloom. Your next big opportunity could be just around the corner!</div>
        <button className='button w-fit'>Join The Talent Pool</button>
      </div>
    </div>
  )
}

export default TalentPool