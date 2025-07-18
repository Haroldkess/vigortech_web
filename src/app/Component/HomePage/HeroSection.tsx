"use client";
import Image from "next/image";
import Link from "next/link";

// import React, { useState } from "react";

import { MdOutlineArrowOutward } from "react-icons/md";

export default function HeroSection() {
  return (
    <header className=" lg:mb-[30vh] mb-40  font-inter pb-40 lg:pb-40  ">
      <section className="relative z-10 top-[2em] md:top-[10em] h-[70vh] md:h-[50vh] w-full">
        <section className="flex items-center px-4 md:px-10 lg:px-10 w-full ">
          <section
            className="z-20 absolute flex flex-col gap-10
             w-[90vw] sm:w-[85vw] md:w-[50vw] lg:w-[60vw]
             top-24 md:top-10 lg:top-auto lg:bottom-[-4em]"
          >
            <section className="flex flex-col gap-6">
              <h1
                className=" font-inter font-extrabold text-[32px] leading-[40px] tracking-[0%]
              md:font-bold md:text-[57px] md:leading-[64px] md:tracking-[-0.25%]
              lg:text-[60px] lg:leading-[72px] lg:tracking-[0.5%]"
              >
                Empowering Africa with smart technology
              </h1>

              {/* <p className="md:w-[45vw] w-[90vw] text-[#EAF5F4A6] text-sm md:text-md"> */}
              <p
                className="font-inter text-[16px] font-inter leading-[24px] tracking-[0.1%]
               text-[#EAF5F4A6]
              md:bg-transparent
              font-medium md:w-[45vw] w-[90vw]"
              >
                Innovative solutions that transform businesses through
                cutting-edge technology, expert strategy, and seamless
                integration.
              </p>
            </section>

            <section>
              <section className=" flex flex-col md:flex-row gap-4 w-[90vw]">
                <button className=" md:h-[48px] md:w-[228px] px-[20px] py-[10px] text-[16px] font-[500] flex justify-center items-center text-[#171615] rounded-md bg-[#48B96B] hover:bg-[#6CC788]">
                  <Link href="/focus-area">Explore our products</Link>
                </button>
                <button className="group border border-[#48B96B]  py-[12px] md:w-[185px]  md:h-[48px] font-normal justify-center rounded-md flex items-center gap-2 transition-colors duration-100 hover:bg-[#6CC78840]  hover:text-white">
                  <Link
                    href={"/contact-us"}
                    className="flex items-center gap-2"
                  >
                    Get in touch
                    <MdOutlineArrowOutward className="transition-transform duration-100 group-hover:rotate-45 text-[24px]" />
                  </Link>
                </button>
              </section>
            </section>

            <section className="relative ">
              <section className="flex  absolute md:top-20 gap-10 opacity-50 justify-center md:justify-start items-center ">
                <Image
                  src={"/adam.svg"}
                  alt="adam"
                  width={200}
                  height={200}
                  className=" w-[120.02px] h-[36.23px]
               md:w-[103.94px] md:h-[26.33px]
              lg:w-[124.16px] lg:h-[31.45px]text-white/65"
                  onClick={() => alert("Coming soon")}
                />
                <Link href={"http://getnervus.com"} target="_blank">
                  <Image
                    src={"/nervus.svg"}
                    alt="adam"
                    width={200}
                    height={200}
                    className=" w-[150.76px] h-[32.85px]
              md:w-[129.92px] md:h-[23.87px]
              lg:w-[155.19px] lg:h-[28.52px] text-white/65"
                  />
                </Link>
              </section>
            </section>

            <section className="flex justify-center flex-col md:hidden ">
              <section>
                <img
                  src={"/bgEarth.png"}
                  alt="earth"
                  width={200}
                  height={200}
                  className=" w-[400px] object-cover absolute blur-md -z-20 bottom-[-4em] right-[-2em]   "
                />
              </section>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1378 768"
                className="w-[90vw] h-auto"
              >
                {/* World Map Path */}
                <image
                  href="/Earth.png"
                  x="0"
                  y="0"
                  width="1378"
                  height="768"
                />

                {/* Glowing Pulse Circle at specific coordinates (e.g., Nigeria) */}
                <g>
                  <circle cx="680" cy="450" r="4" fill="#EAF5F4">
                    <animate
                      attributeName="r"
                      values="4;12;4"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="1;0;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="680" cy="450" r="8" fill="#ADFBC5" opacity="0.6">
                    <animate
                      attributeName="r"
                      values="8;20;8"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="680"
                    cy="450"
                    r="14"
                    fill="#60DA86"
                    filter="blur(4px)"
                  >
                    <animate
                      attributeName="r"
                      values="14;30;14"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;0;0.3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </svg>
            </section>
          </section>

          {/* desktop image section */}
          <section className=" hidden md:block">
            <section className=" flex justify-center flex-col  ">
              <section className="">
                <img
                  src={"/bgEarth.png"}
                  alt="earth"
                  width={200}
                  height={200}
                  className=" w-[1800px] object-cover absolute blur-md -z-20 bottom-[4em] right-[-10em] lg:right-[-18em] lg:bottom-[-23em]  "
                />
              </section>

              <section className="absolute right-[-4em] top-[-6vh] lg:top-[-10vh] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1378 768"
                  className="lg:w-[70vw] w-[80vw] h-auto"
                >
                  {/* World Map Path */}

                  <image
                    href="/Earth.png"
                    x="0"
                    y="0"
                    width="1378"
                    height="768"
                  />

                  {/* Glowing Pulse Circle at specific coordinates (e.g., Nigeria) */}
                  <g>
                    <circle cx="680" cy="450" r="4" fill="#EAF5F4">
                      <animate
                        attributeName="r"
                        values="4;12;4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="1;0;1"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="680"
                      cy="450"
                      r="8"
                      fill="#ADFBC5"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="r"
                        values="8;20;8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6;0;0.6"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="680"
                      cy="450"
                      r="14"
                      fill="#60DA86"
                      filter="blur(4px)"
                    >
                      <animate
                        attributeName="r"
                        values="14;30;14"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.3;0;0.3"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </svg>
              </section>
            </section>
          </section>
        </section>
      </section>
    </header>
  );
}
