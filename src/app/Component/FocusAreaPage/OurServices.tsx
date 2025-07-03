import React from 'react'

import AboutCard from '../HomePage/AboutCard';
import Image from 'next/image';

export default function OurServices() {

    const services = [
        {
            id: 1,
            icon: "/icons/flutter.svg",
            title: "Cross-platform development",
            description:
                "We create software applications that can run on multiple different operating systems (like iOS, Android, Windows, macOS) using a single codebase.",
        },
        {
            id: 2,
            icon: "/icons/code.svg",
            title: "Software Development",
            description:
                "Software solutions tailored to your unique business requirements. Full-stack web applications, Mobile app & API dev, Legacy system modernization.",
        },
        {
            id: 3,
            icon: "/icons/automation.svg",
            title: "AI Integration",
            description:
                "We also integrate ethical, human-centered AI into our platforms to enhance usability, personalization, and efficiency.",
        },

    ];

    return (
        <section className="   py-16 rounded-t-3xl  bg-[rgba(23, 22, 21, 0.65)] backdrop-blur-2xl  ">
            <section className=' md:px-6 px-4'>

                <section className='relative'>
                    <h2 className="text-center text-white font-semibold text-3xl md:text-4xl mb-3 pb-20 leading-tight">
                        What we do
                    </h2>

                    <section className='absolute left-[35%] md:left-[46%] top-7 '><Image src="/newsLine.svg" alt="Newsletter Icon" width={200} height={100} className=' h-4  ' /></section>

                    
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
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
        </section>
    )
}
