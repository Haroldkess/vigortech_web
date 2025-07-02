"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const GetInTouch = () => {
  const [exploreHovered, setExploreHovered] = useState(false);
  const [hiringHovered, setHiringHovered] = useState(false);

  const route = useRouter()

  return (
    <section className="flex flex-col md:flex-row gap-4 gap-y-8 w-[90vw] md:w-[60vw] md:justify-center md:items-center z-50">
      {/* Explore Button */}
      <button
        onClick={() => route.push("/focus-area")}
        className="md:px-8 px-4 py-2 font-normal text-[#171615] rounded-md z-100 transition-colors duration-300"
        style={{
          backgroundColor: exploreHovered ? "#6CC788" : "#48B96B",
        }}
        onMouseEnter={() => setExploreHovered(true)}
        onMouseLeave={() => setExploreHovered(false)}
      >
        Explore our products
      </button>

      {/* We're Hiring Button */}
      <button
        onClick={() => route.push("/career")}
        className="border border-[#48B96B] hover:bg-[#6CC78840]  hover:text-white px-8 py-2 font-normal justify-center rounded-md flex items-center gap-2 transition-colors duration-100 z-100"
        onMouseEnter={() => setHiringHovered(true)}
        onMouseLeave={() => setHiringHovered(false)}
      >
        We&apos;re Hiring
        <MdOutlineArrowOutward
          className="text-[24px] transition-transform duration-300"
          style={{
            transform: hiringHovered ? "rotate(45deg)" : "rotate(0deg)",
          }}
        />
      </button>
    </section>
  );
};

export default GetInTouch;
