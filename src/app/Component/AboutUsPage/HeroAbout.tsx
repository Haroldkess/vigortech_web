import Image from 'next/image'
import React from 'react'
import SectionTitle from '../General/SectionTitle'
import { MdOutlineArrowOutward } from 'react-icons/md'

export default function HeroAbout() {
  return (
    <header className=" lg:mb-[30vh] mb-40  font-inter pb-40 lg:pb-20  ">
      <section className="relative -z-10 top-[2em] md:top-[10em] h-[70vh] md:h-[50vh] w-full ">
        <section className="flex items-center px-4 md:px-10 lg:px-20 w-full  justify-evenly">

          {/* bg image 1 */}
          <section className='absolute top-10 left-[-30em]'>
            <Image src={'/bgEarth.png'} alt='sise image 1' width={1000} height={1000} className='' />
          </section>


          {/* hero content */}
          <section className='flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 mt-20'>

            <SectionTitle title='About us' />

            <section className=' '>
              <h1 className='text-white text-lg md:text-5xl font-bold text-center'>We’re Building Africa’s
                <br />
                tomorrow, today!</h1>

              <section className='relative left-[56%] md:left-[53%] top-[-1rem] '><Image src="/newsLine.svg" alt="Newsletter Icon" width={200} height={100} className='h-3 md:h-10' /></section>

              <section className='flex flex-col items-center gap-4  justify-center w-full'>
                <p className='text-[#EAF5F4A6] text-sm md:text-lg font-normal text-center mt-4'>Where purpose meets real impact.</p>
                <section className=" flex flex-col md:flex-row gap-4 ">
                  <button className="bg-[#48B96B] md:px-8 px-4 py-2 font-normal text-[#171615] rounded-md">
                    Explore our products
                  </button>
                  <button className="border border-[#48B96B] px-8  py-2 font-normal justify-center rounded-md flex items-center gap-2">
                    We're Hiring <MdOutlineArrowOutward />
                  </button>
                </section>
              </section>
            </section>

          </section>

          {/* bg image 2 */}
          <section className='absolute top-[-10em] right-[-30em]'>
            <Image src={'/bgEarth.png'} alt='sise image 1' width={1000} height={1000} className='' />
          </section>

        </section>
      </section>
    </header>
  )
}
