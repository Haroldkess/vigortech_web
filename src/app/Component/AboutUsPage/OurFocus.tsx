import Image from "next/image";
import React from "react";

export default function OurFocus() {
  return (
    <div className=" text-white min-h-[70vh] ">
      <div className="w-full px-4 md:px-6 py-12">
        <section className="flex md:gap-x-4 mb-4">
          <span className="border-s-4 px-2 lg:px-2 border-[#48B96B] "></span>
          <h2 className="text-3xl md:text-6xl font-semibold"> Our Focus</h2>
        </section>
        <section className="text-[#EAF5F4A6] text-md  font-light text-start  flex flex-col gap-y-10  mt-4 md:max-w-xl">
          <p className="px-4 md:px-8">
            &quot;Our focus is to co-create accessible digital solutions with
            local partners across Africa, empowering businesses and communities
            to thrive in the digital economy.&quot;
          </p>
        </section>

        <div className="flex flex-col w-full md:px-6 items-center justify-center z-10 md:mt-20 mt-10">
          {/* Horizontal line top */}

          <section className="md:flex justify-center hidden items-center w-full relative z-20 ">
            <div className=" rounded-full w-20 h-20 flex items-center justify-between  text-lg z-50 ">
              <Image
                src="/tech_circle.svg"
                alt="Technology Icon"
                width={70}
                height={70}
              />
            </div>

            <div className="w-[30%]  border-t border-[#2ecc71]"></div>
            <div className=" rounded-full w-20 h-20 flex items-center justify-center  text-lg relative">
              <Image
                src="/education_circle.svg"
                alt="Education Icon"
                width={70}
                height={70}
              />
            </div>
            <div className="w-[33%]  border-t border-[#2ecc71]"></div>

            <div className=" rounded-full w-20 h-20 flex items-center justify-center  text-lg ">
              <Image
                src="/finance_circle.svg"
                alt="Finance Icon"
                width={70}
                height={70}
              />
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 md:justify-between md:space-x-10  gap-y-10 items-center relative md:pt-5  w-full">
            {/* Technology */}
            <div className="flex flex-col items-center ">
              <div className=" rounded-full w-20 h-20 md:hidden flex items-center justify-between  text-lg pl-4 md:pl-0 ">
                <Image
                  src="/tech_circle.svg"
                  alt="Technology Icon"
                  width={50}
                  height={50}
                />
              </div>

              <section className="flex flex-col items-center md:items-start w-full  ">
                <p className="mt-3 font-medium text-xl  md:pr-0 md:pl-[7vw]">
                  Technology
                </p>
                <p className="mt-1 text-sm font-normal w-80 text-[#EAF5F4A6] text-center ">
                  We don&apos;t just build tech for the sake of it; everything
                  we make is intentional. From platforms to tools, we focus on
                  solving real problems.
                </p>
              </section>
            </div>

            {/* Education */}
            <div className="flex flex-col items-center  ">
              <div className=" rounded-full w-20 h-20 md:hidden flex items-center justify-center  text-lg relative ">
                <Image
                  src="/education_circle.svg"
                  alt="Education Icon"
                  width={50}
                  height={50}
                />
              </div>

              <section className="flex flex-col items-center w-full  ">
                <p className="mt-3 font-medium text-xl md:pl-[0.3vw]">
                  Education
                </p>
                <p className="mt-1 text-sm font-normal w-80 text-[#EAF5F4A6] text-center ">
                  Knowledge is power, and access matters. We&apos;re helping
                  people and orgs not just keep up, but lead in today&apos;s
                  fast-moving digital world.
                </p>
              </section>
            </div>

            {/* Finance */}
            <div className="flex flex-col items-center ">
              <div className=" rounded-full w-20 h-20 md:hidden flex items-center justify-center  text-lg  ">
                <Image
                  src="/finance_circle.svg"
                  alt="Finance Icon"
                  width={50}
                  height={50}
                />
              </div>

              <section className="flex flex-col items-center md:items-end w-full  ">
                <p className="mt-3 font-medium text-xl pr-2 md:pr-[9vw]">
                  Finance
                </p>
                <p className="mt-1 text-sm font-normal w-80 text-[#EAF5F4A6] text-center ">
                  At Vigor Tech, finance is not just about numbers—it&apos;s
                  about empowering people to take control of their financial
                  futures
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
