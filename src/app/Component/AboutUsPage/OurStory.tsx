import Image from 'next/image'
import React from 'react'

export default function OurStory() {
    return (
      <section className="">
        <section className="flex flex-col md:flex-row  justify-between w-full py-20 px-4 md:px-6 gap-10">
          <section className="pt-10">
            <section className="flex md:gap-x-4 mb-4">
              <span className="border-s-4 px-2 lg:px-2 border-[#48B96B] "></span>
              <h2 className="text-[32px] md:text-[57px] font-bold leading-10 md:font-semibold md:leading-[64px]">
                Our Story
              </h2>
            </section>
            <section className="text-[#EAF5F4A6] text-md  font-light text-start  flex flex-col gap-y-10  mt-4 md:max-w-2xl">
              <p className="px-4 md:px-8">
                After a generation defined by ingenuity and relentless
                perseverance in the structural and building sector, we were
                reborn with a promise on the Rock. Today, we are committed to
                delivering high level applications, innovative ideas, and
                transformative ventures that empower, drive, and enhance the
                lives of Africans and people around the world.
              </p>

              <p className="px-4 md:px-8">
                &quot;VigorTech is more than a tech company; we&apos;re a
                catalyst for change. Across investments, education, agriculture,
                and clean water, we turn big challenges into bold opportunities.
                Because the future isn’t waiting and neither are we.&quot;
              </p>
            </section>

            <section className="relative">
              <section className=" flex justify-center flex-col  ">
                <section className="">
                  <img
                    src={"/bgEarth.png"}
                    alt="earth"
                    width={200}
                    height={200}
                    className="md:w-[50vw] bottom-[-4em] left-[-6em] md:bottom-[-15em] md:left-[-10em] md:absolute hidden md:flex   -z-[4em] blur-2xl "
                  />
                </section>

                <section className="absolute md:right-[-4em] top-[2vh] lg:top-[-20vh] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1378 768"
                    className="lg:w-[50vw] w-[100vw] h-auto"
                  >
                    {/* World Map Path */}

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

                 
                  </svg>
                </section>
              </section>
            </section>
          </section>

          <section className="">
            <Image
              src="/elderly_man.png"
              alt="Our Story Image"
              width={350}
              height={350}
              quality={100}
              className="w-[500px] h-auto object-cover mt-[30vh] md:mt-10"
            />
          </section>
        </section>
      </section>
    );
}
