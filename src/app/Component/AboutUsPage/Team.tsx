'use client';
import React from "react";
import SectionTitle from "../General/SectionTitle";
import TeamCard from "./TeamCard";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Team() {

 const  router = useRouter();
  const handleJoinTeam = () => {
    router.push("/career");
  };
  return (
    <div className=" text-white min-h-screen flex flex-col items-center justify-center px-8 md:px-6 py-12">
      <div className="text-center max-w-4xl w-full">
        <section>
          <div className="flex justify-center mb-6">
            <SectionTitle title="The team" />
          </div>
          <h2 className="text-center text-white font-semibold text-2xl md:text-4xl mb-3 leading-tight">
            Meet the team
          </h2>
          <p className="text-center text-[#EAF5F4A6] max-w-xl mx-auto mb-12 text-sm leading-relaxed">
            The experts driving our vision forward
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl md:mx-auto mb-12 ">
          <TeamCard
            imageSrc="/Teams/co-founder.png"
            name="Harold Osuji"
            role="Co-Founder"
          />
          <TeamCard
            imageSrc="/Teams/VA.png"
            name="Agu Precious"
            role="Virtual Assistant"
          />
          <TeamCard
            imageSrc="/Teams/cto.png"
            name="Onomuefor Nelson"
            role="CTO"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto mb-12">
          <TeamCard
            imageSrc="/Teams/QA.png"
            name="Boi Uche"
            role="QA Engineer"
          />
          <TeamCard
            imageSrc="/Teams/PD.png"
            name="Coleman Osuji"
            role="Product Designer"
          />
        </div>

        <div className="flex justify-center">
         <button onClick={()=> handleJoinTeam()} className="group border border-[#48B96B] lg:w-[357px] py-[12px] md:w-[185px] md:h-[48px] font-normal justify-center rounded-md flex items-center gap-2 transition-colors duration-100 hover:bg-[#6CC78840]  hover:text-white">
                        Join the team
                        <MdOutlineArrowOutward className="transition-transform duration-100 group-hover:rotate-45 text-[24px]" />
                      </button>
        </div>
      </div>
    </div>
  );
}
