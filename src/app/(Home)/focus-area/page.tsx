import TechSection from '@/app/Component/FocusAreaPage/TechSection'
import HeroGeneral from '@/app/Component/General/HeroGeneral'
import SectionTitle from '@/app/Component/General/SectionTitle'
import NavBar from '@/app/Component/HomePage/NavBar'

import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

export default function FocusArea() {
    return (
        <section>
            <NavBar />
            <HeroGeneral>
                <section className='flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 mt-20'>
                    <SectionTitle title='Our focus' />

                    <section className=' '>
                        <h1 className='text-white text-lg md:text-5xl font-bold text-center'>Our Focus Area</h1>


                        <section className='flex flex-col items-center gap-4  justify-center w-full'>
                            <p className='text-[#EAF5F4A6] text-sm md:text-md font-light text-center mt-4 w-[55vw]'>Our focus is to co-create accessible digital solutions with local partners across Africa, empowering businesses and communities to thrive in the digital economy</p>
                            <section className=" flex flex-col md:flex-row gap-4 ">

                                <button className="border border-[#48B96B] px-8  py-2 font-normal justify-center rounded-md flex items-center gap-2">
                                    Get in touch <MdOutlineArrowOutward />
                                </button>
                            </section>
                        </section>
                    </section>
                </section>
            </HeroGeneral>
            <section className="shadow-2xl bg-[#171615A6]">
            <TechSection/>
            </section>
        </section>
    )
}
