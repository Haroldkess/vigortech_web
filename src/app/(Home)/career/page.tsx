import Benfits from "@/app/Component/CareerPage/Benfits";
import JobBoard from "@/app/Component/CareerPage/JobBoard";
import Location from "@/app/Component/CareerPage/Location";
import Footer from "@/app/Component/General/Footer";
import HeroGeneral from "@/app/Component/General/HeroGeneral";
import SectionTitle from "@/app/Component/General/SectionTitle";
import NavBar from "@/app/Component/General/NavBar";
import Image from "next/image";
import React from "react";

export default function Career() {
  return (
    <section>
      <NavBar />

      <HeroGeneral>
        <section className="flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 mt-20">
          <SectionTitle title="Career" />

          <section className=" ">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              {" "}
              Join our team
            </h1>
            <section className="relative left-[54%] top-[-0.5em] md:left-[53%] md:top-[-1.5rem] ">
              <Image
                src="/newsLine.svg"
                alt="Newsletter Icon"
                width={110}
                height={100}
                className="h-3 md:h-10"
              />
            </section>

            <section className="flex flex-col items-center gap-4  justify-center w-full md:w-[60vw] ">
              <p className="text-[#EAF5F4A6] text-md py-4 md:text-lg font-normal text-center mt-4 md:w-[50vw]">
                Build your career at vigorTech and be part of a team that
                &apos;s shaping the future through innovation, education, and
                strategic investments.
              </p>
            </section>
          </section>
        </section>
      </HeroGeneral>

      <section className="shadow-2xl bg-[#171615A6] rounded-t-2xl z-20  border-[#262020a6] w-full">
        <Location />

        <section className="flex justify-center items-center w-full py-4 md:py-20">
          <Image
            src={"/line.svg"}
            alt="line"
            width={1000}
            height={10}
            className="h-10 w-[100vw]"
          />
        </section>

        <JobBoard />

        <section className="flex justify-center items-center w-full py-4 md:py-20">
          <Image
            src={"/line.svg"}
            alt="line"
            width={1000}
            height={10}
            className="h-10 w-[100vw]"
          />
        </section>
        <Benfits />

        <Footer />
      </section>
    </section>
  );
}
