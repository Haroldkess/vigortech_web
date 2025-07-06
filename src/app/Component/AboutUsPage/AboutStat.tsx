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
    <section className=" w-full px-4 md:mx-auto  md:px-6  flex flex-col  items-center md:flex-row md:justify-center md:items-center gap-12 md:gap-0">
      <div
        className="grid md:grid-cols-4 grid-cols-2  md:gap-x-40 justify-center items-center gap-y-8 md:max-w-2xl gap-x-20"
        ref={ref}
      >
        <div className="md:w-[4vw] w-[12vw]">
          <h3 className="text-3xl md:text-5xl font-semibold border-b border-gray-600 pb-1">
            {inView ? <CountUp start={0} end={5} duration={4} /> : "0"}+
          </h3>
          <p className="text-[#EAF5F4A6] mt-1 text-base font-normal">Projects</p>
        </div>
        <div className="md:w-[8vw] ">
          <h3 className="text-3xl md:text-5xl font-semibold border-b border-gray-600 pb-1">
            {inView ? <CountUp start={0} end={200} duration={4} /> : "0"}+
          </h3>
          <p className="text-[#EAF5F4A6] mt-1  md:text-[12px] text-base font-normal">
            Learners trained
          </p>
        </div>
        <div className="md:w-[10vw]">
          <h3 className="text-3xl md:text-5xl font-semibold border-b border-gray-600 pb-1">
            {inView ? (
              <CountUp start={0} end={99.9} duration={4} decimals={1} />
            ) : (
              "0"
            )}
            %
          </h3>
          <p className="text-[#EAF5F4A6] mt-1 text-base font-normal hidden md:block">
            Satisfied Board
          </p>
          <p className="text-[#EAF5F4A6] mt-1 text-base font-normal md:hidden ">
            Satisfaction
          </p>
        </div>
        <div className="md:w-[5.4vw] ">
          <h3 className="text-3xl md:text-5xl font-semibold border-b border-gray-600 pb-1">
            10+
          </h3>
          <p className="text-[#EAF5F4A6] mt-1 text-base font-normal">Integrations</p>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
