import AboutStats from "@/app/Component/AboutUsPage/AboutStat";
// import HeroAbout from '@/app/Component/AboutUsPage/HeroAbout'
import OurFocus from "@/app/Component/AboutUsPage/OurFocus";
import OurMission from "@/app/Component/AboutUsPage/OurMission";
import OurStory from "@/app/Component/AboutUsPage/OurStory";
import OurValues from "@/app/Component/AboutUsPage/OurValues";
import Team from "@/app/Component/AboutUsPage/Team";
import Footer from "@/app/Component/General/Footer";
import HeroGeneral from "@/app/Component/General/HeroGeneral";
import SectionTitle from "@/app/Component/General/SectionTitle";
import NavBar from "@/app/Component/General/NavBar";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function AboutUs() {
  return (
    <section>
      <NavBar />
      <HeroGeneral>
        <section className="flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 mt-20">
          <SectionTitle title="About us" />

          <section className=" ">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              We’re Building Africa’s
              <br />
              tomorrow, today!
            </h1>

            <section className="relative left-[48%] md:left-[53%] top-[-1rem] ">
              <Image
                src="/newsLine.svg"
                alt="Newsletter Icon"
                width={200}
                height={100}
                className="h-5 md:h-10"
              />
            </section>

            <section className="flex flex-col items-center gap-4  justify-center w-[90vw] md:w-full">
              <p className="text-[#EAF5F4A6] text-md py-4 md:text-lg font-normal text-center mt-4">
                Where purpose meets real impact.
              </p>
              <section className=" flex flex-col md:flex-row gap-4 gap-y-8 w-[90vw] md:w-[60vw] md:justify-center md:items-center">
                <button className="bg-[#48B96B] md:px-8 px-4 py-2 font-normal text-[#171615] rounded-md">
                  Explore our products
                </button>
                <button className="border border-[#48B96B]  px-8  py-2 font-normal justify-center rounded-md flex items-center gap-2">
                  We&apos;re Hiring <MdOutlineArrowOutward />
                </button>
              </section>
            </section>
          </section>
        </section>
      </HeroGeneral>
      <section className="shadow-2xl bg-[#171615A6]">
        <AboutStats />
        <OurStory />
        <OurFocus />
        <section className="flex justify-center items-center w-full py-4">
          <Image
            src={"/line.svg"}
            alt="line"
            width={100}
            height={10}
            className="h-4 w-[100vw]"
          />
        </section>

        <OurMission />

        <section className="flex justify-center items-center w-full py-4">
          <Image
            src={"/line.svg"}
            alt="line"
            width={100}
            height={10}
            className="h-4 w-[100vw]"
          />
        </section>

        <OurValues />

        <section className="flex justify-center items-center w-full py-4">
          <Image
            src={"/line.svg"}
            alt="line"
            width={100}
            height={10}
            className="h-4 w-[100vw]"
          />
        </section>

        <Team />

        <Footer />
      </section>
    </section>
  );
}
