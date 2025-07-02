'use client'
import { MdOutlineArrowOutward } from "react-icons/md";

const GetInTouch = ()=>{
    return (
      <section className=" flex flex-col md:flex-row gap-4 gap-y-8 w-[90vw] md:w-[60vw] md:justify-center md:items-center">
        <button className="bg-[#48B96B] hover:bg-[#6CC788] md:px-8 px-4 py-2 font-normal text-[#171615] rounded-md">
          Explore our products
        </button>
        <button className="group border border-[#48B96B] px-8 py-2 font-normal justify-center rounded-md flex items-center gap-2 transition-colors duration-100">
          We&apos;re Hiring
          <MdOutlineArrowOutward className="transform transition-transform duration-300 group-hover:rotate-45 text-[24px]" />
        </button>
      </section>
    );
}

export default GetInTouch;