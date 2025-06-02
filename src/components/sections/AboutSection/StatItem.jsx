import React from 'react'
import image from "./../../../assets/images/Image.svg";
import { stats } from './Stats';
const StatItem = () => {
  return (
    <section className="bg-[rgba(249,250,251,1)] w-full px-4 py-[4rem] md:px-8 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse pl-[0] md:flex-row items-center gap-10 md:gap-16">
        
        
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Office workspace"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-[80%]"
          />
        </div>

        
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start mb-6">
            <p className="text-[rgba(127,86,217,1)] font-semibold text-sm mb-2">
              We’ve helped hundreds of companies
            </p>
            <p className="text-[36px] sm:text-[30px] text-left md:text-[36px] font-semibold text-gray-900 leading-[38px] xl:text-left">
              We’re only just getting started on our journey
            </p>
            <p className="text-[18px] text-left text-gray-600 leading-[28px] mt-4 md:hidden">
              Everything you need to build modern UI and great products. We’ve done all the heavy lifting so you don’t have to — the perfect starting point for any project.
            </p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-[48px] md:text-[50px] md:text-left lg:text-[60px] font-bold text-[rgba(127,86,217,1)]">{item.value}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatItem