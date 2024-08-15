import React from 'react';
import community from '../../../assets/images/community_image.jpg';
import { offers } from '../../../data';

const Community: React.FC = () => {
  return (
    <>
      <div id='community' className='align grid gap-7 md:gap-10'>
        <div className='grid md:flex items-center gap-4 md:gap-2'>
          <div className='text-2xl md:text-4xl lg:text-5xl text-teal-900 font-semibold mr-12 md:mr-0 md:leading-tight tracking-tight md:tracking-normal'>We aim to create a vibrant community of Junior Designers</div>
          <div className='text-xs md:text-base lg:text-xl tracking-tighter md:leading-5 text-justify'>Through free learning resources, trainings, and a supportive network, we encourage creativity, experimentation, and the exploration of new ideas.</div>
        </div>
        <img src={community} alt="community image" className='rounded-3xl' />
        <div className='text-2xl md:text-4xl lg:text-5xl text-teal-900 font-semibold w-3/4 md:w-1/2 md:leading-tight tracking-tight md:tracking-normal'>What Our Community Offers</div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5'>
          {offers.map((offer, index) => {
            const { id, text, subText } = offer;
            return (
              <div key={id} className='space-y-5'>
                <div className='bg-teal-900 rounded-md w-fit px-4 py-2 text-white font-medium'>{index + 1}</div>
                <div className='md:tracking-normal'>
                  <div className='font-semibold text-xl tracking-tight'>{text}</div>
                  <div className='text-sm pt-1 tracking-tighter md:mr-5 lg:mr-0'>{subText}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='bg-teal-900 h-64 md:h-80 pb-8 flex items-center'>
        <div className='md:align w-10/12 mx-auto bg-gray-400 rounded-3xl' style={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }}>
          <div className='override-bg translate-y-3 md:translate-y-5 scale-x-100 md:scale-x-110 text-center rounded-2xl md:rounded-3xl font-semibold text-teal-900 px-5 md:px-32 lg:px-64 2xl:px-96 py-8 md:py-12 tracking-tight md:tracking-normal'>
            Join our community today and start your journey towards becoming a successful designer!
          </div>
        </div>
      </div>
    </>
  )
}

export default Community