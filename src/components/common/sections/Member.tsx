import React from 'react'

const Member: React.FC = () => {
  return (
    <div id='getStarted' className='align md:py-10'>
      <div className='bg-white py-10 md:py-14 space-y-5 rounded-3xl'>
        <div className='grid gap-4 text-white text-center lg:mx-40 2xl:mx-80'>
          <div className='text-lg md:text-2xl lg:text-4xl tracking-tighter md:tracking-normal mx-10 md:mx-44 lg:mx-10 text-teal-900 font-semibold'>Are you ready to make an impact with your designs?</div>
          <button className='button h-fit w-fit text-sm md:text-base place-self-center'>Become a Member</button>
        </div>
      </div>
    </div>
  )
}

export default Member