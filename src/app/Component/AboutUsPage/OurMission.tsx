import Image from "next/image";
import React from "react";

export default function OurMission() {
  return (
    <section className="text-white min-h-screen">
      <section className="max-w-7xl px-10 md:px-20 py-12 flex flex-col md:flex-row justify-between ">
        <section>
          <h2 className="text-3xl font-semibold border-l-4 border-[#2ecc71] pl-3 mb-3">
            Our Mission
          </h2>
          <p className="text-md text-[#EAF5F4A6] max-w-md mb-16">
            Our mission is to help everyday people take control, grow with
            confidence, and lead the future—whether in tech, learning, or
            finance. Through innovation, collaboration, and a commitment to
            excellence, Vigor Tech transforms challenges into opportunities,
            building a brighter future for Africa
          </p>
        </section>

        <section>
          <Image
            src="/our_mission.png"
            alt="Our Mission Image"
            width={800}
            height={400}
            className="w-full h-auto object-cover mt-10"
          />
        </section>
      </section>
    </section>
  );
}
