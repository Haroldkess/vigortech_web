import React from 'react'
import AboutCard from './AboutCard'


export default function AboutUs() {


    const contentCards = [
        {
            id: 1,
            icon: "/tech.svg",
            title: "Technology",
            description:
                "We don’t just build tech for the sake of it; everything we make is intentional. From platforms to tools, we focus on solving real problems",
            link: "#",
        },
        {
            id: 2,
            icon: "/education.svg",
            title: "Education",
            description:
                "We provide comprehensive training programs and resources to help individuals and organizations stay ahead in the tech landscape",
            link: "#",
        },
        {
            id: 3,
            icon: "/finance.svg",
            title: "Finance",
            description:
                "We’re making finance more fair and accessible. Simple tools built for everyday people so they can take control and build for the long run.",
            link: "#",
        },
    ];




    return (
        <section className="max-w-7xl mx-auto px-6 py-16 rounded-2xl">
            <div className="flex justify-center mb-6">
                <div className="flex items-center bg-[#2F5E3B] rounded-full px-4 py-1 gap-2 select-none">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B7F2B0]"></div>
                    <span className="text-white text-sm font-semibold leading-none">Focus</span>
                </div>
            </div>
            <h2 className="text-center text-white font-extrabold text-4xl mb-3 leading-tight">
                Our Focus Area
            </h2>
            <p className="text-center text-gray-400 max-w-xl mx-auto mb-12 text-sm leading-relaxed">
                We're committed to excellence in three key sectors that drive innovation and growth in today's digital
                economy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contentCards.map((card, index) => (
                    <AboutCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        link={card.link}
                    />
                ))}
            </div>
        </section>
    )
}
