import Image from "next/image";
import React from "react";
import SectionTitle from "../General/SectionTitle";

export default function TechSection() {
    return (
      <section id="tech">
        <section className="grid grid-cols-1 md:grid-cols-2  justify-between w-full md:py-10 px-4 md:px-6 relative gap-10">
          <section className="md:pt-10">
            <section className="flex flex-col justify-start items-start gap-y-6 md:gap-y-10">
              <SectionTitle title="Technology" />

              <h2 className="text-[32px] md:text-[45px] font-bold leading-[40px] md:font-semibold md:leading-[52px]">
                Cutting-edge Technology
              </h2>
            </section>
            <section className="text-[#EAF5F4A6] text-base font-normal text-start flex flex-col gap-y-4  mt-4 max-w-lg">
              <p>
                At Vigor Tech, we don&apos;t build for the sake of building.
                Every tool, system, and platform we develop starts with a clear
                question: What real problem are we solving? We believe
                technology should be intentional, inclusive, and impactful.
              </p>

              <p>
                From the ground up, our solutions are designed to create access
                where there was none, streamline systems that were once broken,
                and empower users who&apos;ve often been overlooked. We&apos;re
                not in the business of trends we&apos;re in the business of
                transformation.
              </p>
            </section>
          </section>

          <section>
            <Image
              src="/Tech_opportunities.svg"
              alt="Our Story Image"
              width={500}
              height={500}
              quality={100}
              className="w-full h-auto object-cover md:mt-10"
            />
          </section>
        </section>
      </section>
    );
}
