import React from "react";
import Marquee from "react-fast-marquee";

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
                <span className="inline-flex items-center gap-2 border border-green-600 rounded-full px-4 py-1 text-green-400 text-sm font-semibold">
                    <span className="w-3 h-3 rounded-full bg-green-400 block"></span>
                    Testimonials
                </span>
                <h2 className="mt-6 text-4xl font-bold leading-tight">What they say about us</h2>
                <p className="mt-3 text-gray-400 max-w-xl mx-auto">
                    Discover how we've helped businesses across different industries achieve their goals.
                </p>
            </div>


            <Marquee
                className="flex items-center justify-center space-x-6  w-full  " >
                <section>       
                      <div className=" grid grid-cols-4 gap-4 px-6 " >

                    {testimonials.map((testimonial, index) => (

                        <article
                            key={index}
                            className="w-[30vw] bg-[#1a1919] rounded-lg border border-[#2A2A2A] p-10 flex-shrink-0 mx-2"
                            style={{ background: 'linear-gradient(rgba(23, 22, 21, 0.90), rgba(51, 51, 51, 0.40))', }}
                        >
                            <i className="fas fa-quote-left text-gray-600 text-4xl mb-4"></i>
                            <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
                            <hr className="border-gray-700 mb-4" />
                            <p className="text-green-500 font-semibold">{testimonial.name}</p>
                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </article>
                    ))}
                </div></section>
            </Marquee>

        </section>

    );
};

export default Testimonials;
