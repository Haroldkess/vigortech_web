import Image from "next/image";
import React from "react";

export default function OurFocus() {
  return (
    <div className=" text-white min-h-screen ">
      <div className="max-w-7xl px-10 md:px-20 py-12">
        <h2 className="text-3xl font-semibold border-l-4 border-[#2ecc71] pl-3 mb-3">
          Our Focus
        </h2>
        <p className="text-md text-[#EAF5F4A6] max-w-md mb-16">
          &quot;Our focus is to co-create accessible digital solutions with
          local partners across Africa, empowering businesses and communities to
          thrive in the digital economy.&quot;
        </p>

        <div className="flex flex-col items-center justify-center z-10">
          {/* Horizontal line top */}

          <section className="md:flex justify-center hidden items-center relative z-20 md:left-4">
            <div className=" rounded-full w-20 h-20 flex items-center justify-between  text-lg z-50 ">
              <Image
                src="/tech_circle.svg"
                alt="Technology Icon"
                width={50}
                height={50}
              />
            </div>

            <div className="w-[22vw]  border-t border-[#2ecc71]"></div>
            <div className=" rounded-full w-20 h-20 flex items-center justify-center  text-lg relative z-50">
              <Image
                src="/education_circle.svg"
                alt="Education Icon"
                width={50}
                height={50}
              />
            </div>
            <div className="w-[22vw]  border-t border-[#2ecc71]"></div>

            <div className=" rounded-full w-20 h-20 flex items-center justify-center  text-lg  z-50">
              <Image
                src="/finance_circle.svg"
                alt="Finance Icon"
                width={50}
                height={50}
              />
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-10 items-center  z-10 w-full">
            {/* Technology */}
            <div className="flex flex-col items-center ">
              <div className=" rounded-full w-20 h-20 md:hidden flex items-center justify-between  text-lg z-50 ">
                <Image
                  src="/tech_circle.svg"
                  alt="Technology Icon"
                  width={50}
                  height={50}
                />
              </div>

              <p className="mt-3 font-semibold text-sm">Technology</p>
              <p className="mt-1 text-md px-10 text-[#EAF5F4A6] font-light text-center ">
                We don&apos;t just build tech for the sake of it; everything we
                make is intentional. From platforms to tools, we focus on
                solving real problems.
              </p>
            </div>

            {/* Education */}
            <div className="flex flex-col items-center  ">
              <div className=" rounded-full w-20 h-20 md:hidden flex items-center justify-center  text-lg relative z-50">
                <Image
                  src="/education_circle.svg"
                  alt="Education Icon"
                  width={50}
                  height={50}
                />
              </div>

              <p className="mt-3 font-semibold text-sm">Education</p>
              <p className="mt-1 text-md px-10 text-[#EAF5F4A6] font-light text-center ">
                Knowledge is power, and access matters. We&apos;re helping
                people and orgs not just keep up, but lead in today&apos;s
                fast-moving digital world.
              </p>
            </div>

            {/* Finance */}
            <div className="flex flex-col items-center ">
              <div className=" rounded-full w-20 h-20 md:hidden flex items-center justify-center  text-lg  z-50">
                <Image
                  src="/finance_circle.svg"
                  alt="Finance Icon"
                  width={50}
                  height={50}
                />
              </div>

              <p className="mt-3 font-semibold text-sm">Finance</p>
              <p className="mt-1 text-md px-10 text-[#EAF5F4A6] font-light text-center ">
                At Vigor Tech, finance is not just about numbers—it&apos;s about
                empowering people to take control of their financial futures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
