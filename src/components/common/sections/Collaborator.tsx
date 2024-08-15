import React from 'react';

import collaborator from '../../../assets/images/collaborator_image.jpg';

const Collaborator: React.FC = () => {
  return (
    <div id='collaborations' className='bg-teal-900 bg-[url(/background.svg)] bg-contain'>
      <div className="align py-14 space-y-5">
        <div className='grid md:grid-cols-6 gap-4 text-white'>
          <div className='md:col-span-4 lg:col-span-5 text-xl md:text-2xl lg:text-4xl'>Looking to Share Your Knowledge with Our Community? <span className='font-bold'>Become a Collaborator</span></div>
          <button className='button h-fit md:text-nowrap w-fit md:self-center text-sm lg:text-base'>Get Started</button>
        </div>
        <img src={collaborator} alt="collaborator image" className='rounded-3xl' />
      </div>
    </div>
  )
}

export default Collaborator