import Image from "next/image";
import React from "react";




export default function OurFocus() {

 
  return (
    <div className=" text-white min-h-[70vh] ">
      <div className="w-full px-4 md:px-6 py-12">
        <section className="flex md:gap-x-4 mb-4">
          <span className="border-s-4 px-2 lg:px-2 border-[#48B96B] "></span>
          <h2 className="text-[32px] md:text-[57px] font-bold leading-10 md:font-semibold md:leading-[64px]">
            {" "}
            Our Focus
          </h2>
        </section>
        <section className="text-[#EAF5F4A6] text-md  font-light text-start  flex flex-col gap-y-10  mt-4 md:max-w-xl">
          <p className="px-4 md:px-8">
            &quot;Our focus is to co-create accessible digital solutions with
            local partners across Africa, empowering businesses and communities
            to thrive in the digital economy.&quot;
          </p>
        </section>

        <div className="flex flex-col w-full md:px-6 items-center justify-center z-10 md:mt-20 mt-10">
          {/* Horizontal Icons with Lines (Desktop) */}
          <section className="hidden md:flex justify-center items-center  relative z-20 w-[68vw]">
            {/* Technology Icon */}
            <div className="rounded-full w-[75px] h-[75px] flex items-center justify-center ">
              <Image
                src="/tech_circle.svg"
                alt="Technology Icon"
                width={50}
                height={50}
              />
            </div>

            {/* Line */}
            <div className="flex-1  border-t border-[#2ecc71] mx-2"></div>

            {/* Education Icon */}
            <div className="rounded-full w-[75px] h-[75px] flex items-center justify-center ">
              <Image
                src="/education_circle.svg"
                alt="Education Icon"
                width={50}
                height={50}
              />
            </div>

            {/* Line */}
            <div className="flex-1 border-t border-[#2ecc71] mx-2"></div>

            {/* Finance Icon */}
            <div className="rounded-full w-[75px] h-[75px] flex items-center justify-center ">
              <Image
                src="/finance_circle.svg"
                alt="Finance Icon"
                width={50}
                height={50}
              />
            </div>
          </section>

          {/* Stacked Grid Text + Icons (Mobile + Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8 w-full text-center mt-4">
            {/* Technology */}
            <div className="flex flex-col items-center">
              {/* Icon for Mobile */}
              <div className="md:hidden rounded-full w-16 h-16 flex items-center justify-center bg-[#2ecc71]/10">
                <Image
                  src="/tech_circle.svg"
                  alt="Technology Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white text-center">
                Technology
              </h3>
              <p className="mt-2 text-[#EAF5F4A6] text-base leading-6 max-w-xs text-center">
                We don’t just build tech for the sake of it; everything we make
                is intentional. From platforms to tools, we focus on solving
                real problems.
              </p>
            </div>

            {/* Education */}
            <div className="flex flex-col items-center">
              {/* Icon for Mobile */}
              <div className="md:hidden rounded-full w-16 h-16 flex items-center justify-center bg-[#2ecc71]/10">
                <Image
                  src="/education_circle.svg"
                  alt="Education Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white text-center">
                Education
              </h3>
              <p className="mt-2 text-[#EAF5F4A6] text-base leading-6 max-w-xs text-center">
                Knowledge is power, and access matters. We’re helping people and
                orgs not just keep up, but lead in today’s fast-moving digital
                world.
              </p>
            </div>

            {/* Finance */}
            <div className="flex flex-col items-center">
              {/* Icon for Mobile */}
              <div className="md:hidden rounded-full w-16 h-16 flex items-center justify-center bg-[#2ecc71]/10">
                <Image
                  src="/finance_circle.svg"
                  alt="Finance Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white text-center">
                Finance
              </h3>
              <p className="mt-2 text-[#EAF5F4A6] text-base leading-6 max-w-xs text-center">
                At Vigor Tech, finance is not just about numbers—it’s about
                empowering people to take control of their financial futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
