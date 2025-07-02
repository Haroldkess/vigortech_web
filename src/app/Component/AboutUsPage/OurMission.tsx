import Image from "next/image";
import React from "react";

export default function OurMission() {
  return (
    <section className="text-white min-h-[70vh] ">
      <section className="w-full px-4 md:px-6 py-12 flex flex-col md:flex-row justify-between ">
        <section>
          <section className="flex md:gap-x-4 mb-4">
            <span className="border-s-4 px-2 lg:px-2 border-[#48B96B] "></span>
            <h2 className="text-3xl font-semibold"> Our Mission</h2>
          </section>

          <section className="text-[#EAF5F4A6] text-md  font-light text-start  flex flex-col gap-y-10  mt-4 md:max-w-2xl">
            <p className="px-4 md:px-8 md:w-[614px]">
              Our mission is to help everyday people take control, grow with
              confidence, and lead the future—whether in tech, learning, or
              finance. Through innovation, collaboration, and a commitment to
              excellence, Vigor Tech transforms challenges into opportunities,
              building a brighter future for Africa
            </p>
          </section>
        </section>

        <section>
          <Image
            src="/our_mission.png"
            alt="Our Mission Image"
            width={800}
            height={400}
            className="w-[500px] h-auto object-cover mt-10"
          />
        </section>
      </section>
    </section>
  );
}
