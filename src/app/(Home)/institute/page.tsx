import Footer from '@/app/Component/General/Footer'
import HeroGeneral from '@/app/Component/General/HeroGeneral'
import SectionTitle from '@/app/Component/General/SectionTitle'
import NavBar from '@/app/Component/HomePage/NavBar'
import Courses from '@/app/Component/InstitutePage/Courses'
import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function InstitutePage() {
  return (
    <section>
    <NavBar />

    < HeroGeneral >
    <section className= 'flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 mt-20' >
    <SectionTitle title='Courses' />
      <section className=' ' >
        <h1 className='text-white text-lg md:text-4xl font-bold text-center' > Our Institute </h1>
          < section className = 'flex flex-col items-center gap-4  justify-center w-full' >
            <p className='text-[#EAF5F4A6] text-sm md:text-lg font-light text-center mt-4 w-[50vw]' > Explore our comprehensive range of technology courses designed to enhance your skills and accelerate your career growth.</p>
              < section className = " flex flex-col md:flex-row gap-4 " >

                <section className='pt-10' >
                  <form className='flex justify-center items-center md:gap-4 w-full  ' >

                    <div className='px-4 py-2 w-[60vw] md:w-[40vw] rounded-full  gap-2 border border-[#86868673] bg-[#171615A6] outline-[#48B96B] flex items-center' >
                      <span><MdSearch className='text-[#EAF5F440]  ' /> </span>
                        < input type = 'text' placeholder = 'Search for courses...' className = 'w-[60vw] md:w-[40vw] placeholder:text-[#EAF5F440] placeholder:text-md placeholder:font-inter placeholder:font-[400]  ' />
                          </div>
                          </form>
                          </section>
                          </section>
                          </section>
                          </section>
                          </section>
                          </HeroGeneral>


                          < section className = "shadow-2xl bg-[#171615A6]" >
                            <Courses/>

                            < Footer />
                            </section>

                            </section>
  )
}

