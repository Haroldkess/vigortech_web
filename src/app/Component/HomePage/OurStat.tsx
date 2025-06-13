"use client"
import React from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const OurStat = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.3,    
      });

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:justify-between md:items-center gap-12 md:gap-0">
            {/* Left Side: Text Content */}
            <div className="md:max-w-lg space-y-4">
                <span className="inline-flex items-center gap-2 text-xs font-normal bg-[#1F4F3D] rounded-full py-1 px-3 text-[#A7D7A9] w-max">
                    <span className="w-3 h-3 rounded-full bg-[#A7D7A9] block"></span>
                    Our track record
                </span>
                <h2 className="text-4xl font-bold leading-tight">Our stats</h2>
                <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                    We don’t just talk about change—we build it. These numbers show how far we’ve come, and where we’re headed.
                </p>
            </div>

            {/* Right Side: Stats */}
            <div className="grid grid-cols-2 gap-x-20 gap-y-8 max-w-md w-full" ref={ref}>
                <div>
                    <h3 className="text-3xl font-extrabold border-b border-gray-600 pb-1">
                        {inView ? <CountUp start={0} end={5} duration={4} /> : '0'}+
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm">Projects</p>
                </div>
                <div>
                    <h3 className="text-3xl font-extrabold border-b border-gray-600 pb-1">
                        {inView ? <CountUp start={0} end={200} duration={4} /> : '0'}+
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm">Learners trained</p>
                </div>
                <div>
                    <h3 className="text-3xl font-extrabold border-b border-gray-600 pb-1">
                        {inView ? <CountUp start={0} end={99.9} duration={4} /> : '0'}%
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm">Satisfaction</p>
                </div>
                <div>
                    <h3 className="text-3xl font-extrabold border-b border-gray-600 pb-1">10+</h3>
                    <p className="text-gray-400 mt-1 text-sm">Integrations</p>
                </div>
            </div>
        </section>
    );
};

export default OurStat;
