import Image from 'next/image'
import React from 'react'


import { PropsWithChildren } from 'react'

export default function HeroGeneral({ children }: PropsWithChildren) {
    return (
      <header className="mb-20 font-inter pb-20  lg:pb-40 overflow-hidden pt-[120px] ">
        <section className=" z-0 top-[5em] md:top-[10em] h-[70vh] md:h-[70vh] w-full  ">
          <section className="flex items-center px-4 md:px-10 lg:px-20 w-full justify-evenly">
            {/* bg image 1 */}
            <section className="absolute left-[-95vw] top-[10em] md:top-[14vw] md:left-[-50em]  ">
              <Image
                src={"/bgEarth.png"}
                alt="sise image 1"
                width={1000}
                height={1000}
                className="w-[600px] object-cover md:w-[90vw]"
              />
            </section>

            {/* hero content */}
            <section className="z-20">{children}</section>

            {/* bg image 2 */}
            <section className="absolute  right-[-95vw] top-[2em] md:top-[-4em] md:right-[-45em]  ">
              <Image
                src={"/bgEarth.png"}
                alt="sise image 1"
                width={1000}
                height={1000}
                className="w-[600px] object-cover md:w-[80vw]"
              />
            </section>
          </section>
        </section>
      </header>
    );
}
