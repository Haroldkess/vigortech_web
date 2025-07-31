import Footer from "@/app/Component/General/Footer";
import HeroGeneral from "@/app/Component/General/HeroGeneral";
import SectionTitle from "@/app/Component/General/SectionTitle";
import NavBar from "@/app/Component/General/NavBar";
import Courses from "@/app/Component/InstitutePage/Courses";
import React from "react";
import { MdSearch } from "react-icons/md";
import Image from "next/image";

export default function InstitutePage() {
  return (
    <>
      <section>
        <NavBar />

        <HeroGeneral>
          <section className="flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 my-20  ">
            <SectionTitle title="Courses" />
            <section className=" ">
              <h1 className="text-white text-3xl md:text-6xl font-bold text-center">
                Our Institute{" "}
              </h1>
              <section className="flex flex-col items-center gap-4  justify-center w-full md:w-[60vw] ">
                <p className="text-[#EAF5F4A6] text-md py-4 text-base font-medium text-center mt-4 md:w-[50vw]">
                  Explore our comprehensive range of technology courses designed
                  to enhance your skills and accelerate your career growth.
                </p>
                <section className=" flex flex-col md:flex-row gap-4 ">
                  <section className="pt-10">
                    <form className="flex justify-center items-center md:gap-4 w-full  ">
                      <div className="px-4 py-2 w-[90vw] md:w-[40vw] rounded-full gap-2 border border-[#86868673] bg-[#171615A6] focus-within:border-[#48B96B] flex items-center">
                        <span>
                          <MdSearch className="text-[#EAF5F440]" />
                        </span>
                        <input
                          type="text"
                          placeholder="Search for courses..."
                          className="w-[60vw] md:w-[40vw] placeholder:text-[#EAF5F440] placeholder:text-md placeholder:font-inter placeholder:font-[400] outline-none bg-transparent text-white text-md font-inter font-[400]"
                        />
                      </div>
                    </form>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </HeroGeneral>
    
   
          <section className="absolute left-0 top-[-20em] md:top-[25vw] -translate-x-[55%] z-20">
            <Image
              src={"/bgEarth.png"}
              alt="Background Earth Left"
              width={1000}
              height={1000}
              className="w-[600px] object-cover md:w-[75vw] max-w-none z-50"
              priority
            />
          </section>
          <section className=" pt-20 relative backdrop-blur-2xl  gap-y-10 flex flex-col  z-30 border-black/5  rounded-t-3xl  w-full mt-[-4em] ">
          <Courses />
        </section>
      </section>
      <Footer />
    </>
  );
}
