import Image from 'next/image'
import React from 'react'

export default function OurStory() {
    return (
        <section className='mb-40 md:mb-0'>
            <section className='flex flex-col md:flex-row  justify-between w-full py-20 px-10 md:px-20    gap-10'>
                <section className='pt-10'>
                    <h2 className='border-s-2 px-4 border-[#48B96B] text-3xl'>Our Story</h2>
                    <section className='text-[#EAF5F4A6] text-md  font-light text-start flex flex-col gap-y-10  mt-4 max-w-xl'>
                        <p>After a generation defined by ingenuity and relentless perseverance in the structural and building sector, we were reborn with a promise on the Rock. Today, we are committed to delivering high-level applications, innovative ideas, and transformative ventures that empower, drive, and enhance the lives of Africans and people around the world.</p>

                        <p>&quot;VigorTech is more than a tech company; we&apos;re a catalyst for change. Across investments, education, agriculture, and clean water, we turn big challenges into bold opportunities. Because the future isn’t waiting — and neither are we.&quot;</p>
                    </section>

                    <section className='relative'>
                        <section className='md:absolute md:-bottom-[10em] left-10'>
                            <Image src={'/Earth.png'} alt='sise image 1' width={670} height={670} className='' />
                        </section>
                        <section className='bottom-[-4em] left-[-6em] md:bottom-[-15em] md:left-[-20em] md:absolute hidden md:flex   -z-[4em] blur-2xl'>
                            <Image src={'/bgEarth.png'} alt='sise image 1' width={700} height={700} className='' />
                        </section>
                        <section className="absolute top-24 left-[50%] md:top-5 md:left-[52%] z-50 ">
                            <div className='glow-bicon w-4 h-4 rounded-full'> </div>
                        </section>
                    </section>
                </section>

                <section >
                    <Image src="/elderly_man.png" alt="Our Story Image" width={350} height={350} className="w-full h-auto object-cover mt-10" />
                </section>

           

            </section>

     

        </section>
    )
}
