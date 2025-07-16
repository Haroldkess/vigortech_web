import Image from 'next/image'
import React from 'react'

export default function NewsLetter() {
    return (
      <section className=" flex justify-center items-center w-full pb-10 md:pb-20 flex-col relative">
        <section>
          <Image
            src="/newsLetterBg.svg"
            alt="Newsletter Image"
            width={2000}
            height={2000}
            className="backdrop-blur-md  object-cover h-[40vh] md:h-[60vh] w-[100vw] mt-20 rounded-t-2xl"
          />
        </section>

        <section className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-t-2xl">
          <section className="flex flex-col w-full justify-center items-center gap-10">
            <section className=" w-full">
              <h1 className="text-white text-lg md:text-[36px] leading-[44px] font-bold text-center">
                Want product news and update?
                <br />
                Sign up for our newsletter.
              </h1>

              <section className="relative left-[28%] md:left-[48%] top-[-0.6rem] ">
                <Image
                  src="/newsLine.svg"
                  alt="Newsletter Icon"
                  width={300}
                  height={100}
                  className="h-4 md:h-8"
                />
              </section>
            </section>

            <section>
              <form className="flex justify-center items-center md:gap-4 w-full gap-2 ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="placeholder:text-[#EAF5F473] placeholder:font-inter outline-none placeholder:font-[400] focus:border-[#48B96B] px-4 py-2 w-[60vw] md:w-[30vw] rounded-md border border-[#48B96B59] bg-[#6CC7880D]"
                />
                <button
                  type="submit"
                  className="bg-[#48B96B] hover:bg-[#6CC788] text-black font-medium text-[18px] leading-[20px] px-4 py-2 rounded-md"
                >
                  Subscribe
                </button>
              </form>
            </section>
          </section>
        </section>
      </section>
    );
}
