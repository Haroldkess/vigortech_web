"use client"
import React from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import SectionTitle from "../General/SectionTitle";

const OurStat = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
      <section className=" w-full  px-7 py-16 flex flex-col  items-center md:flex-row md:justify-between md:items-center gap-12 md:gap-0">
        {/* Left Side: Text Content */}
        <div className="md:max-w-lg space-y-4">
          <SectionTitle title="Our track record" />
          <h2 className="md:text-[57px] text-3xl font-semibold leading-[64px]">
            Our stats
          </h2>
          <p className="text-[#EAF5F4A6] max-w-md text-[16px] leading-[24px]">
            We don’t just talk about change we build it. These numbers show how
            far we’ve come, and where we’re headed.
          </p>
        </div>

        {/* Right Side: Stats */}
        <div
          className="grid grid-cols-2  md:gap-x-20 justify-center items-center gap-y-8 md:max-w-md gap-x-20"
          ref={ref}
        >
          <div className="">
            <h3 className="text-2xl md:text-[45px] leading-[52px] font-semibold border-b border-gray-600 pb-1 md:w-[4vw] w-[12vw]">
              {inView ? <CountUp start={0} end={5} duration={4} /> : "0"}+
            </h3>
            <p className="text-[#EAF5F4A6] mt-1 text-[16px] leading-[24px]">
              Projects
            </p>
          </div>
          <div className="">
            <h3 className="text-2xl md:text-[45px] leading-[52px] font-semibold border-b border-gray-600 pb-1 md:w-[8.5vw]">
              {inView ? <CountUp start={0} end={200} duration={4} /> : "0"}+
            </h3>
            <p className="text-[#EAF5F4A6] mt-1  text-[16px] leading-[24px]">
              Learners trained
            </p>
          </div>
          <div className="md:w-[9.5vw] w-[25vw]">
            <h3 className="text-2xl md:text-[45px] leading-[52px] font-semibold border-b border-gray-600 pb-1 md:w-[9.5vw] w-[25vw]">
              {inView ? (
                <CountUp start={0} end={99.9} duration={4} decimals={1} />
              ) : (
                "0"
              )}
              %
            </h3>
            <p className="text-[#EAF5F4A6] mt-1 text-[16px] leading-[24px]">
              Satisfaction
            </p>
          </div>
          <div className="md:w-[6vw] w-[16vw]">
            <h3 className="text-2xl md:text-[45px] leading-[52px] font-semibold border-b border-gray-600 pb-1">
              10+
            </h3>
            <p className="text-[#EAF5F4A6] mt-1 text-[16px] leading-[24px]">
              Integrations
            </p>
          </div>
        </div>
      </section>
    );
};

export default OurStat;
