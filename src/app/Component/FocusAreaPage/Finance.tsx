import React from 'react'
import SectionTitle from '../General/SectionTitle'
import Image from 'next/image'

export default function Finance() {
  return (
    <section id="finance">
      <section className="grid grid-cols-1 md:grid-cols-2  justify-between w-full md:py-20 px-4 md:px-6 relative gap-10">
        <section className="pt-10">
          <section className="flex flex-col justify-start items-start">
            <SectionTitle title="Finance" />

            <h2 className="text-center text-white pt-4 font-extrabold text-2xl md:text-4xl mb-3 leading-tight">
              Strategic financing
            </h2>
          </section>
          <section className="text-[#EAF5F4A6] text-sm  font-light text-start flex flex-col gap-y-4  mt-2 max-w-lg">
            <p>
              We believe finance should feel less like a barrier and more like a
              bridge. At Vigor Tech, we think differently about money—not as a
              complicated system to navigate, but as something that should work
              for people, not against them.
            </p>

            <p>
              Our focus is on helping individuals think long-term, make informed
              decisions, and feel more in control of their financial
              lives—whatever that looks like for them. It&apos;s about creating
              space for people to build, grow, and imagine a future where
              stability isn&apos;t out of reach.
            </p>

            <p>
              We&apos;re not here to complicate things. We&apos;re here to
              challenge outdated thinking and encourage new perspectives on what
              financial well-being can look like.
            </p>
          </section>
        </section>

        <section>
          <Image
            src="/elder_man.svg"
            alt="Our Story Image"
            width={500}
            height={500}
            quality={100}
            className="w-full h-auto object-cover mt-10 rounded-md"
          />
        </section>
      </section>
    </section>
  );
}
