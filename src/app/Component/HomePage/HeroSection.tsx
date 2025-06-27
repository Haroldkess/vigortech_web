"use client";
import Image from "next/image";

// import React, { useState } from "react";


import { MdOutlineArrowOutward } from "react-icons/md";

export default function HeroSection() {

  return (
    <header className=" lg:mb-[30vh] mb-40  font-inter pb-40 lg:pb-20  ">
      <section className="relative z-10 top-[2em] md:top-[10em] h-[70vh] md:h-[50vh] w-full">

        <section className="flex items-center px-4 md:px-10 lg:px-10 w-full ">
          <section
            className="z-20 absolute flex flex-col gap-10
             w-[90vw] sm:w-[85vw] md:w-[50vw] lg:w-[60vw]
             top-24 md:top-10 lg:top-auto lg:bottom-[-4em]">

            <section className="flex flex-col gap-6">

              <h1 className=" font-inter font-extrabold text-[32px] leading-[40px] tracking-[0%]
              md:font-bold md:text-[57px] md:leading-[64px] md:tracking-[-0.25%]
              lg:text-[60px] lg:leading-[72px] lg:tracking-[0.5%]" >
                Empowering Africa with smart technology
              </h1>

              {/* <p className="md:w-[45vw] w-[90vw] text-[#EAF5F4A6] text-sm md:text-md"> */}
              <p className="font-inter text-[16px] leading-[20px] tracking-[0.1%]
              font-normal text-[#EAF5F4A6]
              md:font-medium md:bg-transparent
              lg:font-medium md:w-[45vw] w-[90vw]">
                Innovative solutions that transform businesses through
                cutting-edge technology, expert strategy, and seamless
                integration.
              </p>
            </section>

            <section>
              <section className=" flex flex-col md:flex-row gap-4 w-[90vw]">

                <button className=" h-[48px] w-[228px] px-[20px] py-[10px] text-[16px] font-[500] flex justify-center items-center text-[#171615] rounded-md bg-[#48B96B] hover:bg-[#6CC788]">
                  Explore our products
                </button>
                <button className="group border border-[#48B96B] w-[185px] h-[48px] font-semibold justify-center rounded-md flex items-center gap-2 transition-colors duration-100 hover:bg-[#6CC78840]  hover:text-white">
                  Get in touch
                  <MdOutlineArrowOutward
                    className="transition-transform duration-100 group-hover:rotate-45 text-[24px]"
                  />
                </button>
              </section>
            </section>

            <section className="relative">
              <section className="flex  absolute top-20 gap-10 opacity-50 justify-center md:justify-start items-center ">
                <Image
                  src={"/adam.svg"}
                  alt="adam"
                  width={200}
                  height={200}
                  className=" w-[143.02px] h-[36.23px]
              md:w-[103.94px] md:h-[26.33px]
              lg:w-[124.16px] lg:h-[31.45px]text-white/65"
                />
                <Image
                  src={"/nervus.svg"}
                  alt="adam"
                  width={200}
                  height={200}
                  className=" w-[178.76px] h-[32.85px]
              md:w-[129.92px] md:h-[23.87px]
              lg:w-[155.19px] lg:h-[28.52px] text-white/65"
                />
              </section>
            </section>
          </section>

          {/* desktop image section */}
          <section className=" hidden lg:block">
            <section className=" flex justify-center flex-col  ">

              <img
                src={"/Earth.png"}
                alt="earth"
                width={1000}
                height={1000}
                className="z-50  w-[67vw] object-cover absolute right-0 md:right-[-9%] bottom-[-16%] md:bottom-0  md:top-[-6em]"
              />

              <section className="">
                <img
                  src={"/bgEarth.png"}
                  alt="earth"
                  width={200}
                  height={200}
                  className=" w-[94vw] object-cover absolute blur-md -z-20 right-[-20em] bottom-[-20em]  "
                />
              </section>

              <section className="absolute bottom-0 right-[24vw] top-[32vh] ">
                {/* <div className='glow-bicon w-4 h-4 rounded-full'> </div> */}

                <div className="pulse-animation">
                  <div className="layer blur"></div>
                  <div className="layer outer"></div>
                  <div className="layer middle"></div>
                  <div className="layer inner"></div>
                </div>

              </section>
            </section>
          </section>



          {/* tablet mage section */}

          <section className=" hidden max-w-md md:block">
            <section className=" flex justify-center flex-col  ">

              <img
                src={"/Earth.png"}
                alt="earth"
                width={1000}
                height={1000}
                className="z-50  w-[80vw] object-cover absolute right-[-8em] top-[-8vh] lg:hidden "
              />

              <section className="">
                <img
                  src={"/bgEarth.png"}
                  alt="earth"
                  width={200}
                  height={200}
                  className=" w-[150vw] object-cover absolute blur-md -z-20 right-[-20em] lg:hidden  "
                />
              </section>

              <section className="absolute bottom-0 top-[14vh] right-[25vw] lg:hidden">
                {/* <div className='glow-bicon w-4 h-4 rounded-full'> </div> */}
                <div className="pulse-animation">
                  <div className="layer blur"></div>
                  <div className="layer outer"></div>
                  <div className="layer middle"></div>
                  <div className="layer inner"></div>
                </div>
              </section>
            </section>
          </section>


          {/* mobile image section */}

          <section className="block md:hidden">
            <section className=" flex justify-center flex-col  ">

              <img
                src={"/Earth.png"}
                alt="earth"
                width={1000}
                height={1000}
                className="z-50  w-[100vw] object-cover absolute right-0 left-0 top-[70vh]"
              />

              <section className="">
                <img
                  src={"/bgEarth.png"}
                  alt="earth"
                  width={200}
                  height={200}
                  className=" w-[94vw] object-cover absolute blur-md -z-20 right-0 top-[70vh]  "
                />
              </section>

              <section className="absolute bottom-0 right-[48%] top-[85vh] ">
                {/* <div className='glow-bicon w-4 h-4 rounded-full'> </div> */}
                <div className="pulse-animation">
                  <div className="layer blur"></div>
                  <div className="layer outer"></div>
                  <div className="layer middle"></div>
                  <div className="layer inner"></div>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
    </header>
  );
}
