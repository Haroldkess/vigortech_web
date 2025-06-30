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
                <h2 className="md:text-4xl text-2xl font-semibold leading-tight">Our stats</h2>
                <p className="text-[#EAF5F4A6] max-w-md text-sm leading-relaxed">
                    We don’t just talk about change—we build it. These numbers show how far we’ve come, and where we’re headed.
                </p>
            </div>

            {/* Right Side: Stats */}
            <div className="grid grid-cols-2  md:gap-x-20 justify-center items-center gap-y-8 md:max-w-md gap-x-20" ref={ref}>
                <div className="md:w-[4vw] w-[12vw]">
                    <h3 className="text-4xl font-semiborder border-b border-gray-600 pb-1">
                        {inView ? <CountUp start={0} end={5} duration={4} /> : '0'}+
                    </h3>
                    <p className="text-[#EAF5F4A6] mt-1 text-sm">Projects</p>
                </div>
                <div className="md:w-[8vw] w-[26vw]">
                    <h3 className="text-4xl font-semiborder border-b border-gray-600 pb-1">
                        {inView ? <CountUp start={0} end={200} duration={4} /> : '0'}+
                    </h3>
                    <p className="text-[#EAF5F4A6] mt-1  md:text-[12px] text-sm">Learners trained</p>
                </div>
                <div className="md:w-[7.5vw] w-[25vw]">
                    <h3 className="text-4xl font-semiborder border-b border-gray-600 pb-1">
                        {inView ? <CountUp start={0} end={99.9} duration={4} decimals={1} /> : '0'}%
                    </h3>
                    <p className="text-[#EAF5F4A6] mt-1 text-sm">Satisfaction</p>
                </div>
                <div className="md:w-[5.4vw] w-[16vw]">
                    <h3 className="text-4xl font-semiborder border-b border-gray-600 pb-1">10+</h3>
                    <p className="text-[#EAF5F4A6] mt-1 text-sm">Integrations</p>
                </div>
            </div>
        </section>
    );
};

export default OurStat;
