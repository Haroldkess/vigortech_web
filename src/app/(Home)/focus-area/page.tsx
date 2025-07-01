import Finance from "@/app/Component/FocusAreaPage/Finance";
import OurCourses from "@/app/Component/FocusAreaPage/OurCourses";
import OurServices from "@/app/Component/FocusAreaPage/OurServices";
import TechSection from "@/app/Component/FocusAreaPage/TechSection";
import Footer from "@/app/Component/General/Footer";
import HeroGeneral from "@/app/Component/General/HeroGeneral";
import SectionTitle from "@/app/Component/General/SectionTitle";
import NavBar from "@/app/Component/General/NavBar";
import Image from "next/image";

import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function FocusArea() {
  return (
    <section>
      <NavBar />
      <HeroGeneral>
        <section className="flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 mt-20">
          <SectionTitle title="Our focus" />

          <section className=" ">
            {/* <h1 className='text-white text-3xl md:text-5xl font-bold text-center'>Our Focus Area</h1> */}
            <h2 className="text-white text-center font-inter text-[32px] font-[800] leading-[40px] md:text-[57px] md:font-[600] md:leading-[64px] md:tracking-[-0.142px] lg:text-[57px] lg:font-[600] lg:leading-[64px] lg:tracking-[-0.142px] pt-10">
              Our Focus Area
            </h2>

            <section className="flex flex-col items-center gap-4  justify-center w-full md:w-[60vw] ">
              <p className="text-[#EAF5F4A6] text-md py-4 md:text-lg font-normal text-center mt-4">
                Our focus is to co-create accessible digital solutions with
                local partners across Africa, empowering businesses and
                communities to thrive in the digital economy
              </p>
              <section className=" flex flex-col md:flex-row gap-4 ">
                <section className=" flex flex-col md:flex-row gap-4 gap-y-8 w-[90vw] md:w-[60vw] md:justify-center md:items-center">
                  <button className="border border-[#48B96B]  px-8  py-2 font-normal justify-center rounded-md flex items-center gap-2">
                    Get in touch <MdOutlineArrowOutward />
                  </button>
                </section>
              </section>
            </section>
          </section>
        </section>
      </HeroGeneral>
      <section className="shadow-2xl bg-[#171615A6]">
        <TechSection />

        <OurServices />

        <section className="flex justify-center items-center w-full py-4 md:py-20">
          <Image
            src={"/line.svg"}
            alt="line"
            width={1000}
            height={10}
            className="h-20 md:h-10 w-[100vw]"
          />
        </section>

        <OurCourses />

        <section className="flex justify-center items-center w-full py-4 md:py-20">
          <Image
            src={"/line.svg"}
            alt="line"
            width={1000}
            height={10}
            className="h-20 md:h-10 w-[100vw]"
          />
        </section>

        <Finance />

        <Footer />
      </section>
    </section>
  );
}
