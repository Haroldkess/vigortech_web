import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../General/SectionTitle";

const testimonials = [
  {
    quote:
      "After completing VigorTech’s full-stack coding bootcamp, I launched my first freelance gig in just two months. Their mentor support and project-based curriculum really deliver.",
    name: "Yoma Davids",
    role: "VigorTech institute trainee",
  },
  {
    quote:
      "VigorTech’s end-to-end integration platform slashed our deployment time in half. Their team turned a tangled legacy system into a lightning fast, cloud-native solution—no magic wand required!",
    name: "Chidi Okeke",
    role: "CTO, TransAfric Logistics",
  },
  {
    quote:
      "I thought UI/UX was just wireframes until VigorTech’s immersive design course showed me how to craft experiences that users actually love. My portfolio went from meh to WOW.",
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
    <section className="w-full py-16">
      <div className="text-center mb-12 px-4">
        <SectionTitle title="Testimonials" />
        <h2 className="text-white text-center text-3xl md:text-[57px]  leading-[64px] md:tracking-[-0.142px] md:text-6xl font-semibold lg:leading-[64px] lg:tracking-[-0.142px] pt-10">
          What they say about us
        </h2>
        <p className="mt-3 text-[#EAF5F4A6] max-w-xl mx-auto text-base lg:font-normal lg:leading-normal lg:tracking-tight">
          Discover how we&apos;ve helped businesses across different industries
          achieve their goals.
        </p>
      </div>

      <Marquee className="flex items-center w-full ">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="border border-[#86868640] rounded-[10.75px]  w-[306.39px] mx-4 relative
        md:rounded-[14px] md:w-[433px] p-4  md:px-[20px] md:border
        lg:rounded-[14px] lg:w-[433px] lg:h-[342.48px] lg:max-h-[342.48px] lg:border
        shrink-0"
            style={{
              background:
                "linear-gradient(rgba(23, 22, 21, 0.8), rgba(51, 51, 51, 0.2))",
            }}
          >
            <Image
              src="/comma.svg"
              alt={testimonial.name}
              className="md:w-14 md:h-14 w-8 h-8 rounded-md mb-4 relative bottom-[-2.5em]"
              width={10}
              height={10}
            />

            <p className="text-[#EAF5F4A6]  font-normal text-[16px] text-left mb-6 leading-[24px]">
              {testimonial.quote}
            </p>

        

            <section className="absolute bottom-4 w-full ">
              <hr className={`border-[#868686A6] my-4 w-[90%]`} />
              <span className="bg-gradient-to-r from-[#48B96B] via-[#CCDC35] to-[#6CC788] bg-clip-text text-transparent font-medium text-[14px] leading-[20px] ">
                {testimonial.name}
              </span>

              <p className="text-[#EAF5F4A6] text-[14px] leading-[24px] font-normal">{testimonial.role}</p>
            </section>
          </article>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
