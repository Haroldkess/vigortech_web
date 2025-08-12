import Benfits from "@/app/Component/CareerPage/Benfits";
// import JobBoard from "@/app/Component/CareerPage/JobBoard";
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
        <section className="flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 my-20 ">
          <SectionTitle title="Career" />

          <section className=" ">
            <h1 className="text-white text-3xl md:text-6xl font-bold text-center leading-[64px]">
              {" "}
              Join our team
            </h1>
            <section className="relative left-[54%] top-[-0.5em] md:left-[55%] md:top-[-1.5rem] ">
              <Image
                src="/newsLine.svg"
                alt="Newsletter Icon"
                width={110}
                height={100}
                className="h-3 md:w-[12em] md:h-10"
              />
            </section>

            <section className="flex flex-col items-center gap-4  justify-center w-full md:w-[60vw] ">
              <p className="text-[#EAF5F4A6] text-md text-base font-medium text-center  md:w-[50vw]">
                Build your career at vigorTech and be part of a team that
                &apos;s shaping the future through innovation, education, and
                strategic investments.
              </p>
            </section>
          </section>
        </section>
      </HeroGeneral>

      <section className="absolute left-0  md:top-[20vw] top-[15em] -translate-x-[95vw] md:-translate-x-[55%] z-20">
        <Image
          src={"/bgEarth.png"}
          alt="Background Earth Left"
          width={1000}
          height={1000}
          className="w-[600px] object-cover md:w-[75vw] max-w-none z-50"
          priority
        />
      </section>

      <section className=" pt-20 relative backdrop-blur-2xl  gap-y-10 flex flex-col  z-30  w-full mt-[-8em] md:mt-[-4em] ">
        <Location />

        <section className="relative top-[-10em] md:top-0 w-full ">
          {/* <section className="flex justify-center items-center w-full py-4">
            <Image
              src={"/line.svg"}
              alt="line"
              width={100}
              height={10}
              className="h-6 md:h-4 w-[100vw]"
            />
          </section> */}

          {/* <JobBoard /> */}

          <section className="flex justify-center items-center w-full py-4">
            <Image
              src={"/line.svg"}
              alt="line"
              width={100}
              height={10}
              className="h-6 md:h-4 w-[100vw]"
            />
          </section>
          <Benfits />
        </section>
        <Footer />
      </section>
    </section>
  );
}
