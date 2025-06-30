import React from "react";
import SectionTitle from "../General/SectionTitle";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div className=" text-white min-h-screen flex flex-col items-center justify-center px-10 md:px-4 py-12">
      <div className="text-center max-w-4xl w-full">
        <section>
          <div className="flex justify-center mb-6">
            <SectionTitle title="The team" />
          </div>
          <h2 className="text-center text-white font-extrabold text-2xl md:text-4xl mb-3 leading-tight">
            Meet the team
          </h2>
          <p className="text-center text-[#EAF5F4A6] max-w-xl mx-auto mb-12 text-sm leading-relaxed">
            The experts driving our vision forward
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 ">
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
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-[#1f4f2e] rounded px-5 py-2 text-white text-sm font-medium hover:bg-[#1f4f2e] transition"
          >
            Join the team
          </button>
        </div>
      </div>
    </div>
  );
}
