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
import Link from "next/link";

export default function FocusArea() {
  return (
    <section>
      <NavBar />
      <HeroGeneral>
        <section className="flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 mt-20">
          <SectionTitle title="Our focus" />

          <section className=" space-y-4 ">
            {/* <h1 className='text-white text-3xl md:text-5xl font-bold text-center'>Our Focus Area</h1> */}
            <h1 className="text-white text-3xl md:text-6xl font-bold text-center leading-[64px]">
              Our Focus Area
            </h1>

            <section className="flex flex-col items-center gap-4  justify-center w-[90vw] md:w-full ">
              <p className="text-[#EAF5F4A6] text-md py-2 text-base font-medium text-center w-[90vw] md:w-[50vw]">
                Our focus is to co-create accessible digital solutions with
                local partners across Africa, empowering businesses and
                communities to thrive in the digital economy
              </p>
              <section className=" flex flex-col md:flex-row gap-4 ">
                <section className=" flex w-[90vw] md:w-[15vw]  justify-center items-center">
                  <Link href={"/contact-us"} className="w-full">
                    <button className=" group border border-[#48B96B]  px-8 w-full md:py-4 font-normal justify-center rounded-md flex items-center gap-2 transition-colors duration-100 hover:bg-[#6CC78840]  hover:text-white">
                      Get in touch{" "}
                      <MdOutlineArrowOutward className="transition-transform duration-100 group-hover:rotate-45 text-[24px]" />
                    </button>
                  </Link>
                </section>
              </section>
            </section>
          </section>
        </section>
      </HeroGeneral>

      <section className="shadow-2xl bg-[#171615A6] rounded-t-2xl z-20  border-[#262020a6] w-full">
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
