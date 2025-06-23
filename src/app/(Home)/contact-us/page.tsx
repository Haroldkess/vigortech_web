import ContactForm from '@/app/Component/ContactUsPage/Form'
import Footer from '@/app/Component/General/Footer'
import HeroGeneral from '@/app/Component/General/HeroGeneral'
import SectionTitle from '@/app/Component/General/SectionTitle'
import NavBar from '@/app/Component/HomePage/NavBar'
import React from 'react'

export default function ContactUs() {
    return (
        <section>
            <NavBar />
            < HeroGeneral >
                <section className='flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 mt-20' >
                    <SectionTitle title='Contact us' />
                    <section className=' ' >
                        <h1 className='text-white text-lg md:text-4xl font-bold text-center' > Contact Vigortech </h1>
                        < section className='flex flex-col items-center gap-4  justify-center w-full' >
                            <p className='text-[#EAF5F4A6] text-sm md:text-lg font-light text-center mt-4 w-[50vw]' > We&apos;re here to answer your questions and help you leverage technology for your business growth.</p>

                        </section>
                    </section>
                </section>
            </HeroGeneral>

            < section className="shadow-2xl bg-[#171615A6]" >
                <ContactForm/>
                < Footer />
            </section>


        </section>
    )
}
