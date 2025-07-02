import Image from 'next/image'
import React from 'react'

export default function OurStory() {
    return (
      <section className="">
        <section className="flex flex-col md:flex-row  justify-between w-full py-20 px-4 md:px-6 gap-10">
          <section className="pt-10">
            <section className="flex md:gap-x-4 mb-4">
              <span className="border-s-4 px-2 lg:px-2 border-[#48B96B] "></span>
              <h2 className="text-3xl font-semibold">Our Story</h2>
            </section>
            <section className="text-[#EAF5F4A6] text-md  font-light text-start  flex flex-col gap-y-10  mt-4 md:max-w-2xl">
              <p className="px-4 md:px-8">
                After a generation defined by ingenuity and relentless
                perseverance in the structural and building sector, we were
                reborn with a promise on the Rock. Today, we are committed to
                delivering high-level applications, innovative ideas, and
                transformative ventures that empower, drive, and enhance the
                lives of Africans and people around the world.
              </p>

              <p className="px-4 md:px-8">
                &quot;VigorTech is more than a tech company; we&apos;re a
                catalyst for change. Across investments, education, agriculture,
                and clean water, we turn big challenges into bold opportunities.
                Because the future isn’t waiting — and neither are we.&quot;
              </p>
            </section>

            <section className="relative">
              <section className="md:absolute md:-bottom-[10em] left-10">
                <Image
                  src={"/Earth.png"}
                  alt="sise image 1"
                  width={670}
                  height={670}
                  className=""
                />
              </section>
              <section className="bottom-[-4em] left-[-6em] md:bottom-[-15em] md:left-[-20em] md:absolute hidden md:flex   -z-[4em] blur-2xl">
                <Image
                  src={"/bgEarth.png"}
                  alt="sise image 1"
                  width={700}
                  height={700}
                  className=""
                />
              </section>

              <section className="absolute top-[13.5vh] left-[46.5%] md:top-[24.2vh] md:left-[49.5vw] z-50 ">
                <section className="map-pulse ">
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

          <section>
            <Image
              src="/elderly_man.png"
              alt="Our Story Image"
              width={350}
              height={350}
              className="w-[400px] h-auto object-cover mt-10"
            />
          </section>
        </section>
      </section>
    );
}
