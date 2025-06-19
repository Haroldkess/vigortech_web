import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../General/SectionTitle";


const testimonials = [
    {
        quote:
            "After completing VigorTech’s full-stack coding bootcamp, I launched my first freelance gig in just two months. Their mentor support and project-based curriculum really deliver.",
        name: "Chidoma Davids",
        role: "VigorTech institute trainee",
    },
    {
        quote:
            "VigorTech’s end-to-end integration platform slashed our deployment time in half. Their team turned a tangled legacy system into a lightning-fast, cloud-native solution—no magic wand required!",
        name: "Chidi Okeke",
        role: "CTO, TransAfric Logistics",
    },
    {
        quote:
            "I thought UI/UX was just wireframes—until VigorTech’s immersive design course showed me how to craft experiences that users actually love. My portfolio went from meh to WOW.",
        name: "Emmanuel Nwosu",
        role: "UX Designer, BrightWave Studios",
    },
    {
        quote:
            "VigorTech’s mentorship and hands-on projects helped me land a job at a top tech company within three months. The community and support are unmatched.",
        name: "Adaobi Eze",
        role: "Software Engineer, TechNova",
    },
];




const Testimonials = () => {
    return (
        <section className=" px-6 py-16">
            <div className="text-center mb-12">
              <SectionTitle title="Testimonials" />
                <h2 className="mt-6 md:text-4xl text-2xl font-bold leading-tight">What they say about us</h2>
                <p className="mt-3 text-gray-400 max-w-xl mx-auto">
                    Discover how we&apos;ve helped businesses across different industries achieve their goals.
                </p>
            </div>


            <Marquee
                className="flex items-center justify-center space-x-6  w-full  " >
                <section>
                    <div className=" grid grid-cols-4 gap-4 px-6  " >

                        {testimonials.map((testimonial, index) => (

                            <article
                                key={index}
                                className="w-[80vw] md:w-[50vw] lg:w-[35vw] rounded-lg border border-[#2A2A2A] p-4 md:p-10 flex-shrink-0 mx-2"
                                style={{ background: 'linear-gradient(rgba(23, 22, 21, 80), rgba(51, 51, 51, 0.20))', }}
                            >
                                <Image src={'/comma.svg'} alt={testimonial.name} className="md:w-14 md:h-14 w-8 h-8 rounded-md mb-4 relative bottom-[-2.5em]" width={10} height={10} />

                                <p className="text-[#EAF5F4A6] text-[16px] md:text-[18px] text-left  mb-6 md:leading-relaxed">{testimonial.quote}</p>
                                <hr className="border-gray-700 mb-4" />
                               
                                <span className="bg-gradient-to-r from-[#48B96B] via-[#CCDC35] to-[#6CC788] bg-clip-text text-transparent font-bold">
                                    {testimonial.name}
                                </span>

                                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                            </article>
                        ))}
                    </div></section>
            </Marquee>

        </section>

    );
};

export default Testimonials;
