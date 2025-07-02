import Image from 'next/image'
import React from 'react'
import SectionTitle from '../General/SectionTitle'

export default function TechSection() {
    return (
        <section id='tech'>
            <section className='grid grid-cols-1 md:grid-cols-2  justify-between w-full md:py-20 px-6 md:px-20 relative gap-10'>
                <section className='md:pt-10'>
                    <section className='flex flex-col justify-start items-start'>
                        <SectionTitle title="Technology" />

                        <h2 className="md:text-start text-white pt-4 font-extrabold text-2xl w-1/2 md:w-full md:text-4xl mb-3 leading-tight">
                            Cutting-edge Technology
                        </h2>

                    </section>
                    <section className='text-[#EAF5F4A6] text-md  font-light text-start flex flex-col gap-y-4  mt-4 max-w-lg'>
                        <p>At Vigor Tech, we don&apos;t build for the sake of building. Every tool, system, and platform we develop starts with a clear question: What real problem are we solving? We believe technology should be intentional, inclusive, and impactful.</p>

                        <p>From the ground up, our solutions are designed to create access where there was none, streamline systems that were once broken, and empower users who&apos;ve often been overlooked. We&apos;re not in the business of trends—we&apos;re in the business of transformation.</p>
                    </section>
                </section>

                <section>
                    <Image src="/Tech_opportunities.png" alt="Our Story Image" width={500} height={500} className="w-full h-auto object-cover mt-10" />
                </section>



            </section>

        </section >
    )
}
