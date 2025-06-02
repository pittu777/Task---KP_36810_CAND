import React from 'react'

const AboutHero = () => {
  return (
    <section className='bg-white w-full px-0 md:px-0 py-15'>
        <div className='max-w-4xl mx-auto text-center'>
            <p className='text-[rgba(127,86,217,1)] font-semibold mb-2'>About us</p>
            <h1 className='text-[34px] leading-[44px] sm:text-gray-900
            md:text-6xl font-semibold text-gray-900 mb-6 xl:text-[48px] 
            xl:tracking-[-0.02em]'>About the Company <br className='hidden md:block'/></h1>
            <p className='
            text-[34px] font-[400] leading-[28px]
            xl:leading-[30px] text-gray-600 mb-8'>
                Learn more about the company and the team behind it.
            </p>
        </div>
    </section>
  )
}

export default AboutHero;