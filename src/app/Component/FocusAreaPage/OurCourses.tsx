import React from 'react'
import SectionTitle from '../General/SectionTitle'
import Image from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md'
import AboutCard from '../HomePage/AboutCard';

export default function OurCourses() {

    const services = [
        {
            id: 1,
            icon: "/icons/library_books.svg",
            title: "Accessible Learning",
            description:
                "We provide digital learning platforms and resources that are easy to use, affordable, and tailored for individuals and communities that are often overlooked"
        },
        {
            id: 2,
            icon: "/icons/approval_delegation.svg",
            title: "Hands-on Training",
            description:
                "Our programs go beyond theory. Learners gain practical, real-world experience by creating and contributing to actual projects. This helps them build confidence.",
        },
        {
            id: 3,
            icon: "/icons/work.svg",
            title: "Internship Opportunities",
            description:
                "We offer structured internships that connect learners with real-world work environments, gaining experience, and also build a professional portfolio that boosts career opportunities.",
        },
        {
            id: 4,
            icon: "/icons/diversity_3.svg",
            title: "Community-Based Learning",
            description:
                "Education is better together. That’s why we foster learning communities where people can share knowledge, ask questions, collaborate, and grow as a group.",
        },

    ];

    return (
        <section>
            <section className='grid grid-cols-1 md:grid-cols-2  justify-between w-full md:py-20 px-6 md:px-20 relative gap-10'>
                <section className='pt-10'>
                    <section className='flex flex-col justify-start items-start'>
                        <SectionTitle title="Education" />

                        <h2 className="text-start text-white pt-4 font-extrabold text-2xl md:text-4xl mb-3 leading-tight">
                            Empowering talent through comprehensive education
                        </h2>

                    </section>
                    <section className='text-[#EAF5F4A6] text-md  font-light text-start flex flex-col gap-y-4  mt-4 max-w-lg'>
                        <p>
                            At Vigor Tech, we believe that access to knowledge is the foundation for independence, innovation, and long-term success. Education shouldn&apos;t be a privilege—it should be a pathway that&apos;s open to everyone.
                        </p>
                        <button className="border border-[#48B96B] text-white px-4 w-[10em]  py-2 font-normal justify-center rounded-md flex items-center gap-2">
                            View courses <MdOutlineArrowOutward />
                        </button>
                    </section>

                </section>

                <section>
                    <Image src="/talent.png" alt="Our Story Image" width={500} height={500} className="w-full h-auto object-cover mt-10" />
                </section>



            </section>


            <section className=' md:px-20 px-4'>

                <section className='relative'>
                    <h2 className="text-center text-white font-semibold text-2xl md:text-4xl mb-3 pb-20 leading-tight">
                    How we make this happen
                    </h2>

                    <section className='absolute left-[57%] top-7 '><Image src="/newsLine.svg" alt="Newsletter Icon" width={200} height={100} className='h-4  ' /></section>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
                    {services.map((card, index) => (
                        <AboutCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}

                        />
                    ))}
                </div>
            </section>

        </section >
    )
}
