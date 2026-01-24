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
                {/* <div
                  className="relative w-[150.76px] h-[32.85px]
              md:w-[129.92px] md:h-[23.87px]
              lg:w-[155.19px] lg:h-[28.52px]"
                >
                  <Image
                    src={"/aplus.svg"}
                    alt="aplus"
                   // fill
                    width={200}
                    height={200}
                   // sizes="(min-width: 1024px) 155px, (min-width: 768px) 130px, 151px"
                   className=" w-[250.76px] h-[42.85px]
                   md:w-[129.92px] md:h-[33.87px]
                   lg:w-[155.19px] lg:h-[38.52px] text-white/65"
                    onClick={() => alert("Coming soon")}
                  />
                </div> */}

                <Link href={"http://aplusplaybook.com"} target="_blank">
                  <Image
                    src={"/aplus.svg"}
                    alt="aplus"
                    width={200}
                    height={200}
                    className=" w-[250.76px] h-[32.85px]
              md:w-[129.92px] md:h-[33.87px]
              lg:w-[155.19px] lg:h-[38.52px] text-white/65"
                  />
                </Link>
                <Link href={"http://getnervus.com"} target="_blank">
                  <Image
                    src={"/nervus.svg"}
                    alt="nervus"
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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1378 768"
                className="w-[90vw] h-auto"
              >
             
                <image
                  href="/Earth.png"
                  x="0"
                  y="0"
                  width="1378"
                  height="768"
                />

               
                <foreignObject x="668" y="440" width="40" height="40">
                  <div className="pulse-animation">
                    <div className="layer blur"></div>
                    <div className="layer outer"></div>
                    <div className="layer middle"></div>
                    <div className="layer inner"></div>
                  </div>
                </foreignObject>
              </svg> */}

           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1378 768"
                className="w-full h-auto max-w-[100vw]"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* World Map */}
                <image href="/Earth.png" x="0" y="0" width="1378" height="768" />

                {/* Pulse Animation */}
                <g transform="translate(689, 460)">
                  {/* BLUR layer */}
                  <circle r="6" fill="#60DA86" opacity="0.3">
                    <animate
                      attributeName="r"
                      values="1;20;1"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;0;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* OUTER layer */}
                  <circle r="5" fill="#4CCC73" opacity="0.6">
                    <animate
                      attributeName="r"
                      values="1;15;1"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0.3s"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0.2;0.6"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0.3s"
                    />
                  </circle>

                  {/* MIDDLE layer */}
                  <circle r="4" fill="#ADFBC5" opacity="0.7">
                    <animate
                      attributeName="r"
                      values="1;10;1"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0.6s"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.7;0.3;0.7"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0.6s"
                    />
                  </circle>

                  {/* INNER layer (static core) */}
                  <circle r="3" fill="#EAF5F4" />
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
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1378 768"
                  className="lg:w-[70vw] w-[80vw] h-auto"
                >
           

                  <image
                    href="/Earth.png"
                    x="0"
                    y="0"
                    width="1378"
                    height="768"
                  />

                
                  <foreignObject x="668" y="440" width="40" height="40">
                    <div className="pulse-animation">
                      <div className="layer blur"></div>
                      <div className="layer outer"></div>
                      <div className="layer middle"></div>
                      <div className="layer inner"></div>
                    </div>
                  </foreignObject>
                </svg> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1378 768"
                  className="lg:w-[70vw] w-[80vw] h-auto"
                >
                  {/* World Map Image */}
                  <image href="/Earth.png" x="0" y="0" width="1378" height="768" />

                  {/* Pulsing Marker (max 20px) */}
                  <g>
                    {/* Blur Glow */}
                    <circle cx="688" cy="460" r="1" fill="#60DA86">
                      <animate attributeName="r" values="1;10;1" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Outer */}
                    <circle cx="688" cy="460" r="1" fill="#4CCC73">
                      <animate attributeName="r" values="1;8;1" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Middle */}
                    <circle cx="688" cy="460" r="1" fill="#ADFBC5">
                      <animate attributeName="r" values="1;6;1" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Inner Core */}
                    <circle cx="688" cy="460" r="1" fill="#EAF5F4">
                      <animate attributeName="r" values="1;4;1" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
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
