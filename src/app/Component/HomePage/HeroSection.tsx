"use client";
import Image from "next/image";

import React, { useState } from "react";


import { MdOutlineArrowOutward } from "react-icons/md";

export default function HeroSection() {

  return (
    <header className="mb-[40vh] ">
      <section className="relative -z-10 top-[10em] h-[50vh] w-full ">
        <section className="flex items-center px-20 w-full ">
          <section className="z-20 w-[40vw] flex flex-col gap-10 absolute bottom-[-4em]">
            <section className="flex flex-col gap-6">
              <h1 className="w-[45vw] text-5xl font-bold">
                Empowering Africa with smart technology
              </h1>
              <p className="w-[45vw] text-[#EAF5F4A6] text-md">
                Innovative solutions that transform businesses through
                cutting-edge technology, expert strategy, and seamless
                integration.
              </p>
            </section>

            <section>
              <section className=" flex gap-4">
                <button className="bg-[#48B96B] px-8 py-2 font-semibold  text-[#171615] rounded-md">
                  Explore our products
                </button>
                <button className="border border-[#48B96B] px-8 py-2 font-semibold   rounded-md flex items-center gap-2">
                  Get in touch <MdOutlineArrowOutward />
                </button>
              </section>
            </section>

            <section className="flex gap-10 opacity-50 ">
              <Image
                src={"/adam.svg"}
                alt="adam"
                width={200}
                height={200}
                className="w-[100px] text-white/65"
              />
              <Image
                src={"/nervus.svg"}
                alt="adam"
                width={200}
                height={200}
                className="w-[100px] text-white/65"
              />
            </section>
          </section>

          <section className="">
            <section className=" flex justify-center flex-col  ">
              <img
                src={"/Earth.png"}
                alt="earth"
                width={1000}
                height={1000}
                className="z-50  w-[67vw] object-cover absolute right-[-5em] bottom-0 top-[-6em]"
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
            </section>
          </section>
        </section>
      </section>
    </header>
  );
}
