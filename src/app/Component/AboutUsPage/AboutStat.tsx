"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// import SectionTitle from "../General/SectionTitle";

const AboutStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="md:max-w-7xl w-full px-4 md:mx-auto  md:px-6  flex flex-col  items-center md:flex-row md:justify-center md:items-center gap-12 md:gap-0">
      <div
        className="grid md:grid-cols-4 grid-cols-2  md:gap-x-40 justify-center items-center gap-y-8 md:max-w-md gap-x-20"
        ref={ref}
      >
        <div className="md:w-[4vw] w-[12vw]">
          <h3 className="text-4xl font-semiborder border-b border-gray-600 pb-1">
            {inView ? <CountUp start={0} end={5} duration={4} /> : "0"}+
          </h3>
          <p className="text-[#EAF5F4A6] mt-1 text-sm">Projects</p>
        </div>
        <div className="md:w-[8vw] w-[26vw]">
          <h3 className="text-4xl font-semiborder border-b border-gray-600 pb-1">
            {inView ? <CountUp start={0} end={200} duration={4} /> : "0"}+
          </h3>
          <p className="text-[#EAF5F4A6] mt-1  md:text-[12px] text-sm">
            Learners trained
          </p>
        </div>
        <div className="md:w-[7.5vw] w-[25vw]">
          <h3 className="text-4xl font-semiborder border-b border-gray-600 pb-1">
            {inView ? (
              <CountUp start={0} end={99.9} duration={4} decimals={1} />
            ) : (
              "0"
            )}
            %
          </h3>
          <p className="text-[#EAF5F4A6] mt-1 text-sm">Satisfaction</p>
        </div>
        <div className="md:w-[5.4vw] w-[16vw]">
          <h3 className="text-4xl font-semiborder border-b border-gray-600 pb-1">
            10+
          </h3>
          <p className="text-[#EAF5F4A6] mt-1 text-sm">Integrations</p>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
