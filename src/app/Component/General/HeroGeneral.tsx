import Image from "next/image";
import React, { PropsWithChildren } from "react";

export default function HeroGeneral({ children }: PropsWithChildren) {
  return (
    <header className="mb-20 font-inter pb-20 lg:pb-40 overflow-x-hidden overflow-y-hidden  z-50">
      <section className="z-0 top-[5em] md:top-[10em] h-[70vh] md:h-[70vh] w-full relative">
        <section className="flex items-center px-4 md:px-10 lg:px-20 w-full justify-evenly relative z-50">
          {/* bg image 1 */}
          {/* <section className="absolute left-0 top-[10em] md:top-[14vw] -translate-x-[50%] z-50">
            <Image
              src={"/bgEarth.png"}
              alt="Background Earth Left"
              width={1000}
              height={1000}
              className="w-[600px] object-cover md:w-[90vw] max-w-none z-50"
              priority
            />
          </section> */}

          {/* hero content */}
          <section className="z-20 md:mt-[2vh]">{children}</section>

          {/* bg image 2 */}
          <section className="absolute right-0 top-[2em] md:top-[-6em] translate-x-[55%]">
            <Image
              src={"/bgEarth.png"}
              alt="Background Earth Right"
              width={1000}
              height={1000}
              className="w-[600px] object-cover md:w-[75vw] max-w-none"
              priority
            />
          </section>
        </section>
      </section>
    </header>
  );
}
