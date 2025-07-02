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
import GetInTouch from "@/app/Component/AboutUsPage/GetInTouch";

export default function AboutUs() {
  return (
    <section className="">
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

            <section className="flex flex-col items-center gap-4  justify-center w-[90vw] md:w-full ">
              <p className="text-[#EAF5F4A6] text-md py-2 md:text-lg font-medium text-center ">
                Where purpose meets real impact.
              </p>
              <GetInTouch />
            </section>
          </section>
        </section>
      </HeroGeneral>
      <section className="shadow-2xl bg-[#171615A6] rounded-t-2xl z-20  border-[#262020a6] w-full">
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
